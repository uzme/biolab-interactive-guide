/*
  BioLab style: cold laboratory canvas, deep teal technical schematic, precise Uzbek learning sequence.
  Content rule: display user-provided educational/purchase content without fabricating values.
*/
import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  Box,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  Crosshair,
  Info,
  PackageSearch,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Equipment } from "@/lib/equipmentData";
import { learningByNumber, purchaseByNumber } from "@/lib/learningData";

type Hotspot = { id: string; label: string; detail: string };

const hotspots: Hotspot[] = [
  { id: "control", label: "Boshqaruv interfeysi", detail: "Modelga tegishli dastur, parametrlar va ishga tushirish nazorati shu qism orqali boshqariladi." },
  { id: "core", label: "Asosiy ishchi modul", detail: "Namuna, o‘lchov yoki jarayon aynan shu funksional zonada bajariladi. Aniq konfiguratsiya model manualida ko‘rsatiladi." },
  { id: "safety", label: "Xavfsizlik va servis nuqtasi", detail: "Ish boshlashdan oldin xavfsizlik indikatorlari, yopilish/ulanishlar va tegishli SOP talablarini tekshiring." },
];

function SourceText({ value }: { value: string }) {
  const normalized = value.replace(/\*\*/g, "").replace(/^>\s?/gm, "").trim();
  const blocks = normalized.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="space-y-3 text-sm leading-7 text-[#496b70]">
      {blocks.map((block, index) => {
        const lines = block.split("\n").filter(Boolean);
        const isList = lines.every((line) => /^[-•]\s+/.test(line));
        if (isList) {
          return <ul key={`${index}-${lines[0]}`} className="space-y-2 pl-5 marker:text-[#0e8179]">{lines.map((line) => <li key={line}>{line.replace(/^[-•]\s+/, "")}</li>)}</ul>;
        }
        return <p key={`${index}-${lines[0]}`} className="whitespace-pre-line">{lines.join("\n")}</p>;
      })}
    </div>
  );
}

export default function DeviceViewer({ device, onBack }: { device: Equipment; onBack: () => void }) {
  const [activeHotspot, setActiveHotspot] = useState(hotspots[0]);
  const [tourStep, setTourStep] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [lessonIndex, setLessonIndex] = useState(0);
  const learning = learningByNumber[device.number];
  const purchase = purchaseByNumber[device.number];

  const lessons = useMemo(() => learning ? [
    { id: "intro", title: "1. Tanishuv", subtitle: "Nima va nima qiladi", icon: BookOpenCheck, content: `${learning.whatIs}\n\n${learning.whatItDoes}\n\n${learning.learningOutcomes}` },
    { id: "principle", title: "2. Ishlash prinsipi", subtitle: "Jarayonning ilmiy asosi", icon: Sparkles, content: learning.principle },
    { id: "workflow", title: "3. Foydalanish tartibi", subtitle: "Ish jarayoni", icon: ClipboardCheck, content: learning.workflow },
    { id: "quality", title: "4. Natija va xatolar", subtitle: "Talqin va sifat nazorati", icon: BarChart3, content: `${learning.resultInterpretation}\n\n${learning.commonMistakes}` },
    { id: "safe", title: "5. Xavfsizlik va xizmat", subtitle: "SOP, PPE va texnik xizmat", icon: ShieldCheck, content: `${learning.safety}\n\n${learning.maintenance}` },
    { id: "practice", title: "6. Amaliy mashq", subtitle: "Bilimni mustahkamlash", icon: CheckCircle2, content: learning.practice },
  ] : [], [learning]);

  const tour = useMemo(() => learning ? [
    { title: "Qurilma bilan tanishing", text: learning.whatIs },
    { title: "Ishlash prinsipini tushuning", text: learning.principle },
    { title: "Amaliy jarayonni o‘rganing", text: learning.workflow },
  ] : [], [learning]);

  const activeLesson = lessons[lessonIndex] ?? lessons[0];
  const progress = lessons.length ? Math.round(((lessonIndex + 1) / lessons.length) * 100) : 0;
  const purchaseSections = purchase ? [
    { value: "price", title: "Narx va narx dalili", icon: ShoppingCart, content: `${purchase.priceEvidence}\n\nManba: ${purchase.source || "manbada ko‘rsatilgan"}\nHolat: ${purchase.priceStatus || "aniqlanmagan"}` },
    { value: "buy", title: "Qayerdan olish va xarid qoidasi", icon: PackageSearch, content: `${purchase.whereToBuy}\n\n${purchase.purchaseRule}` },
    { value: "uz", title: "O‘zbekistonda topilishi va import", icon: Box, content: `${purchase.availabilityUz}\n\n${purchase.importInfo}\n\n${purchase.delivery}` },
    { value: "service", title: "Servis, ehtiyot qismlar va sarf materiallari", icon: Wrench, content: `${purchase.service}\n\n${purchase.spares}` },
    { value: "decision", title: "TCO, qizil bayroqlar va yakuniy status", icon: AlertTriangle, content: `${purchase.tco}\n\n${purchase.redFlags}\n\n${purchase.finalStatus}` },
  ] : [];

  return (
    <div className="min-h-screen bg-[#f7fbfa] text-[#173d42]">
      <header className="sticky top-0 z-30 border-b border-[#d8e7e3] bg-[#f7fbfa]/95 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-[#126a6a] transition hover:gap-3"><ArrowLeft size={17} /> Barcha uskunalar</button>
          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6d8b87] sm:flex"><Box size={15} /> O‘quv markazi</div>
          <Button variant="outline" className="border-[#b7d6ca] bg-transparent text-[#126a6a] hover:bg-[#edf7f4]" onClick={() => setShowInfo((value) => !value)}><CircleHelp size={16} /> <span className="hidden sm:inline">Yo‘riqnoma</span></Button>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 sm:py-10">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_320px] lg:items-end">
          <div className="fade-in">
            <div className="eyebrow mb-3">{device.category} / BIO-{String(device.number).padStart(3, "0")}</div>
            <h1 className="display max-w-3xl text-4xl font-bold leading-[0.98] text-[#173d42] sm:text-6xl">{learning?.title || device.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b7773]">{learning?.whatIs || device.description}</p>
          </div>
          <div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5 shadow-[0_14px_40px_rgba(28,71,67,0.06)]">
            <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-[#71918b]"><span>O‘quv progressi</span><span>{progress}%</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-[#e8f1ef]"><div className="h-full rounded-full bg-[#0d7774] transition-all duration-300" style={{ width: `${progress}%` }} /></div>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#2e5e5b]"><Sparkles size={15} className="text-[#0d9d8d]" /> {activeLesson?.title || "O‘quv moduli"}</div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.3fr)_minmax(330px,0.7fr)]">
          <section className="model-stage relative min-h-[540px] overflow-hidden rounded-[28px] border border-[#215b5e] p-5 shadow-[0_24px_60px_rgba(18,76,76,0.18)] sm:p-8">
            <div className="absolute left-6 top-6 z-10 rounded-full border border-white/15 bg-[#0d464d]/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b7eee0] backdrop-blur-md">Texnik blok-sxema</div>
            <div className="absolute right-6 top-6 z-10 hidden text-xs text-[#b7eee0] sm:block">Interaktiv qismlarni tanlang</div>
            <div className="relative h-[430px] sm:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center" aria-label={`${device.name} uchun soddalashtirilgan texnik sxema`}>
                <div className="relative h-[265px] w-[360px] rounded-[26px] border border-[#7ec9ba]/50 bg-gradient-to-br from-[#d6eee7] via-[#b5dcd3] to-[#76b8ad] shadow-[0_26px_50px_rgba(3,35,44,0.36)] sm:h-[310px] sm:w-[440px]">
                  <div className="absolute inset-x-6 top-5 h-7 rounded-lg border border-[#75aaa3] bg-[#a8d1c8]/80" />
                  <div className="absolute left-8 top-16 h-32 w-[210px] rounded-2xl border border-[#6da69d] bg-[#85bdb4]/75 shadow-inner sm:left-10 sm:h-40 sm:w-[265px]"><div className="absolute inset-5 rounded-xl border-2 border-dashed border-[#d7f5e8]/70" /><div className="absolute bottom-5 left-1/2 h-7 w-24 -translate-x-1/2 rounded-md bg-[#4f918b]/80" /></div>
                  <div className="absolute right-7 top-16 h-24 w-24 rounded-xl border border-[#6da69d] bg-[#e5f6f0]/85 p-3 sm:right-10 sm:h-28 sm:w-28"><div className="mb-3 h-2 w-10 rounded bg-[#2e7a76]/70" /><div className="space-y-2"><div className="h-1.5 w-full rounded bg-[#8abcb3]" /><div className="h-1.5 w-4/5 rounded bg-[#8abcb3]" /><div className="h-5 w-8 rounded border border-[#2e7a76]/40 bg-[#bfe6d9]" /></div></div>
                  <div className="absolute bottom-4 left-8 right-8 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.16em] text-[#2d6f6a]"><span>LEARN / OPERATE</span><span>MODEL: {device.model.slice(0, 18)}</span></div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 z-20">
                {hotspots.map((spot, index) => <button key={spot.id} className={`pointer-events-auto absolute grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[#73e0c2] text-[#0f4548] shadow-lg transition hover:scale-110 ${activeHotspot.id === spot.id ? "ring-4 ring-[#73e0c2]/30" : ""}`} style={{ left: `${[68, 36, 55][index]}%`, top: `${[38, 56, 28][index]}%` }} aria-label={spot.label} onClick={() => { setActiveHotspot(spot); setShowInfo(true); }}><Crosshair size={14} /></button>)}
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0a3d45]/75 px-4 py-3 text-xs text-[#c4e9df] backdrop-blur-md">
              <span><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#73e0c2]" />Hotspotni tanlang</span>
              <span>3D ko‘rinish vaqtincha o‘chirilgan</span>
            </div>
          </section>

          <aside className="space-y-5">
            <section className="rounded-[26px] border border-[#d8e7e3] bg-[#ffffff] p-6 shadow-[0_14px_40px_rgba(28,71,67,0.06)]">
              <div className="mb-5 flex items-start justify-between gap-3"><div><div className="eyebrow mb-2">Interaktiv detal</div><h2 className="display text-2xl font-bold text-[#173d42]">{activeHotspot.label}</h2></div><div className="grid h-9 w-9 place-items-center rounded-xl bg-[#d9f0e5] text-[#087a73]"><Info size={17} /></div></div>
              <p className="text-sm leading-6 text-[#5b7773]">{activeHotspot.detail}</p>
              <div className="mt-5 border-t border-[#e4efec] pt-4 text-xs text-[#78908c]">Bu soddalashtirilgan o‘quv sxemasi; aniq konfiguratsiya uchun model manualiga qarang.</div>
            </section>

            {showInfo && tour.length > 0 && <section className="rounded-[26px] border border-[#0d7774] bg-[#0d7774] p-6 text-[#effcf5] shadow-[0_14px_40px_rgba(13,119,116,0.2)]">
              <div className="eyebrow mb-2 text-[#a8e8d5]">Bosqichma-bosqich</div><h2 className="display text-2xl font-bold">{tour[tourStep].title}</h2><p className="mt-3 text-sm leading-6 text-[#d1f1e6]">{tour[tourStep].text}</p>
              <div className="mt-6 flex items-center justify-between"><span className="text-xs font-bold text-[#a8e8d5]">{tourStep + 1} / {tour.length}-qadam</span><div className="flex gap-2"><Button size="sm" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" disabled={tourStep === 0} onClick={() => setTourStep((step) => step - 1)}>Ortga</Button><Button size="sm" className="bg-[#d9f0e5] text-[#075b5d] hover:bg-white" disabled={tourStep === tour.length - 1} onClick={() => setTourStep((step) => step + 1)}>Keyingi</Button></div></div>
            </section>}

            <section className="rounded-[26px] border border-[#d8e7e3] bg-[#ffffff] p-6 shadow-[0_14px_40px_rgba(28,71,67,0.06)]">
              <div className="mb-4 flex items-center justify-between"><h2 className="display text-xl font-bold">Tezkor ma’lumot</h2><span className="rounded-full bg-[#eaf6f2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#14766e]">Manbali</span></div>
              <div className="space-y-3 text-sm"><div className="flex justify-between gap-3 border-b border-[#e5eee8] pb-3"><span className="text-[#78908c]">Model</span><span className="max-w-[190px] text-right font-semibold text-[#315e5b]">{learning?.model || device.model}</span></div><div className="flex justify-between gap-3 border-b border-[#e5eee8] pb-3"><span className="text-[#78908c]">Xarid benchmarki</span><span className="max-w-[190px] text-right font-semibold text-[#315e5b]">{purchase?.price || device.newPrice}</span></div><div className="flex justify-between gap-3"><span className="text-[#78908c]">O‘quv bloklari</span><span className="text-right font-semibold text-[#315e5b]">6 ta tartibli modul</span></div></div>
            </section>
          </aside>
        </div>

        {lessons.length > 0 && <section className="mt-8 rounded-[28px] border border-[#d8e7e3] bg-white p-5 shadow-[0_16px_45px_rgba(28,71,67,0.06)] sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end"><div><div className="eyebrow mb-2">Tartibli o‘quv dasturi</div><h2 className="display text-3xl font-bold text-[#173d42]">Qurilmani olti qadamda o‘rganing</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#6a8782]">Darslar avval asosiy tushunchani, keyin prinsip va ishlash tartibini, oxirida xavfsizlik hamda amaliy mashqni beradi.</p></div><div className="rounded-xl border border-[#cfe3dc] bg-[#f1f8f6] px-4 py-3 text-xs font-semibold text-[#28635f]">{lessonIndex + 1}-modul / {lessons.length}</div></div>
          <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
            <nav className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" aria-label="O‘quv modullari">
              {lessons.map((lesson, index) => { const Icon = lesson.icon; return <button key={lesson.id} onClick={() => setLessonIndex(index)} className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition ${lessonIndex === index ? "border-[#0d7774] bg-[#0d7774] text-white shadow-[0_10px_22px_rgba(13,119,116,0.18)]" : "border-[#dce9e5] bg-[#fbfefd] text-[#35625f] hover:border-[#9ac9bd] hover:bg-[#f1faf7]"}`}><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${lessonIndex === index ? "bg-white/15 text-[#bbf2e1]" : "bg-[#e7f4ef] text-[#087a73]"}`}><Icon size={18} /></span><span><span className="block text-sm font-bold">{lesson.title}</span><span className={`mt-0.5 block text-xs ${lessonIndex === index ? "text-[#c5ede0]" : "text-[#7a9892]"}`}>{lesson.subtitle}</span></span></button>; })}
            </nav>
            {activeLesson && <article className="rounded-2xl border border-[#dce9e5] bg-[#fbfefd] p-5 sm:p-7"><div className="mb-5 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#dff3eb] text-[#087a73]"><activeLesson.icon size={20} /></span><div><div className="eyebrow mb-1">O‘quv moduli</div><h3 className="display text-2xl font-bold text-[#173d42]">{activeLesson.title}</h3></div></div><SourceText value={activeLesson.content} /><div className="mt-7 flex justify-end gap-2 border-t border-[#deebe7] pt-4"><Button variant="outline" className="border-[#b7d6ca] text-[#126a6a]" disabled={lessonIndex === 0} onClick={() => setLessonIndex((index) => index - 1)}>Ortga</Button><Button className="bg-[#0d7774] text-white hover:bg-[#075e5c]" disabled={lessonIndex === lessons.length - 1} onClick={() => setLessonIndex((index) => index + 1)}>Keyingi modul</Button></div></article>}
          </div>
        </section>}

        {purchase && <section className="mt-8 rounded-[28px] border border-[#c8dfd8] bg-[#eff8f5] p-5 sm:p-7">
          <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end"><div><div className="eyebrow mb-2">Xarid bo‘limi</div><h2 className="display text-3xl font-bold text-[#173d42]">Narx, import va tanlash mezonlari</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#587873]">Bu bo‘lim o‘quv jarayonidan keyin qurilmani tanlash, RFQ va umumiy egalik xarajatlarini baholash uchun berilgan.</p></div><div className="rounded-2xl border border-[#bcdcd1] bg-white px-5 py-4 text-right shadow-sm"><div className="tech-label text-[#6f8e87]">Narx benchmarki</div><div className="mt-1 text-lg font-bold text-[#0b706b]">{purchase.price || "RFQ bilan aniqlanadi"}</div></div></div>
          <Accordion type="single" collapsible className="rounded-2xl border border-[#cbded7] bg-white px-5 sm:px-6">
            {purchaseSections.map((section) => { const Icon = section.icon; return <AccordionItem key={section.value} value={section.value} className="border-[#dceae5]"><AccordionTrigger className="py-5 text-left text-[#214d50] no-underline hover:no-underline"><span className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#e8f5f0] text-[#087a73]"><Icon size={18} /></span><span className="font-bold">{section.title}</span></span></AccordionTrigger><AccordionContent className="pb-6"><SourceText value={section.content} /></AccordionContent></AccordionItem>; })}
          </Accordion>
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#edd8a5] bg-[#fff9e9] p-4 text-sm leading-6 text-[#75612e]"><AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#b17813]" /><span>Ko‘rsatilgan narx va yetkazib berish ma’lumotlari yakuniy tijorat taklifi emas. Konfiguratsiya, servis, sertifikat va O‘zbekistondagi yetkazib berish shartlari bo‘yicha yozma RFQ olinadi.</span></div>
        </section>}
      </main>
    </div>
  );
}
