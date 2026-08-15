/*
  BioLab design reminder: Modern Precision Biotech — cold laboratory canvas, deep teal authority,
  asymmetric left navigation, and a 16-section Uzbek learning curriculum for every instrument.
*/
import { useMemo, useState } from "react";
import { ArrowUpRight, Beaker, BookOpen, ChevronRight, CircleHelp, FlaskConical, Grid2X2, LibraryBig, Menu, Microscope, Search, Settings2, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { equipment, categories, type Equipment } from "@/lib/equipmentData";
import DeviceViewer from "@/components/DeviceViewer";
import EquipmentCard from "@/components/EquipmentCard";

const categoryIcons: Record<string, typeof FlaskConical> = {
  "Molekulyar biologiya": FlaskConical,
  "Mikroskopiya": Microscope,
  "Hujayra kulturalari": Beaker,
  "Mikrobiologiya": Sparkles,
  "Analitika": Grid2X2,
  "Sentrifugatsiya": Settings2,
  "Bioreaktorlar": FlaskConical,
  "Sovutish va saqlash": LibraryBig,
  "Namuna tayyorlash": BookOpen,
  "Avtomatlashtirish": Settings2,
};

const curriculumSteps = [
  "01", "02", "03", "04", "05", "06", "07", "08",
  "09", "10", "11", "12", "13", "14", "15", "16",
];

function Sidebar({ activeCategory, onCategory, onMobileClose }: { activeCategory: string; onCategory: (category: string) => void; onMobileClose?: () => void }) {
  return <aside className="sidebar">
    <div className="sidebar-copy mb-10 border-b border-[#cfe2db] px-2 pb-5">
      <div className="flex items-center gap-3"><div className="brand-mark relative grid h-12 w-12 place-items-center overflow-hidden rounded-[15px] border border-[#87d9cd]/55 bg-[#0a5358] shadow-[0_10px_24px_rgba(10,83,88,0.18)]"><img src="/manus-storage/biolab-logo_c6e5d846.png" alt="BioLab laboratoriya belgisi" className="h-8 w-8 object-contain" /><span className="absolute inset-x-2 bottom-1.5 h-px bg-[#86ead1]/70" /><span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#14b8a6]" /></div><div><div className="display flex items-baseline gap-1 text-[22px] font-bold tracking-[-0.055em] text-[#173d42]">Bio<span className="text-[#0d9488]">Lab</span><span className="ml-1 text-[9px] tracking-normal text-[#0a5358]">/ LAB-01</span></div><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5b7c77]">SOP o‘quv tizimi</div></div></div>
      <div className="mt-4 grid grid-cols-[auto_1fr] gap-3 border-l-2 border-[#0d9488] pl-3"><span className="tech-label text-[#0b6663]">01/16</span><p className="text-[10px] font-semibold leading-4 text-[#5c7f78]">Kalibrlangan operator o‘quvi. Har rekord — manualga tayangan SOP.</p></div>
    </div>
    <div className="sidebar-copy mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#86a39c]">Navigatsiya</div>
    <nav className="space-y-1 overflow-y-auto scrollbar-thin">
      {categories.map((category) => {
        const Icon = category === "Barcha uskunalar" ? Grid2X2 : categoryIcons[category] || Beaker;
        return <button key={category} onClick={() => { onCategory(category); onMobileClose?.(); }} className={`nav-link ${activeCategory === category ? "active" : ""}`} title={category}><Icon size={17} /><span className="nav-label text-left text-[13px]">{category}</span>{category !== "Barcha uskunalar" && <span className="nav-label ml-auto text-[11px] text-[#91a7a0]">{equipment.filter((item) => item.category === category).length}</span>}</button>;
      })}
    </nav>
    <div className="sidebar-footer mt-auto px-2 pt-6"><div className="sidebar-copy rounded-2xl bg-[#edf7f4] p-4"><div className="mb-2 flex items-center gap-2 text-[#0c7773]"><CircleHelp size={15} /><span className="text-xs font-bold">Yordam kerakmi?</span></div><p className="sidebar-footer-copy text-xs leading-5 text-[#537c76]">Qurilmani tanlang va o‘rganishni boshlang.</p></div></div>
  </aside>;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Barcha uskunalar");
  const [query, setQuery] = useState("");
  const [modelQuery, setModelQuery] = useState("");
  const [selectedDevice, setSelectedDevice] = useState<Equipment | null>(null);
  const [mobileNav, setMobileNav] = useState(false);

  const categoryCounts = useMemo(() => categories.slice(1).map((category) => ({ name: category, count: equipment.filter((item) => item.category === category).length })), []);
  const filtered = useMemo(() => equipment.filter((item) => {
    const matchesCategory = activeCategory === "Barcha uskunalar" || item.category === activeCategory;
    const searchText = `${item.name} ${item.model} ${item.models} ${item.brands} ${item.category} ${item.description} ${item.purpose}`.toLowerCase();
    const modelText = `${item.model} ${item.models} ${item.brands}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase()) && modelText.includes(modelQuery.trim().toLowerCase());
  }), [activeCategory, modelQuery, query]);
  const visibleCategoryGroups = useMemo(() => categories.slice(1).map((category) => ({
    category,
    devices: filtered.filter((device) => device.category === category),
  })).filter((group) => group.devices.length > 0), [filtered]);
  const hasActiveFilters = activeCategory !== "Barcha uskunalar" || Boolean(query.trim()) || Boolean(modelQuery.trim());
  const clearFilters = () => {
    setActiveCategory("Barcha uskunalar");
    setQuery("");
    setModelQuery("");
  };

  if (selectedDevice) return <DeviceViewer device={selectedDevice} onBack={() => setSelectedDevice(null)} />;

  return <div className="shell">
    {mobileNav && <div className="fixed inset-0 z-40 bg-[#173d42]/25 backdrop-blur-sm sm:hidden" onClick={() => setMobileNav(false)} />}
    {mobileNav && <div className={`${mobileNav ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 z-50 h-full transition-transform duration-300 sm:hidden`}><Sidebar activeCategory={activeCategory} onCategory={setActiveCategory} onMobileClose={() => setMobileNav(false)} /><button className="absolute right-[-42px] top-5 grid h-9 w-9 place-items-center rounded-full bg-[#ffffff] text-[#0c7773] shadow" onClick={() => setMobileNav(false)} aria-label="Menyuni yopish"><X size={17} /></button></div>}
    <div className="hidden sm:block"><Sidebar activeCategory={activeCategory} onCategory={setActiveCategory} /></div>
    <main className="min-w-0 flex-1">
      <header className="border-b border-[#d6e3dc] bg-[#f7fbfa]/85 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4"><div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="text-[#0d7774] sm:hidden" onClick={() => setMobileNav(true)} aria-label="Menyuni ochish"><Menu size={20} /></Button><div className="text-xs font-bold uppercase tracking-[0.16em] text-[#6d8b87]">BioLab / <span className="text-[#0d7774]">Katalog</span></div></div><div className="flex items-center gap-2"><span className="hidden rounded-full border border-[#cbded4] bg-[#ffffff] px-3 py-1.5 text-xs font-semibold text-[#597b75] sm:inline-flex"><span className="mr-2 h-2 w-2 rounded-full bg-[#16a085]" /> Onlayn ma’lumotlar bazasi</span><Button variant="ghost" size="icon" className="text-[#52716d]" aria-label="Sozlamalar"><Settings2 size={18} /></Button></div></div>
      </header>

      <div className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 sm:py-10 lg:px-12">
        <section className="soft-grid relative overflow-hidden rounded-[30px] border border-[#245b60] bg-[#0b3941] shadow-[0_25px_60px_rgba(26,76,72,0.18)]">
          <img src="/manus-storage/biolab-hero_a08d430e.jpg" alt="Zamonaviy biotexnologiya laboratoriyasi" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3941] via-[#0b3941]/90 to-[#0b3941]/20" />
          <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(125,224,194,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,224,194,.18) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "linear-gradient(90deg, black 0%, black 54%, transparent 87%)" }} />
          <div className="relative min-h-[505px] max-w-none px-6 py-8 sm:px-10 sm:py-10 lg:pr-[292px]">
            <div className="mb-8 border-y border-[#9fe8d5]/35 bg-[#062c32]/72 px-4 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.15)] backdrop-blur-sm"><div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div className="flex items-end gap-3"><div><div className="tech-label text-[#a8ead9]">LAB-01 / ASOSIY SOP RELSI</div><div className="metric-number mt-1 text-4xl font-bold tracking-[-0.06em] text-white">16 <span className="text-sm font-semibold tracking-normal text-[#9fe8d5]">QADAM</span></div></div><div className="mb-1 border-l border-[#8edcca]/40 pl-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b9ecdd]">Qurilma → metod → talqin</div></div><span className="border border-[#93dfcd]/35 bg-[#0b5358] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d7f7ed]">Faol protokol</span></div><div className="relative"><div className="absolute left-2 right-2 top-1/2 hidden h-px -translate-y-1/2 bg-[#7ddeca]/40 sm:block" /><div className="relative grid grid-cols-4 gap-2 sm:grid-cols-[repeat(16,minmax(0,1fr))]">{curriculumSteps.map((step, index) => <div key={step} className={`border px-1 py-2 text-center ${index === 0 || index === 4 || index === 8 || index === 15 ? "border-[#81e0c8] bg-[#1b746f] text-white shadow-[0_0_0_2px_rgba(129,224,200,.12)]" : "border-white/15 bg-[#0c464d]/90 text-[#bae6d9]"}`}><span className="block text-[10px] font-extrabold tracking-tight">{step}</span><span className="mx-auto mt-1 block h-1 w-1 rounded-full bg-current opacity-80" /></div>)}</div></div><div className="mt-3 grid grid-cols-4 gap-2 border-t border-white/10 pt-3 text-[8px] font-bold uppercase tracking-[0.11em] text-[#bfeadd]"><span>01 Tushuncha</span><span>05 Prinsip</span><span>09 Workflow</span><span className="text-right">16 Manual</span></div></div>
            <div className="eyebrow mb-3 text-[#9fe8d5]">OPERATOR O‘QUV REKORDLARI / 01–100</div>
            <h1 className="display max-w-[760px] text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-[#f7f8ed] sm:text-6xl">Har qurilma uchun <span className="text-[#7de0c2]">tartibli</span> ish yo‘li.</h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#c6e1d7] sm:text-base">Model konteksti, namuna tayyorlash, real workflow va natijani talqin qilish — hammasi bitta LAB-01 protokol rekordida.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Button className="bg-[#d9f0e5] text-[#075b5d] hover:bg-white" onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}>Katalog protokolini ochish <ArrowUpRight size={16} /></Button><Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" onClick={() => setSelectedDevice(equipment[0])}>O‘quv namunasini ochish <ChevronRight size={16} /></Button></div>
          </div>
          <div className="absolute right-7 top-7 hidden w-[250px] overflow-hidden border border-[#9ce5d3]/25 bg-[#082f35]/85 text-[#d1f1e6] shadow-2xl backdrop-blur-md lg:block"><div className="border-b border-white/10 px-4 py-3"><div className="tech-label text-[#9fe8d5]">BIO.LAB // LAB-01</div><div className="mt-2 text-lg font-bold tracking-[-0.03em] text-white">Kalibrlangan rekord</div></div><div className="grid grid-cols-2 gap-px bg-white/10"><div className="bg-[#0b454d] px-4 py-4"><div className="metric-number text-3xl font-bold text-[#d9f0e5]">100</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#9fe8d5]">SOP rekord</div></div><div className="bg-[#0b454d] px-4 py-4"><div className="metric-number text-3xl font-bold text-[#d9f0e5]">10</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#9fe8d5]">Fan moduli</div></div></div><div className="space-y-2 px-4 py-4 text-[11px] leading-5 text-[#c6e5dc]"><div className="flex justify-between border-b border-white/10 pb-2"><span>01–04</span><span className="text-[#93e0cf]">kontekst</span></div><div className="flex justify-between border-b border-white/10 pb-2"><span>05–11</span><span className="text-[#93e0cf]">workflow</span></div><div className="flex justify-between"><span>12–16</span><span className="text-[#93e0cf]">xavfsizlik / manual</span></div></div></div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">Katalog hajmi</span><LibraryBig size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">100 <span className="text-base font-medium text-[#76938d]">qurilma</span></div><div className="mt-2 text-xs text-[#74918b]">10 ta asosiy kategoriya bo‘yicha</div></div><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">O‘quv formati</span><Sparkles size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">16 <span className="text-base font-medium text-[#76938d]">bo‘lim</span></div><div className="mt-2 text-xs text-[#74918b]">Chuqur va ketma-ket o‘quv dasturi</div></div><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">Til</span><BookOpen size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">UZ <span className="text-base font-medium text-[#76938d]">o‘zbekcha</span></div><div className="mt-2 text-xs text-[#74918b]">Kasbiy, sodda va tushunarli</div></div></section>

        <section className="mt-12" id="catalog"><div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="eyebrow mb-2">Navigatsiya</div><h2 className="display text-3xl font-bold text-[#173d42] sm:text-4xl">Kategoriyalar</h2></div><div className="tech-label rounded-full border border-[#cbded4] bg-[#ffffff] px-3 py-2 text-[#51736d]">100 TA ILMIY REKORD</div></div>
          <div className="rounded-2xl border border-[#c9ded7] bg-[#f7fbfa] p-3 shadow-[0_10px_24px_rgba(31,87,80,0.06)] sm:p-4"><div className="mb-3 flex items-center justify-between gap-3"><div><div className="tech-label text-[#0b6663]">QIDIRUV VA FILTR</div><p className="mt-1 text-xs text-[#66847e]">Qurilma nomi, manufacturer yoki aniq model bo‘yicha izlang.</p></div>{hasActiveFilters && <button onClick={clearFilters} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#b7d9cd] bg-white px-2.5 py-1.5 text-[11px] font-bold text-[#0b7772] transition hover:border-[#0b7772]" aria-label="Barcha filtrlarni tozalash"><X size={13} /> Tozalash</button>}</div><div className="grid gap-2 md:grid-cols-[1.25fr_1fr_0.9fr]"><label className="relative block"><span className="sr-only">Qurilma yoki manufacturer qidirish</span><Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#67908a]" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Qurilma yoki manufacturer qidiring..." className="h-11 rounded-xl border-[#cbded8] bg-white pl-9 text-sm text-[#173d42] placeholder:text-[#94aaa5]" /></label><label className="relative block"><span className="sr-only">Model bo‘yicha qidirish</span><Settings2 size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#67908a]" /><Input value={modelQuery} onChange={(event) => setModelQuery(event.target.value)} placeholder="Model: masalan, CFX96 yoki TSX" className="h-11 rounded-xl border-[#cbded8] bg-white pl-9 text-sm text-[#173d42] placeholder:text-[#94aaa5]" /></label><label className="relative block"><span className="sr-only">Kategoriya bo‘yicha filtr</span><select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)} className="h-11 w-full appearance-none rounded-xl border border-[#cbded8] bg-white px-3 pr-9 text-sm font-semibold text-[#315b56] outline-none transition focus:border-[#0d7774] focus:ring-2 focus:ring-[#0d7774]/15" aria-label="Kategoriya bo‘yicha filtr">{categories.map((category) => <option key={category} value={category}>{category === "Barcha uskunalar" ? "Barcha kategoriyalar" : category}</option>)}</select><ChevronRight size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#67908a]" /></label></div></div>
          <div className="mt-4 scrollbar-thin flex gap-2 overflow-x-auto pb-2">{categoryCounts.map((category) => <button key={category.name} onClick={() => setActiveCategory(category.name)} className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-bold transition ${activeCategory === category.name ? "border-[#0d7774] bg-[#0d7774] text-white" : "border-[#d8e7e3] bg-[#ffffff] text-[#5b7773] hover:border-[#84b6a8]"}`}>{category.name} <span className="ml-1 opacity-65">{category.count}</span></button>)}</div>
          <div className="mt-5 grid overflow-hidden rounded-2xl border border-[#1c5960] bg-[#123f46] text-[#d8f3e9] shadow-[0_14px_30px_rgba(18,63,70,0.12)] sm:grid-cols-[1.35fr_repeat(3,1fr)]"><div className="border-b border-white/10 px-4 py-3.5 sm:border-b-0 sm:border-r"><div className="tech-label text-[#9ce9d6]">KATALOG PROTOKOLI</div><p className="mt-1 text-xs leading-5 text-[#c8e4da]">Model, ishlab chiqaruvchi, 16 bo‘limli SOP va o‘quv manbasi har bir kartada tizimlashtiriladi.</p></div><div className="border-b border-white/10 px-4 py-3.5 sm:border-b-0 sm:border-r"><div className="metric-number text-2xl font-bold text-white">01–100</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#9ce9d6]">Qurilma kodi</div></div><div className="border-b border-white/10 px-4 py-3.5 sm:border-b-0 sm:border-r"><div className="metric-number text-2xl font-bold text-white">10</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#9ce9d6]">Fan moduli</div></div><div className="px-4 py-3.5"><div className="metric-number text-2xl font-bold text-white">16</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#9ce9d6]">O‘quv qadami</div></div></div>
        </section>

        <section className="mt-8" aria-live="polite"><div className="mb-4 flex items-center justify-between gap-3 border-b-2 border-[#0d7774] pb-4"><div><div className="eyebrow mb-1">LAB-01 / KALIBRLANGAN REKORD OQIMI</div><h2 className="display text-3xl font-bold tracking-[-0.045em] text-[#173d42]">{activeCategory}</h2><p className="mt-1 text-sm text-[#78908c]">{filtered.length} ta qurilma topildi{hasActiveFilters ? " — faol filtrlar qo‘llanilgan" : ""}</p></div>{hasActiveFilters && <button onClick={clearFilters} className="text-xs font-bold text-[#0d7774] hover:underline">Barcha filtrlarni tozalash</button>}</div>
          {filtered.length > 0 ? <div className="space-y-10">{visibleCategoryGroups.map((group, groupIndex) => { const Icon = categoryIcons[group.category] || Beaker; return <section key={group.category} className="relative"><div className="mb-4 flex items-stretch justify-between gap-4 border-y-2 border-[#c9ddd6] bg-[#eff7f4] px-4 py-3"><div className="flex min-w-0 items-center gap-3"><div className="metric-number grid h-10 w-10 shrink-0 place-items-center bg-[#0b5358] text-sm font-extrabold text-[#d9f5ec]">{String(groupIndex + 1).padStart(2, "0")}</div><div className="grid h-9 w-9 shrink-0 place-items-center border border-[#b8d8ce] bg-white text-[#0b7772]"><Icon size={18} /></div><div><div className="tech-label text-[#0b7772]">FAN MODULI / SOP KATALOGI</div><h3 className="display truncate text-2xl font-bold tracking-[-0.045em] text-[#173d42]">{group.category}</h3></div></div><div className="hidden self-center border-l border-[#b8d8ce] pl-4 text-right sm:block"><div className="metric-number text-xl font-bold text-[#0b5358]">{group.devices.length}</div><div className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#537972]">rekord</div></div></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{group.devices.map((device) => <EquipmentCard key={device.id} device={device} index={filtered.indexOf(device)} onOpen={setSelectedDevice} />)}</div></section>; })}</div> : <div className="rounded-[22px] border border-dashed border-[#b9d8cd] bg-[#ffffff] px-6 py-16 text-center"><Search size={28} className="mx-auto mb-4 text-[#70a298]" /><h3 className="display text-2xl font-bold">Qurilma topilmadi</h3><p className="mt-2 text-sm text-[#78908c]">Qidiruv so‘zini yoki kategoriyani o‘zgartirib ko‘ring.</p></div>}
          {filtered.length > 18 && <div className="mt-6 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#7d9992]">Yana {filtered.length - 18} ta qurilma mavjud — qidiruv orqali toping</div>}
        </section>
      </div>
    </main>
  </div>;
}
