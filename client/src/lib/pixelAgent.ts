import type { Equipment } from "@/lib/equipmentData";

export type PixelAgentSource = Pick<Equipment, "id" | "name" | "model" | "category" | "description" | "purpose" | "newPrice">;

export type PixelAgentReply = {
  text: string;
  sources: PixelAgentSource[];
};

const stopWords = new Set([
  "qaysi", "qanday", "qayerda", "uchun", "haqida", "aytib", "ber", "menga", "bilan",
  "nima", "bu", "shu", "top", "kerak", "mumkin", "mi", "men", "siz", "va", "yoki",
]);

function normalize(value: string) {
  return value
    .toLocaleLowerCase("uz-UZ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value: string) {
  return normalize(value)
    .split(/[\s-]+/)
    .filter((token) => token.length > 1 && !stopWords.has(token));
}

function sourceFromDevice(device: Equipment): PixelAgentSource {
  return {
    id: device.id,
    name: device.name,
    model: device.model,
    category: device.category,
    description: device.description,
    purpose: device.purpose,
    newPrice: device.newPrice,
  };
}

export function searchCatalog(query: string, equipment: Equipment[], limit = 4): Equipment[] {
  const cleaned = normalize(query);
  const queryTokens = tokens(query);
  if (!cleaned) return [];

  return equipment
    .map((device) => {
      const fields = [device.id, device.name, device.model, device.models, device.brands, device.category, device.description, device.purpose]
        .map(normalize);
      const searchable = fields.join(" ");
      let score = 0;

      if (normalize(device.id) === cleaned) score += 100;
      if (normalize(device.model).includes(cleaned)) score += 60;
      if (normalize(device.name).includes(cleaned)) score += 50;
      if (normalize(device.category).includes(cleaned)) score += 30;
      queryTokens.forEach((token) => {
        if (normalize(device.id).includes(token)) score += 32;
        if (normalize(device.name).includes(token)) score += 24;
        if (normalize(device.model).includes(token)) score += 22;
        if (searchable.includes(token)) score += 8;
      });

      return { device, score };
    })
    .filter(({ score }) => score > 0)
    .sort((first, second) => second.score - first.score || first.device.number - second.device.number)
    .slice(0, limit)
    .map(({ device }) => device);
}

function hasAny(query: string, words: string[]) {
  const cleaned = normalize(query);
  return words.some((word) => cleaned.includes(normalize(word)));
}

export function buildAgentReply(query: string, equipment: Equipment[]): PixelAgentReply {
  const cleaned = normalize(query);
  if (!cleaned) {
    return {
      text: "Savolingizni yozing — men 100 ta BioLab qurilmasi, model, maqsad, kategoriya va boshlang‘ich narx bo‘yicha tezkor katalog yo‘l-yo‘riq beraman.",
      sources: [],
    };
  }

  if (hasAny(cleaned, ["salom", "assalom", "hello"])) {
    return {
      text: "Salom. Men BioLab katalogining Pixel Agentiman. Qurilma nomi, BIO kodi, model, kategoriya yoki laboratoriya vazifasini yozing — mos rekordlarni topib beraman.",
      sources: [],
    };
  }

  const matches = searchCatalog(query, equipment);
  if (matches.length === 0) {
    return {
      text: "Bu so‘rov bo‘yicha katalogdan aniq rekord topilmadi. BIO-001 kabi kod, qurilma nomi, model yoki ‘DNK amplifikatsiyasi’, ‘sovutish’, ‘sterilizatsiya’ kabi vazifa bilan qayta urinib ko‘ring.",
      sources: [],
    };
  }

  const primary = matches[0];
  const detail = hasAny(cleaned, ["model", "rusum", "nomi"])
    ? `Modeli: ${primary.model}.`
    : hasAny(cleaned, ["narx", "qancha", "budjet"])
      ? `Yangi qurilma uchun ko‘rsatilgan boshlang‘ich diapazon: ${primary.newPrice}.`
      : hasAny(cleaned, ["brend", "ishlab chiqaruvchi", "manufacturer"])
        ? `Tavsiya etilgan ishlab chiqaruvchilar: ${primary.brands}.`
        : hasAny(cleaned, ["maqsad", "vazifa", "nima qiladi", "ishlatiladi"])
          ? `Asosiy vazifasi: ${primary.purpose}.`
          : primary.description;

  const extra = matches.length > 1
    ? ` Yana ${matches.length - 1} ta yaqin rekord topildi.`
    : "";

  return {
    text: `${primary.id} — ${primary.name} (${primary.category}). ${detail}${extra}`,
    sources: matches.map(sourceFromDevice),
  };
}

export function getQuickPrompts() {
  return [
    "BIO-001 haqida ayt",
    "Sentrifuga qaysi model?",
    "DNK amplifikatsiyasi uchun nima kerak?",
    "ELISA narxi qancha?",
  ];
}
