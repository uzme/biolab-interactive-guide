/*
  BioLab design reminder: Modern Precision Biotech — cold laboratory canvas, deep teal authority,
  asymmetric left navigation, technical sans typography, and structured equipment discovery.
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

function Sidebar({ activeCategory, onCategory, onMobileClose }: { activeCategory: string; onCategory: (category: string) => void; onMobileClose?: () => void }) {
  return <aside className="sidebar">
    <div className="mb-10 flex items-center gap-3 px-2">
      <div className="brand-mark relative"><img src="/manus-storage/biolab-logo_c6e5d846.png" alt="BioLab belgisi" className="h-7 w-7 object-contain" /><span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#14b8a6]" /></div>
      <div className="sidebar-copy"><div className="display flex items-baseline gap-1 text-xl font-bold text-[#173d42]">Bio<span className="text-[#0d9488]">Lab</span><span className="text-[9px] tracking-normal text-[#86a39c]">/ 01</span></div><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6d8b87]">Ilmiy o‘quv tizimi</div></div>
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
  const [selectedDevice, setSelectedDevice] = useState<Equipment | null>(null);
  const [mobileNav, setMobileNav] = useState(false);

  const categoryCounts = useMemo(() => categories.slice(1).map((category) => ({ name: category, count: equipment.filter((item) => item.category === category).length })), []);
  const filtered = useMemo(() => equipment.filter((item) => {
    const matchesCategory = activeCategory === "Barcha uskunalar" || item.category === activeCategory;
    const searchText = `${item.name} ${item.model} ${item.description} ${item.purpose}`.toLowerCase();
    return matchesCategory && searchText.includes(query.toLowerCase());
  }), [activeCategory, query]);

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
        <section className="soft-grid relative overflow-hidden rounded-[30px] bg-[#123f46] shadow-[0_25px_60px_rgba(26,76,72,0.14)]">
          <img src="/manus-storage/biolab-hero_a08d430e.jpg" alt="Zamonaviy biotexnologiya laboratoriyasi" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123f46] via-[#123f46]/85 to-transparent" />
          <div className="relative min-h-[330px] max-w-3xl px-6 py-10 sm:px-10 sm:py-14">
            <div className="eyebrow mb-4 text-[#9fe8d5]">Yordamchi • Bilim • Katalog</div>
            <h1 className="display max-w-2xl text-4xl font-bold leading-[0.98] text-[#f5f6e9] sm:text-6xl">Laboratoriya jihozlarini <span className="text-[#7de0c2]">ishonch bilan</span> o‘rganing.</h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#c6e1d7] sm:text-base">100 ta biotexnologiya qurilmasi bo‘yicha vazifa, ishlash prinsipi, xarid mezonlari va interaktiv o‘rganish yo‘riqnomalari bir joyda.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Button className="bg-[#d9f0e5] text-[#075b5d] hover:bg-white" onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}>Katalogni ko‘rish <ArrowUpRight size={16} /></Button><Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" onClick={() => setSelectedDevice(equipment[0])}>PCR namunasi <ChevronRight size={16} /></Button></div>
          </div>
          <div className="absolute right-7 top-7 hidden w-[245px] overflow-hidden rounded-2xl border border-white/15 bg-[#0a3d45]/72 text-[#d1f1e6] backdrop-blur-md lg:block"><div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><div className="tech-label text-[#9fe8d5]">TEXNIK O‘RGANISH</div><span className="rounded-full bg-[#14b8a6]/20 px-2 py-0.5 text-[9px] font-bold text-[#b8f5e7]">LIVE</span></div><div className="relative h-28"><div className="absolute left-9 top-8 h-14 w-28 rounded-xl border border-[#b5eee0]/50 bg-[#9cdbca]/25 shadow-inner" /><div className="absolute left-14 top-12 h-2 w-12 rounded-full bg-[#b8f5e7]/50" /><div className="absolute left-[116px] top-5 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#14b8a6] text-[9px] font-bold text-[#063f45]">1</div><div className="absolute left-[58px] top-[76px] grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#14b8a6] text-[9px] font-bold text-[#063f45]">2</div><div className="absolute left-[148px] top-[62px] grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#14b8a6] text-[9px] font-bold text-[#063f45]">3</div><div className="absolute bottom-3 right-4 text-[9px] font-bold uppercase tracking-[0.14em] text-[#9fe8d5]">2D / modul 01</div></div><div className="grid grid-cols-3 border-t border-white/10 px-4 py-3 text-[10px] text-[#b6dbd1]"><span>06 dars</span><span className="text-center">03 nuqta</span><span className="text-right">Xarid</span></div></div>
          <div className="absolute bottom-5 right-7 hidden text-right sm:block"><div className="metric-number text-5xl font-bold text-[#d9f0e5]">100</div><div className="text-xs font-bold uppercase tracking-[0.16em] text-[#9fe8d5]">qurilma</div></div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">Katalog hajmi</span><LibraryBig size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">100 <span className="text-base font-medium text-[#76938d]">qurilma</span></div><div className="mt-2 text-xs text-[#74918b]">10 ta asosiy kategoriya bo‘yicha</div></div><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">O‘quv formati</span><Sparkles size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">06 <span className="text-base font-medium text-[#76938d]">modul</span></div><div className="mt-2 text-xs text-[#74918b]">2D sxema, hotspotlar va bosqichli darslar</div></div><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">Til</span><BookOpen size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">UZ <span className="text-base font-medium text-[#76938d]">o‘zbekcha</span></div><div className="mt-2 text-xs text-[#74918b]">Kasbiy, sodda va tushunarli</div></div></section>

        <section className="mt-12" id="catalog"><div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="eyebrow mb-2">Navigatsiya</div><h2 className="display text-3xl font-bold text-[#173d42] sm:text-4xl">Kategoriyalar</h2></div><div className="relative w-full md:w-[320px]"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#83a09a]" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Qurilma yoki model qidiring..." className="h-11 rounded-xl border-[#d8e7e3] bg-[#ffffff] pl-10 text-sm text-[#173d42] placeholder:text-[#93aaa4]" /></div></div>
          <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-2">{categoryCounts.map((category) => <button key={category.name} onClick={() => setActiveCategory(category.name)} className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-bold transition ${activeCategory === category.name ? "border-[#0d7774] bg-[#0d7774] text-white" : "border-[#d8e7e3] bg-[#ffffff] text-[#5b7773] hover:border-[#84b6a8]"}`}>{category.name} <span className="ml-1 opacity-65">{category.count}</span></button>)}</div>
        </section>

        <section className="mt-8" aria-live="polite"><div className="mb-4 flex items-center justify-between"><div><h2 className="display text-2xl font-bold text-[#173d42]">{activeCategory}</h2><p className="mt-1 text-sm text-[#78908c]">{filtered.length} ta qurilma topildi</p></div>{activeCategory !== "Barcha uskunalar" && <button onClick={() => setActiveCategory("Barcha uskunalar")} className="text-xs font-bold text-[#0d7774] hover:underline">Barchasini ko‘rsatish</button>}</div>
          {filtered.length > 0 ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((device, index) => <EquipmentCard key={device.id} device={device} index={index} onOpen={setSelectedDevice} />)}</div> : <div className="rounded-[22px] border border-dashed border-[#b9d8cd] bg-[#ffffff] px-6 py-16 text-center"><Search size={28} className="mx-auto mb-4 text-[#70a298]" /><h3 className="display text-2xl font-bold">Qurilma topilmadi</h3><p className="mt-2 text-sm text-[#78908c]">Qidiruv so‘zini yoki kategoriyani o‘zgartirib ko‘ring.</p></div>}
          {filtered.length > 18 && <div className="mt-6 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#7d9992]">Yana {filtered.length - 18} ta qurilma mavjud — qidiruv orqali toping</div>}
        </section>
      </div>
    </main>
  </div>;
}
