import { mkdir, readFile, writeFile } from "node:fs/promises";
import { equipment } from "../../client/src/lib/equipmentData";
import { loadLearningContent, loadPurchaseContent } from "../../client/src/lib/learningData";

type Locale = "en" | "ru";
type TranslationRecord = {
  id: string;
  en: { equipment: Record<string, unknown>; learning: Record<string, unknown> | null; purchase: Record<string, unknown> | null };
  ru: { equipment: Record<string, unknown>; learning: Record<string, unknown> | null; purchase: Record<string, unknown> | null };
};

const model = process.env.BIOLAB_TRANSLATION_MODEL || "gpt-5-mini";
const outputPath = process.env.BIOLAB_TRANSLATION_OUTPUT || "client/src/lib/generated/catalogTranslations.json";
const concurrency = Number(process.env.BIOLAB_TRANSLATION_CONCURRENCY || 4);

function translatedInput(device: typeof equipment[number], learning: Record<string, unknown> | null, purchase: Record<string, unknown> | null) {
  return {
    equipment: {
      name: device.name,
      category: device.category,
      description: device.description,
      purpose: device.purpose,
      hiddenCosts: device.hiddenCosts,
      purchasingStrategy: device.purchasingStrategy,
    },
    learning,
    purchase,
  };
}

function cleanLearning(value: Record<string, unknown> | undefined) {
  if (!value) return null;
  const { number: _number, sourceKind: _sourceKind, ...rest } = value;
  return rest;
}

function cleanPurchase(value: Record<string, unknown> | undefined) {
  if (!value) return null;
  const { number: _number, sourceKind: _sourceKind, ...rest } = value;
  return rest;
}

async function translateOne(device: typeof equipment[number]): Promise<TranslationRecord> {
  const learning = cleanLearning(await loadLearningContent(device.number) as unknown as Record<string, unknown> | undefined);
  const purchase = cleanPurchase(await loadPurchaseContent(device.number) as unknown as Record<string, unknown> | undefined);
  const source = translatedInput(device, learning, purchase);
  const prompt = [
    "Translate the supplied biotechnology catalog record from Uzbek into professional English and Russian.",
    "Return JSON only with exactly this shape: {en:{equipment:{...},learning:{...}|null,purchase:{...}|null},ru:{equipment:{...},learning:{...}|null,purchase:{...}|null}}.",
    "Preserve every key, newline, list numbering, markdown emphasis, URLs, model numbers, brand names, scientific abbreviations, units, prices and proper nouns exactly unless grammar requires surrounding translation.",
    "Translate explanatory prose, section titles, source labels/notes, UI-like phrases inside the record, and Uzbek text inside all nested strings. Do not invent specifications, claims, citations, prices or safety instructions. Keep technical model names in their official form.",
    JSON.stringify(source),
  ].join("\n\n");
  const response = await fetch(`${process.env.OPENAI_API_BASE}/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "You are a senior scientific translator specializing in laboratory instrumentation, biosafety, molecular biology and technical documentation. Output valid JSON only." },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 18000,
      response_format: { type: "json_object" },
    }),
  });
  if (!response.ok) throw new Error(`${device.id}: ${response.status} ${await response.text()}`);
  const payload = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
  const content = payload.choices?.[0]?.message?.content;
  if (!content) throw new Error(`${device.id}: empty model response`);
  const parsed = JSON.parse(content) as TranslationRecord;
  if (!parsed.en || !parsed.ru || !parsed.en.equipment || !parsed.ru.equipment) throw new Error(`${device.id}: invalid translation shape`);
  return { id: device.id, en: parsed.en, ru: parsed.ru };
}

async function main() {
  await mkdir("client/src/lib/generated", { recursive: true });
  let existing: TranslationRecord[] = [];
  try { existing = JSON.parse(await readFile(outputPath, "utf8")) as TranslationRecord[]; } catch { /* first run */ }
  const done = new Map(existing.map((record) => [record.id, record]));
  const pending = equipment.filter((device) => !done.has(device.id));
  console.log(`Translation batch: ${pending.length} pending, ${done.size} already complete, model=${model}`);
  let cursor = 0;
  async function worker() {
    while (true) {
      const index = cursor++;
      if (index >= pending.length) return;
      const device = pending[index];
      for (let attempt = 1; attempt <= 3; attempt += 1) {
        try {
          const record = await translateOne(device);
          done.set(record.id, record);
          await writeFile(outputPath, JSON.stringify([...done.values()].sort((a, b) => a.id.localeCompare(b.id)), null, 2) + "\n");
          console.log(`translated ${record.id} (${done.size}/${equipment.length})`);
          break;
        } catch (error) {
          if (attempt === 3) throw error;
          await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
        }
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, pending.length) }, () => worker()));
  console.log(`Translation complete: ${done.size} records at ${outputPath}`);
}

void main().catch((error) => { console.error(error); process.exitCode = 1; });
