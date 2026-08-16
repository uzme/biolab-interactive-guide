/*
  BioLab style: precise Uzbek scientific curriculum, cold laboratory canvas, clear reading rhythm.
  Content policy: model-specific settings are never invented; use official manuals and approved SOPs.
*/
import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  BarChart3,
  BookMarked,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Download,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Info,
  Library,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Equipment } from "@/lib/equipmentData";
import { equipmentImages } from "@/lib/equipmentImages";
import { getImagePresentation } from "@/lib/equipmentImagePresentation";
import { learningByNumber, purchaseByNumber } from "@/lib/learningData";

function SourceText({ value }: { value: string }) {
  const normalized = value.replace(/\*\*/g, "").replace(/^>\s?/gm, "").trim();
  const blocks = normalized.split(/\n{2,}/).filter(Boolean);
  return <div className="space-y-3 text-sm leading-7 text-[#496b70]">{blocks.map((block, index) => {
    const lines = block.split("\n").filter(Boolean);
    const isList = lines.every((line) => /^(?:[-•]|\d+\.)\s+/.test(line));
    if (isList) return <ol key={`${index}-${lines[0]}`} className="space-y-2 pl-5 marker:font-bold marker:text-[#0e8179]">{lines.map((line) => <li key={line}>{line.replace(/^(?:[-•]|\d+\.)\s+/, "")}</li>)}</ol>;
    return <p key={`${index}-${lines[0]}`} className="whitespace-pre-line">{lines.join("\n")}</p>;
  })}</div>;
}

export default function DeviceViewer({ device, onBack }: { device: Equipment; onBack: () => void }) {
  const [lessonIndex, setLessonIndex] = useState(0);
  const learning = learningByNumber[device.number];
  const purchase = purchaseByNumber[device.number];
  const image = equipmentImages[device.id];
  const imagePresentation = getImagePresentation(device.id);
  const verificationSource = learning?.sources.find((source) => source.url);
  const isOfficialImage = image?.sourceType === "official";

  const sections = useMemo(() => learning ? [
    { id: "uz-name", number: 1, title: "Qurilmaning o‘zbekcha nomi", subtitle: "Kanonik atama", icon: BookOpenCheck, content: learning.title },
    { id: "identity", number: 2, title: "Original nomi, manufacturer va model", subtitle: "Manual qidiruvi uchun", icon: Info, content: `Original nomi / qidiruv nomi: ${learning.originalName}\nManufacturer: ${learning.manufacturer}\nModel: ${learning.model}` },
    { id: "what-is", number: 3, title: "Qurilma nima?", subtitle: "Aniq, sodda ta’rif", icon: BookMarked, content: learning.whatIs },
    { id: "what-does", number: 4, title: "Qurilma nima qiladi?", subtitle: "Vazifa va natija", icon: Sparkles, content: learning.whatItDoes },
    { id: "principle", number: 5, title: "Ishlash prinsipi", subtitle: "Namuna → jarayon → natija", icon: FlaskConical, content: learning.principle },
    { id: "outcomes", number: 6, title: "Nimalarni o‘rganish mumkin?", subtitle: "Biologik va analitik savollar", icon: GraduationCap, content: learning.learningOutcomes },
    { id: "parts", number: 7, title: "Qurilmaning asosiy qismlari", subtitle: "Har bir qismning vazifasi", icon: Library, content: learning.mainParts },
    { id: "sample", number: 8, title: "Namuna tayyorlash", subtitle: "Sifat va ehtiyot choralari", icon: ClipboardCheck, content: learning.samplePreparation },
    { id: "workflow", number: 9, title: "Qanday ishlatiladi — bosqichma-bosqich", subtitle: "Tasdiqlangan workflow", icon: CheckCircle2, content: learning.workflow },
    { id: "results", number: 10, title: "Natijani o‘qish va talqin qilish", subtitle: "Raw data, QC va xulosa", icon: BarChart3, content: learning.resultInterpretation },
    { id: "errors", number: 11, title: "Eng ko‘p uchraydigan xatolar", subtitle: "Oldini olish va tekshirish", icon: AlertTriangle, content: learning.commonMistakes },
    { id: "safety", number: 12, title: "Xavfsizlik", subtitle: "SOP, PPE va cheklovlar", icon: ShieldCheck, content: learning.safety },
    { id: "maintenance", number: 13, title: "Tozalash va kundalik xizmat", subtitle: "Ishdan keyingi tartib", icon: Wrench, content: learning.maintenance },
    { id: "troubleshooting", number: 14, title: "Kalibratsiya va troubleshooting", subtitle: "Muammoni xavfsiz hal qilish", icon: Wrench, content: learning.calibrationTroubleshooting },
    { id: "practice", number: 15, title: "O‘rganish uchun amaliy mashqlar", subtitle: "Boshlang‘ichdan yuqori darajagacha", icon: GraduationCap, content: learning.practice },
    { id: "sources", number: 16, title: "Ishonchli o‘quv manbalari", subtitle: "Manual, guide va training", icon: BookMarked, content: "" },
  ] : [], [learning]);

  const activeSection = sections[lessonIndex] ?? sections[0];
  const progress = sections.length ? Math.round(((lessonIndex + 1) / sections.length) * 100) : 0;
  const purchaseSections = purchase ? [
    { value: "price", title: "Narx benchmarki va dalili", content: `${purchase.priceEvidence}\n\nManba: ${purchase.source || "manbada ko‘rsatilgan"}\nHolat: ${purchase.priceStatus || "aniqlanmagan"}` },
    { value: "buy", title: "Xarid, import va yetkazib berish", content: `${purchase.whereToBuy}\n\n${purchase.purchaseRule}\n\n${purchase.availabilityUz}\n\n${purchase.importInfo}\n\n${purchase.delivery}` },
    { value: "support", title: "Servis, sarf materiallari va TCO", content: `${purchase.service}\n\n${purchase.spares}\n\n${purchase.tco}\n\n${purchase.redFlags}\n\n${purchase.finalStatus}` },
  ] : [];

  return <div className="min-h-screen bg-[#f7fbfa] text-[#173d42]">
    <header className="sticky top-0 z-30 border-b border-[#d8e7e3] bg-[#f7fbfa]/95 px-5 py-4 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-[#126a6a] transition hover:gap-3"><ArrowLeft size={17} /> Barcha uskunalar</button>
        <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6d8b87] sm:flex"><BookOpenCheck size={15} /> 16 bo‘limli o‘quv markazi</div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              const htmlContent = `<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<title>${device.name} — BioLab O‘quv Konspekti</title>
<style>
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #173d42; line-height: 1.6; padding: 40px; max-width: 900px; margin: 0 auto; background: #fff; }
  h1 { font-size: 28px; color: #0d7774; margin-bottom: 4px; }
  .eyebrow { font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: bold; color: #6d8b87; margin-bottom: 8px; }
  .meta { background: #f2faf7; border: 1px solid #cfe5dc; padding: 15px 20px; border-radius: 12px; margin: 20px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px; }
  .section { margin-top: 25px; border-bottom: 1px solid #e1ede8; padding-bottom: 20px; }
  h2 { font-size: 18px; color: #125552; margin-bottom: 8px; }
  p, li { font-size: 14px; color: #335955; white-space: pre-line; }
  ol { padding-left: 20px; }
  .footer { margin-top: 40px; border-top: 2px solid #0d7774; padding-top: 15px; font-size: 12px; color: #78908c; display: flex; justify-content: space-between; }
  @media print { body { padding: 20px; } button { display: none; } }
</style>
</head>
<body>
<div class="eyebrow">${device.category} / BIO-${String(device.number).padStart(3, "0")}</div>
<h1>${learning?.title || device.name}</h1>
<p><strong>Original nomi:</strong> ${learning?.originalName || device.name} | <strong>Manufacturer:</strong> ${learning?.manufacturer || "—"} | <strong>Model:</strong> ${learning?.model || device.model}</p>

<div class="meta">
  <div><strong>O‘quv tuzilmasi:</strong> 16 ta ketma-ket bo‘lim</div>
  <div><strong>Rasm manbasi:</strong> ${isOfficialImage ? "Rasmiy mahsulot rasmi" : "Laboratoriya-realistik AI vizuali"}</div>
</div>

${sections.map(s => `
  <div class="section">
    <h2>${s.number}. ${s.title}</h2>
    <p>${s.content || (s.id === 'sources' ? (learning?.sources || []).map(src => src.label + ': ' + src.note + (src.url ? ' (' + src.url + ')' : '')).join('\n\n') : '')}</p>
  </div>
`).join('')}

${purchase ? `
  <div class="section">
    <h2>Qo‘shimcha: Xarid va foydalanish xarajatlari</h2>
    <p><strong>Narx benchmarki:</strong> ${purchase.price || device.newPrice}</p>
    <p>${purchase.priceEvidence}</p>
    <p><strong>Xarid va import:</strong> ${purchase.whereToBuy} — ${purchase.availabilityUz}</p>
  </div>
` : ''}

<div class="footer">
  <span>BioLab Interactive Guide — Professional Bioteknologiya Qurilmalari O‘quv Platformasi</span>
  <span>Sahifa: O‘quv Konspekti (PDF eksport)</span>
</div>
<script>window.print();</script>
</body>
</html>`;
              const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
              const url = URL.createObjectURL(blob);
              const win = window.open(url, "_blank");
              if (!win) {
                const a = document.createElement("a");
                a.href = url;
                a.download = `BioLab_${device.id}_konspekt.html`;
                a.click();
              }
            }}
            className="flex items-center gap-2 rounded-xl border border-[#0d7774] bg-[#0d7774] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#075e5c]"
          >
            <Download size={15} /> PDF eksport qilish
          </button>
          <div className="rounded-full border border-[#b7d6ca] bg-white px-3 py-1.5 text-xs font-bold text-[#126a6a]">{lessonIndex + 1} / 16</div>
        </div>
      </div>
    </header>

    <main className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 sm:py-10">
      <section className="border-b border-[#dbe9e5] pb-8">
        <div className="eyebrow mb-3">{device.category} / BIO-{String(device.number).padStart(3, "0")}</div>
        <h1 className="display max-w-4xl text-4xl font-bold leading-[0.98] text-[#173d42] sm:text-6xl">{learning?.title || device.name}</h1>
        {image && <figure className="relative mt-7 overflow-hidden rounded-[28px] border border-[#cfe3dd] bg-[#eaf5f2] shadow-[0_18px_42px_rgba(28,71,67,0.08)]">
          {imagePresentation.fit === "contain" && <img aria-hidden="true" src={image.url} alt="" className="absolute inset-0 h-[min(480px,58vw)] w-full scale-110 object-cover opacity-25 blur-2xl" style={{ objectPosition: imagePresentation.position }} />}
          <img src={image.url} alt={image.alt} className={`relative h-[min(480px,58vw)] min-h-[250px] w-full ${imagePresentation.fit === "contain" ? "object-contain p-5" : "object-cover"}`} style={{ objectPosition: imagePresentation.position }} loading="eager" />
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-[#dceae5] bg-[#fbfefd] px-5 py-3 text-xs leading-5 text-[#66847e]">
            <span>{image.sourceType === "official" ? "Rasmiy mahsulot rasmi" : "Qurilma turining laboratoriya-realistik vizuali"}</span>
            <span className="font-bold uppercase tracking-[0.13em] text-[#0d7774]">O‘quv ko‘rgazmasi</span>
          </figcaption>
        </figure>}
        {image && <section aria-label="Rasm manbasi va foydalanish shaffofligi" className="mt-4 overflow-hidden rounded-[22px] border border-[#bddbd1] bg-[#eef8f4] shadow-[0_10px_28px_rgba(28,71,67,0.045)]">
          <div className="flex flex-col justify-between gap-3 border-b border-[#cbe4da] px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0d7774] text-white"><Info size={17} /></span><div><div className="tech-label text-[#42736d]">Rasm shaffofligi</div><h2 className="mt-0.5 text-base font-bold text-[#174a4b]">Manba va foydalanish holati</h2></div></div>
            <span className={`w-fit rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${isOfficialImage ? "border-[#a9d7c5] bg-white text-[#087a73]" : "border-[#d9c58e] bg-[#fffaf0] text-[#866011]"}`}>{isOfficialImage ? "Mahsulot manbasi" : "AI vizuali"}</span>
          </div>
          <div className="grid divide-y divide-[#cfe5dc] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="p-5"><div className="tech-label text-[#6c8d86]">Rasm manbasi</div><p className="mt-2 text-sm font-bold leading-6 text-[#214d50]">{isOfficialImage ? "Rasmiy ishlab chiqaruvchi yoki ishonchli distributor mahsulot fotosurati" : "BioLab uchun yaratilgan laboratoriya-realistik AI ko‘rgazma vizuali"}</p><p className="mt-2 text-sm leading-6 text-[#5d7c76]">{isOfficialImage ? "Tanlangan manba, model/tur mosligi bilan ichki rasm reyestrida qayd etilgan. Quyidagi havola model va ishlab chiqaruvchi ma’lumotini tekshirish uchun beriladi." : "Bu tasvir haqiqiy ishlab chiqaruvchi fotosurati yoki ma’lum bir modelning ko‘rinishi emas; u qurilma turini o‘quv maqsadida tasavvur qilishga yordam beradi."}</p>{verificationSource?.url && <a href={verificationSource.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#087a73] underline decoration-[#87cdb7] underline-offset-4 transition hover:text-[#075e5c]">Model/ishlab chiqaruvchi manbasini ochish <ExternalLink size={15} /></a>}</div>
            <div className="p-5"><div className="tech-label text-[#6c8d86]">Litsenziya va qayta foydalanish</div><p className="mt-2 text-sm font-bold leading-6 text-[#214d50]">{isOfficialImage ? "Mualliflik huquqi tegishli rasm egasida qoladi" : "BioLab o‘quv ko‘rgazmasi sifatida yaratilgan"}</p><p className="mt-2 text-sm leading-6 text-[#5d7c76]">{isOfficialImage ? "Rasm faqat qurilmani aniqlash va o‘qitish kontekstida ko‘rsatiladi. Uni yuklab olish, qayta nashr qilish yoki tijoriy ishlatishdan oldin asl manba saytining foydalanish shartlari va huquq egasining alohida ruxsatini tekshiring." : "Tasvir qurilmani tanitish uchun ishlatiladi. U asbobning texnik spetsifikatsiyasi, rasmiy modeli yoki laboratoriya validatsiyasi o‘rnini bosa olmaydi."}</p>{verificationSource?.url && <a href={verificationSource.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#087a73] underline decoration-[#87cdb7] underline-offset-4 transition hover:text-[#075e5c]">Manba sayti va foydalanish shartlarini tekshirish <ExternalLink size={15} /></a>}</div>
          </div>
        </section>}
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#5b7773]">{learning?.whatIs || device.description}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#d8e7e3] bg-white p-4"><div className="tech-label text-[#78908c]">Original nomi</div><div className="mt-2 text-sm font-bold leading-5 text-[#214d50]">{learning?.originalName || device.name}</div></div>
          <div className="rounded-2xl border border-[#d8e7e3] bg-white p-4"><div className="tech-label text-[#78908c]">Manufacturer / model</div><div className="mt-2 text-sm font-bold leading-5 text-[#214d50]">{learning?.manufacturer || "—"} · {learning?.model || device.model}</div></div>
          <div className="rounded-2xl border border-[#d8e7e3] bg-white p-4"><div className="tech-label text-[#78908c]">O‘quv tuzilmasi</div><div className="mt-2 text-sm font-bold leading-5 text-[#214d50]">16 ta ketma-ket bo‘lim</div></div>
        </div>
      </section>

      {sections.length > 0 && <section className="mt-8 grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[24px] border border-[#d8e7e3] bg-white p-4 shadow-[0_14px_40px_rgba(28,71,67,0.06)]">
            <div className="mb-4 px-2"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-[#71918b]"><span>O‘quv progressi</span><span>{progress}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8f1ef]"><div className="h-full rounded-full bg-[#0d7774] transition-all duration-300" style={{ width: `${progress}%` }} /></div></div>
            <nav className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1" aria-label="16 bo‘limli o‘quv dasturi">{sections.map((section, index) => { const Icon = section.icon; return <button key={section.id} onClick={() => setLessonIndex(index)} className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${lessonIndex === index ? "border-[#0d7774] bg-[#0d7774] text-white shadow-[0_10px_22px_rgba(13,119,116,0.18)]" : "border-transparent bg-[#fbfefd] text-[#35625f] hover:border-[#c7dfd7] hover:bg-[#f1faf7]"}`}><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-bold ${lessonIndex === index ? "bg-white/15 text-[#bbf2e1]" : "bg-[#e7f4ef] text-[#087a73]"}`}>{section.number}</span><span className="min-w-0"><span className="flex items-center gap-2 text-sm font-bold"><Icon size={15} className="shrink-0" />{section.title}</span><span className={`mt-0.5 block text-xs ${lessonIndex === index ? "text-[#c5ede0]" : "text-[#7a9892]"}`}>{section.subtitle}</span></span></button>; })}</nav>
          </div>
        </aside>

        {activeSection && <article className="rounded-[28px] border border-[#d8e7e3] bg-white p-6 shadow-[0_16px_45px_rgba(28,71,67,0.06)] sm:p-9">
          <div className="mb-7 border-b border-[#deebe7] pb-6"><div className="eyebrow mb-3">{String(activeSection.number).padStart(2, "0")} — O‘quv bo‘limi</div><div className="flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#dff3eb] text-[#087a73]"><activeSection.icon size={22} /></span><div><h2 className="display text-3xl font-bold text-[#173d42]">{activeSection.title}</h2><p className="mt-1 text-sm text-[#6c8984]">{activeSection.subtitle}</p></div></div></div>
          {activeSection.id !== "sources" ? <SourceText value={activeSection.content} /> : <div className="space-y-4">{learning?.sources.map((source) => <div key={source.label} className="rounded-2xl border border-[#d9e8e3] bg-[#fbfefd] p-5"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-[#214d50]">{source.label}</h3><p className="mt-2 text-sm leading-6 text-[#56756f]">{source.note}</p></div>{source.url && <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-[#b9d8cd] px-3 py-2 text-xs font-bold text-[#0d7774] hover:bg-[#e3f2e9]">Ochish <ExternalLink size={14} /></a>}</div></div>)}</div>}
          <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-[#deebe7] pt-5"><Button variant="outline" className="border-[#b7d6ca] text-[#126a6a]" disabled={lessonIndex === 0} onClick={() => setLessonIndex((index) => index - 1)}>Oldingi bo‘lim</Button><Button className="bg-[#0d7774] text-white hover:bg-[#075e5c]" disabled={lessonIndex === sections.length - 1} onClick={() => setLessonIndex((index) => index + 1)}>Keyingi bo‘lim</Button></div>
        </article>}
      </section>}

      {purchase && <section className="mt-10 rounded-[28px] border border-[#c8dfd8] bg-[#eff8f5] p-5 sm:p-7">
        <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end"><div><div className="eyebrow mb-2">Qo‘shimcha qaror moduli</div><h2 className="display text-3xl font-bold text-[#173d42]">Xarid va foydalanish xarajatlari</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#587873]">Asosiy o‘quv dasturidan keyin model, konfiguratsiya, servis va import masalalarini baholash uchun.</p></div><div className="rounded-2xl border border-[#bcdcd1] bg-white px-5 py-4 text-right shadow-sm"><div className="tech-label text-[#6f8e87]">Narx benchmarki</div><div className="mt-1 text-lg font-bold text-[#0b706b]">{purchase.price || device.newPrice}</div></div></div>
        <Accordion type="single" collapsible className="rounded-2xl border border-[#cbded7] bg-white px-5 sm:px-6">{purchaseSections.map((section) => <AccordionItem key={section.value} value={section.value} className="border-[#dceae5]"><AccordionTrigger className="py-5 text-left font-bold text-[#214d50] no-underline hover:no-underline"><span className="flex items-center gap-3"><PackageSearch size={18} className="text-[#087a73]" />{section.title}</span></AccordionTrigger><AccordionContent className="pb-6"><SourceText value={section.content} /></AccordionContent></AccordionItem>)}</Accordion>
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#edd8a5] bg-[#fff9e9] p-4 text-sm leading-6 text-[#75612e]"><AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#b17813]" /><span>Ko‘rsatilgan narx va yetkazib berish ma’lumotlari yakuniy tijorat taklifi emas. Konfiguratsiya, servis, sertifikat va O‘zbekistondagi yetkazib berish shartlari bo‘yicha yozma RFQ olinadi.</span></div>
      </section>}
    </main>
  </div>;
}
