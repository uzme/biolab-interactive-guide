/*
  BioLab design reminder: Modern Precision Biotech — cold laboratory canvas, deep teal authority,
  asymmetric left navigation, and a 16-section Uzbek learning curriculum for every instrument.
*/
import { lazy, Suspense, useMemo, useState, useTransition } from "react";
import { ArrowUpRight, Beaker, BookOpen, ChevronRight, CircleHelp, FlaskConical, Grid2X2, Heart, LibraryBig, Menu, Microscope, Search, Settings2, Sparkles, X } from "lucide-react";
import Pure3DCarousel from "@/components/Pure3DCarousel";
import BookmarksSidebar from "@/components/BookmarksSidebar";
import OfflineManager from "@/components/OfflineManager";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { equipment, categories, type Equipment } from "@/lib/equipmentData";
import EquipmentCard from "@/components/EquipmentCard";
import { toast } from "sonner";
import { useBookmarks } from "@/hooks/useBookmarks";

const DeviceViewer = lazy(() => import("@/components/DeviceViewer"));

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
    <div className="mb-10 flex items-center gap-3 px-2">
      <div className="brand-mark relative grid h-12 w-12 place-items-center overflow-hidden rounded-[15px] border border-[#87d9cd]/55 bg-[#0a5358] shadow-[0_10px_24px_rgba(10,83,88,0.18)]"><img src="/manus-storage/biolab-logo_c6e5d846.png" alt="BioLab laboratoriya belgisi" className="h-8 w-8 object-contain" /><span className="absolute inset-x-2 bottom-1.5 h-px bg-[#86ead1]/70" /><span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#14b8a6]" /></div>
      <div className="sidebar-copy"><div className="display flex items-baseline gap-1 text-[22px] font-bold tracking-[-0.055em] text-[#173d42]">Bio<span className="text-[#0d9488]">Lab</span><span className="ml-1 text-[9px] tracking-normal text-[#86a39c]">/ LAB-01</span></div><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5b7c77]">SOP o‘quv tizimi</div></div>
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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  const [bookmarksOnly, setBookmarksOnly] = useState(false);
  const [isFilterPending, startFilterTransition] = useTransition();
  const validDeviceIds = useMemo(() => new Set(equipment.map((device) => device.id)), []);
  const { bookmarkedIds, bookmarkedCount, isBookmarked, toggleBookmark, clearBookmarks, exportBookmarks, importBookmarks } = useBookmarks(validDeviceIds);
  const handleImportBookmarks = async (file: File) => {
    const result = await importBookmarks(file);
    toast.success(`${result.addedCount} ta qurilma import qilindi${result.ignoredCount ? `, ${result.ignoredCount} ta noma’lum ID e’tiborsiz qoldirildi` : ""}.`);
    return result;
  };
  const bookmarkedDevices = useMemo(() => bookmarkedIds.map((id) => equipment.find((device) => device.id === id)).filter((device): device is Equipment => Boolean(device)), [bookmarkedIds]);

  const categoryCounts = useMemo(() => categories.slice(1).map((category) => ({ name: category, count: equipment.filter((item) => item.category === category).length })), []);
  const filtered = useMemo(() => equipment.filter((item) => {
    const matchesCategory = activeCategory === "Barcha uskunalar" || item.category === activeCategory;
    const matchesBookmark = !bookmarksOnly || bookmarkedIds.includes(item.id);
    const searchText = `${item.name} ${item.model} ${item.models} ${item.brands} ${item.category} ${item.description} ${item.purpose}`.toLowerCase();
    const modelText = `${item.model} ${item.models} ${item.brands}`.toLowerCase();
    return matchesCategory && matchesBookmark && searchText.includes(query.trim().toLowerCase()) && modelText.includes(modelQuery.trim().toLowerCase());
  }), [activeCategory, bookmarkedIds, bookmarksOnly, modelQuery, query]);
  const hasActiveFilters = activeCategory !== "Barcha uskunalar" || Boolean(query.trim()) || Boolean(modelQuery.trim()) || bookmarksOnly;
  const orderedFiltered = useMemo(() => [...filtered].sort((first, second) => Number(first.id.replace("BIO-", "")) - Number(second.id.replace("BIO-", ""))), [filtered]);
  const visibleCategoryGroups = useMemo(() => {
    if (!hasActiveFilters) return [{ category: "Barcha uskunalar", devices: orderedFiltered }];
    return categories.slice(1).map((category) => ({
      category,
      devices: orderedFiltered.filter((device) => device.category === category),
    })).filter((group) => group.devices.length > 0);
  }, [hasActiveFilters, orderedFiltered]);
  const handleCategoryChange = (category: string) => startFilterTransition(() => setActiveCategory(category));
  const handleQueryChange = (value: string) => startFilterTransition(() => setQuery(value));
  const handleModelQueryChange = (value: string) => startFilterTransition(() => setModelQuery(value));
  const handleBookmarksOnlyChange = (value: boolean) => startFilterTransition(() => setBookmarksOnly(value));
  const clearFilters = () => startFilterTransition(() => {
    setActiveCategory("Barcha uskunalar");
    setQuery("");
    setModelQuery("");
    setBookmarksOnly(false);
  });



  return <div className="shell">
    {mobileNav && <div className="fixed inset-0 z-40 bg-[#173d42]/25 backdrop-blur-sm sm:hidden" onClick={() => setMobileNav(false)} />}
    {mobileNav && <div className={`${mobileNav ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 z-50 h-full transition-transform duration-300 sm:hidden`}><Sidebar activeCategory={activeCategory} onCategory={handleCategoryChange} onMobileClose={() => setMobileNav(false)} /><button className="absolute right-[-42px] top-5 grid h-9 w-9 place-items-center rounded-full bg-[#ffffff] text-[#0c7773] shadow" onClick={() => setMobileNav(false)} aria-label="Menyuni yopish"><X size={17} /></button></div>}
    <div className="hidden sm:block"><Sidebar activeCategory={activeCategory} onCategory={handleCategoryChange} /></div>
    <main className="min-w-0 flex-1">
      <header className="border-b border-[#d6e3dc] bg-[#f7fbfa]/85 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4"><div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="text-[#0d7774] sm:hidden" onClick={() => setMobileNav(true)} aria-label="Menyuni ochish"><Menu size={20} /></Button><div className="text-xs font-bold uppercase tracking-[0.16em] text-[#6d8b87]">BioLab / <span className="text-[#0d7774]">Katalog</span></div></div>          <div className="flex items-center gap-2"><OfflineManager /><Button variant="ghost" size="icon" className="relative text-[#0d7774]" aria-label="Saralanganlarni ochish" onClick={() => setBookmarksOpen(true)}><Heart size={18} fill={bookmarkedCount > 0 ? "currentColor" : "none"} />{bookmarkedCount > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#0d7774] px-1 text-[9px] font-bold text-white">{bookmarkedCount}</span>}</Button><Button variant="ghost" size="icon" className="text-[#52716d]" aria-label="Sozlamalar va Mualliflik Huquqi" onClick={() => setSettingsOpen(true)}><Settings2 size={18} /></Button></div></div>
      </header>

      <div className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 sm:py-10 lg:px-12">
        <section className="soft-grid relative overflow-hidden rounded-[30px] border border-[#245b60] bg-[#0b3941] shadow-[0_25px_60px_rgba(26,76,72,0.18)]">
          <img src="/manus-storage/biolab-hero_a08d430e.jpg" alt="Zamonaviy biotexnologiya laboratoriyasi" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3941] via-[#0b3941]/90 to-[#0b3941]/20" />
          <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(125,224,194,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,224,194,.18) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "linear-gradient(90deg, black 0%, black 54%, transparent 87%)" }} />
          <div className="relative min-h-[425px] max-w-3xl px-6 py-10 sm:px-10 sm:py-14">
            <div className="mb-6 max-w-[790px] rounded-2xl border border-[#88d7c4]/35 bg-[#082f35]/75 p-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.15)] backdrop-blur-sm sm:grid sm:grid-cols-[auto_1fr] sm:gap-4"><div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 sm:mb-0 sm:block sm:border-b-0 sm:border-r sm:pr-4 sm:pb-0"><div className="tech-label text-[#a8ead9]">LAB-01 / SOP RELSI</div><div className="metric-number mt-1 text-3xl font-bold tracking-[-0.06em] text-white">16 <span className="text-sm font-semibold tracking-normal text-[#9fe8d5]">QADAM</span></div><div className="mt-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#8edcca]">Asosiy o‘quv yo‘li</div></div><div><div className="mb-2 flex items-center justify-between gap-3"><span className="tech-label text-[#d7f7ed]">MANUAL-GA ASOSLANGAN O‘QUV OQIMI</span><span className="rounded-full border border-[#93dfcd]/20 bg-[#0b5358] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d7f7ed]">Faol protokol</span></div><div className="grid grid-cols-8 gap-1.5 sm:grid-cols-[repeat(16,minmax(0,1fr))]">{curriculumSteps.map((step, index) => <div key={step} className={`rounded-md border px-1 py-1.5 text-center ${index === 0 || index === 4 || index === 8 || index === 15 ? "border-[#81e0c8] bg-[#1b746f] text-white" : "border-white/10 bg-white/[0.045] text-[#bae6d9]"}`}><span className="block text-[9px] font-bold tracking-tight">{step}</span><span className="mx-auto mt-1 block h-0.5 w-3 rounded-full bg-current opacity-70" /></div>)}</div><div className="mt-2 grid grid-cols-4 gap-2 text-[8px] font-bold uppercase tracking-[0.11em] text-[#bfeadd]"><span>01 Tushuncha</span><span>05 Prinsip</span><span>09 Workflow</span><span>16 Manual</span></div></div></div>
            <div className="eyebrow mb-4 text-[#9fe8d5]">BIO.LAB / QURILMA → SOP → TALQIN</div>
            <h1 className="display max-w-[820px] text-5xl font-bold leading-[0.92] tracking-[-0.055em] text-[#f7f8ed] sm:text-7xl">Qurilmani <span className="text-[#7de0c2]">faqat ko‘rmang</span> — uni tartib bilan o‘rganing.</h1>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-[#c6e1d7] sm:text-base">100 ta biotexnologiya qurilmasi uchun ishlab chiqaruvchi/model ma’lumoti, real workflow, natijani talqin qilish va laboratoriya xavfsizligini bir joyga jamlaydigan tartibli o‘quv protokoli.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Button className="bg-[#d9f0e5] text-[#075b5d] hover:bg-white" onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}>Katalog protokolini ochish <ArrowUpRight size={16} /></Button><Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" onClick={() => setSelectedDevice(equipment[0])}>O‘quv namunasini ochish <ChevronRight size={16} /></Button></div>
          </div>
          <div className="absolute right-7 top-7 hidden w-[250px] overflow-hidden rounded-2xl border border-[#9ce5d3]/25 bg-[#082f35]/80 text-[#d1f1e6] shadow-2xl backdrop-blur-md lg:block"><div className="border-b border-white/10 px-4 py-3"><div className="tech-label text-[#9fe8d5]">BIO.LAB // LAB-01</div><div className="mt-2 text-lg font-bold tracking-[-0.03em] text-white">Ilmiy rekord → amaliyot</div></div><div className="grid grid-cols-2 gap-px bg-white/10"><div className="bg-[#0b454d] px-4 py-4"><div className="metric-number text-3xl font-bold text-[#d9f0e5]">100</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#9fe8d5]">Qurilma</div></div><div className="bg-[#0b454d] px-4 py-4"><div className="metric-number text-3xl font-bold text-[#d9f0e5]">16</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#9fe8d5]">SOP qadam</div></div></div><div className="space-y-2 px-4 py-4 text-[11px] leading-5 text-[#c6e5dc]"><div className="flex justify-between border-b border-white/10 pb-2"><span>MODEL</span><span className="text-[#93e0cf]">aniqlanadi</span></div><div className="flex justify-between border-b border-white/10 pb-2"><span>WORKFLOW</span><span className="text-[#93e0cf]">bosqichma-bosqich</span></div><div className="flex justify-between"><span>NATIJA</span><span className="text-[#93e0cf]">talqin qilinadi</span></div></div></div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">Katalog hajmi</span><LibraryBig size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">100 <span className="text-base font-medium text-[#76938d]">qurilma</span></div><div className="mt-2 text-xs text-[#74918b]">10 ta asosiy kategoriya bo‘yicha</div></div><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">O‘quv formati</span><Sparkles size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">16 <span className="text-base font-medium text-[#76938d]">bo‘lim</span></div><div className="mt-2 text-xs text-[#74918b]">Chuqur va ketma-ket o‘quv dasturi</div></div><div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">Til</span><BookOpen size={18} className="text-[#0d8a80]" /></div><div className="metric-number text-3xl font-bold text-[#173d42]">UZ <span className="text-base font-medium text-[#76938d]">o‘zbekcha</span></div><div className="mt-2 text-xs text-[#74918b]">Kasbiy, sodda va tushunarli</div></div></section>

        <section className="mt-12">
          {isFilterPending && <div className="filter-transition" role="status" aria-label="Filtr natijalari yangilanmoqda"><span /></div>}
          <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <div className="eyebrow mb-1 text-[#0d9488]">TANLANGAN USKUNALAR CAROUSELI</div>
              <h2 className="display text-2xl font-bold text-[#173d42] sm:text-3xl">Asosiy qurilmalar va tezkor tanlov</h2>
              <p className="mt-1 text-sm text-[#587872]">Rasmdan tashqari nomi va modeli bilan tez tanishib o‘rganishni boshlang.</p>
            </div>
            <div className="tech-label rounded-full border border-[#b8d8ce] bg-white px-3 py-1.5 text-[#0b7772]">12 TA ASOSIY REKORD</div>
          </div>
          <div className="px-2 py-4 sm:px-6">
            <Pure3DCarousel onSelectDevice={(device) => setSelectedDevice(device)} isBookmarked={isBookmarked} onToggleBookmark={toggleBookmark} />
          </div>
        </section>

        <section className="mt-12" id="catalog"><div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="eyebrow mb-2">Navigatsiya</div><h2 className="display text-3xl font-bold text-[#173d42] sm:text-4xl">Kategoriyalar</h2></div><div className="tech-label rounded-full border border-[#cbded4] bg-[#ffffff] px-3 py-2 text-[#51736d]">100 TA ILMIY REKORD</div></div>
          <div className="rounded-2xl border border-[#c9ded7] bg-[#f7fbfa] p-3 shadow-[0_10px_24px_rgba(31,87,80,0.06)] sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div><div className="tech-label text-[#0b6663]">QIDIRUV VA FILTR</div><p className="mt-1 text-xs text-[#66847e]">Qurilma nomi, manufacturer yoki aniq model bo‘yicha izlang.</p></div>
              <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
                <button type="button" onClick={() => handleBookmarksOnlyChange(!bookmarksOnly)} aria-pressed={bookmarksOnly} className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition ${bookmarksOnly ? "border-[#0d7774] bg-[#0d7774] text-white" : "border-[#b7d9cd] bg-white text-[#0b7772] hover:border-[#0b7772]"}`}><Heart size={13} fill={bookmarksOnly ? "currentColor" : "none"} /> Saralanganlar <span className="rounded-full bg-black/10 px-1.5 py-0.5">{bookmarkedCount}</span></button>
                {hasActiveFilters && <button type="button" onClick={clearFilters} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#b7d9cd] bg-white px-2.5 py-1.5 text-[11px] font-bold text-[#0b7772] transition hover:border-[#0b7772]" aria-label="Barchasini tozalash"><X size={13} /> Barchasini tozalash</button>}
              </div>
            </div>
            <div className="grid gap-2 md:grid-cols-[1.25fr_1fr_0.9fr]">
              <label className="relative block"><span className="sr-only">Qurilma yoki manufacturer qidirish</span><Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#67908a]" /><Input value={query} onChange={(event) => handleQueryChange(event.target.value)} placeholder="Qurilma yoki manufacturer qidiring..." className="h-11 rounded-xl border-[#cbded8] bg-white pl-9 pr-9 text-sm text-[#173d42] placeholder:text-[#94aaa5]" />{query && <button type="button" onClick={() => handleQueryChange("")} className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-[#5d827c] transition hover:bg-[#e5f2ed] hover:text-[#0b7772]" aria-label="Qurilma qidiruvini bekor qilish"><X size={15} /></button>}</label>
              <label className="relative block"><span className="sr-only">Model bo‘yicha qidirish</span><Settings2 size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#67908a]" /><Input value={modelQuery} onChange={(event) => handleModelQueryChange(event.target.value)} placeholder="Model: masalan, CFX96 yoki TSX" className="h-11 rounded-xl border-[#cbded8] bg-white pl-9 pr-9 text-sm text-[#173d42] placeholder:text-[#94aaa5]" />{modelQuery && <button type="button" onClick={() => handleModelQueryChange("")} className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-[#5d827c] transition hover:bg-[#e5f2ed] hover:text-[#0b7772]" aria-label="Model qidiruvini bekor qilish"><X size={15} /></button>}</label>
              <label className="relative block"><span className="sr-only">Kategoriya bo‘yicha filtr</span><select value={activeCategory} onChange={(event) => handleCategoryChange(event.target.value)} className="h-11 w-full appearance-none rounded-xl border border-[#cbded8] bg-white px-3 pr-16 text-sm font-semibold text-[#315b56] outline-none transition focus:border-[#0d7774] focus:ring-2 focus:ring-[#0d7774]/15" aria-label="Kategoriya bo‘yicha filtr">{categories.map((category) => <option key={category} value={category}>{category === "Barcha uskunalar" ? "Barcha kategoriyalar" : category}</option>)}</select>{activeCategory !== "Barcha uskunalar" && <button type="button" onClick={() => handleCategoryChange("Barcha uskunalar")} className="absolute right-8 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-[#5d827c] transition hover:bg-[#e5f2ed] hover:text-[#0b7772]" aria-label="Kategoriya filtrini bekor qilish"><X size={15} /></button>}<ChevronRight size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#67908a]" /></label>
            </div>
          </div>
          <div className="mt-4 scrollbar-thin flex gap-2 overflow-x-auto pb-2">{categoryCounts.map((category) => <button key={category.name} onClick={() => handleCategoryChange(category.name)} className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-bold transition ${activeCategory === category.name ? "border-[#0d7774] bg-[#0d7774] text-white" : "border-[#d8e7e3] bg-[#ffffff] text-[#5b7773] hover:border-[#84b6a8]"}`}>{category.name} <span className="ml-1 opacity-65">{category.count}</span></button>)}</div>
          <div className="mt-5 grid overflow-hidden rounded-2xl border border-[#1c5960] bg-[#123f46] text-[#d8f3e9] shadow-[0_14px_30px_rgba(18,63,70,0.12)] sm:grid-cols-[1.35fr_repeat(3,1fr)]"><div className="border-b border-white/10 px-4 py-3.5 sm:border-b-0 sm:border-r"><div className="tech-label text-[#9ce9d6]">KATALOG PROTOKOLI</div><p className="mt-1 text-xs leading-5 text-[#c8e4da]">Model, ishlab chiqaruvchi, 16 bo‘limli SOP va o‘quv manbasi har bir kartada tizimlashtiriladi.</p></div><div className="border-b border-white/10 px-4 py-3.5 sm:border-b-0 sm:border-r"><div className="metric-number text-2xl font-bold text-white">01–100</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#9ce9d6]">Qurilma kodi</div></div><div className="border-b border-white/10 px-4 py-3.5 sm:border-b-0 sm:border-r"><div className="metric-number text-2xl font-bold text-white">10</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#9ce9d6]">Fan moduli</div></div><div className="px-4 py-3.5"><div className="metric-number text-2xl font-bold text-white">16</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#9ce9d6]">O‘quv qadami</div></div></div>
        </section>

        <section className="mt-8" aria-live="polite"><div className="mb-4 flex items-center justify-between gap-3"><div><div className="eyebrow mb-1">LAB-01 / REKORD OQIMI</div><h2 className="display text-2xl font-bold text-[#173d42]">{activeCategory}</h2><p className="mt-1 text-sm text-[#78908c]">{filtered.length} ta qurilma topildi{hasActiveFilters ? " — faol filtrlar qo‘llanilgan" : ""}</p></div>{hasActiveFilters && <button onClick={clearFilters} className="text-xs font-bold text-[#0d7774] hover:underline">Barcha filtrlarni tozalash</button>}</div>
          {filtered.length > 0 ? <div className="space-y-9">{visibleCategoryGroups.map((group, groupIndex) => { const Icon = categoryIcons[group.category] || Beaker; return <section key={group.category} className="relative"><div className="mb-4 flex items-end justify-between gap-4 border-y border-[#c9ddd6] bg-[#f1f8f5] px-4 py-3"><div className="flex min-w-0 items-center gap-3"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#b8d8ce] bg-white text-[#0b7772]"><Icon size={18} /></div><div><div className="tech-label text-[#0b7772]">MODUL {String(groupIndex + 1).padStart(2, "0")} / SOP KATALOGI</div><h3 className="display truncate text-xl font-bold tracking-[-0.035em] text-[#173d42]">{group.category}</h3></div></div><div className="hidden rounded-full border border-[#b8d8ce] bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#537972] sm:block">{group.devices.length} rekord</div></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{group.devices.map((device) => <EquipmentCard key={device.id} device={device} index={filtered.indexOf(device)} onOpen={setSelectedDevice} isBookmarked={isBookmarked(device.id)} onToggleBookmark={toggleBookmark} />)}</div></section>; })}</div> : <div className="rounded-[22px] border border-dashed border-[#b9d8cd] bg-[#ffffff] px-6 py-16 text-center"><Search size={28} className="mx-auto mb-4 text-[#70a298]" /><h3 className="display text-2xl font-bold">Qurilma topilmadi</h3><p className="mt-2 text-sm text-[#78908c]">Qidiruv so‘zini yoki kategoriyani o‘zgartirib ko‘ring.</p></div>}
        </section>
      </div>
    </main>
    <BookmarksSidebar open={bookmarksOpen} onOpenChange={setBookmarksOpen} devices={bookmarkedDevices} onSelectDevice={setSelectedDevice} onToggleBookmark={toggleBookmark} onClearBookmarks={clearBookmarks} onExportBookmarks={exportBookmarks} onImportBookmarks={handleImportBookmarks} />
    {selectedDevice && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#173d42]/60 p-2 backdrop-blur-md sm:p-6" onClick={() => setSelectedDevice(null)}><div className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[30px] border border-[#d8e7e3] bg-white shadow-[0_30px_90px_rgba(20,68,64,0.3)]" onClick={(e) => e.stopPropagation()}><Suspense fallback={<div className="grid min-h-96 place-items-center bg-[#f7fbfa] px-6 text-center text-[#173d42]"><div className="w-full max-w-md space-y-4"><div className="mx-auto h-3 w-28 animate-pulse rounded-full bg-[#cfe5dc]" /><div className="mx-auto h-8 w-3/4 animate-pulse rounded-xl bg-[#dcece6]" /><div className="mx-auto h-24 w-full animate-pulse rounded-2xl bg-[#e7f3ee]" /><div className="loading-dots mx-auto text-[#0d7774]" role="status" aria-label="Qurilmaning o‘quv dosyesi yuklanmoqda"><span /><span /><span /></div><p className="text-sm font-semibold text-[#587872]">Qurilmaning o‘quv dosyesi tayyorlanmoqda…</p></div></div>}><DeviceViewer device={selectedDevice} onBack={() => setSelectedDevice(null)} /></Suspense></div></div>}
    {settingsOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#173d42]/40 p-4 backdrop-blur-md" onClick={() => setSettingsOpen(false)}>
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-[#d8e7e3] bg-white p-6 shadow-[0_24px_60px_rgba(28,71,67,0.2)] sm:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-[#e2ede8] pb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0d7774] text-white"><Settings2 size={20} /></span>
            <div><div className="tech-label text-[#5b7c77]">BIO.LAB // TIZIM</div><h2 className="display text-xl font-bold text-[#173d42]">Sozlamalar va Mualliflik Huquqi</h2></div>
          </div>
          <button onClick={() => setSettingsOpen(false)} className="grid h-9 w-9 place-items-center rounded-full bg-[#f1f8f5] text-[#126a6a] hover:bg-[#e2ede8]" aria-label="Yopish"><X size={18} /></button>
        </div>
        <div className="mt-6 space-y-6 text-sm text-[#355853]">
          <section className="rounded-2xl border border-[#d8e7e3] bg-[#f7fbfa] p-5">
            <h3 className="font-bold text-[#173d42]">1. Platforma haqida va Maqsad</h3>
            <p className="mt-2 leading-6 text-[#5b7c77]">BioLab Interactive Guide — 100 ta biotexnologiya qurilmasi uchun 16 bo‘limli chuqur o‘quv platformasi. Tizim ilmiy ma’lumotlarni tizimlashtirish, ishonchli o‘quv protokollari va laboratoriya xavfsizligini ta’minlash uchun ishlab chiqilgan.</p>
          </section>
          <section className="rounded-2xl border border-[#d8e7e3] bg-[#f7fbfa] p-5">
            <h3 className="font-bold text-[#173d42]">2. Mualliflik huquqi va Kopirayt (Copyright Notice)</h3>
            <p className="mt-2 leading-6 text-[#5b7c77]">© 2026 BioLab Interactive Guide / Manus AI & Biotexnolog. Barcha huquqlar himoyalangan. Platformaning kod bazasi, interfeys dizayni, 16 bo‘limli o‘quv konspektlari va tuzilmasi mualliflik huquqi qonunchiligi bilan qat’iy muhofaza qilinadi. Uni ruxsatsiz ko‘chirish, tijoriy maqsadlarda tarqatish yoki o‘zgartirish taqiqlanadi.</p>
          </section>
          <section className="rounded-2xl border border-[#b6dcd1] bg-[#eef7f4] p-5">
            <h3 className="font-bold text-[#0e6f67]">3. Xavfsizlik standartlari (10/10 Himoya va SOP)</h3>
            <p className="mt-2 leading-6 text-[#245b53]">Laboratoriya amaliyotida 10/10 xavfsizlik qoidalariga rioya etiladi: har bir asbob uchun shaxsiy himoya vositalari (PPE), bioxavfsizlik talablari, favqulodda to‘xtatish tartibi va standart operatsion protseduralar (SOP) qat’iy ko‘rsatilgan. Hech qachon sinovdan o‘tmagan yoki tasdiqlanmagan reaktiv nisbatlari qo‘llanilmaydi.</p>
          </section>
          <section className="rounded-2xl border border-[#d8e7e3] bg-[#f7fbfa] p-5">
            <h3 className="font-bold text-[#173d42]">3. Foydalanish shartlari va Ta’limiy cheklovlar</h3>
            <p className="mt-2 leading-6 text-[#5b7c77]">Platformadan faqat ta’lim, tadqiqot va laboratoriya amaliyotini o‘rganish maqsadida foydalanish mumkin. Ma’lumotlarni o‘quv jarayonida qo‘llash mutlaqo erkin, biroq ularni ommaviy nashrlarda o‘zgarishsiz yoki mualliflik manbasini ko‘rsatmasdan tarqatish taqiqlanadi.</p>
          </section>
          <section className="rounded-2xl border border-[#d8e7e3] bg-[#f7fbfa] p-5">
            <h3 className="font-bold text-[#173d42]">4. Rasm litsenziyasi va Shaffoflik siyosati</h3>
            <p className="mt-2 leading-6 text-[#5b7c77]">Platformadagi rasmlar ikki turga bo‘linadi: ishlab chiqaruvchilarning rasmiy/distributor mahsulot fotosuratlari (ularning asl mualliflik huquqi tegishli kompaniyalarda qoladi va faqat o‘quv/identifikatsiya maqsadida ko‘rsatiladi) hamda o‘quv ko‘rgazmasi uchun yaratilgan laboratoriya-realistik AI vizuallari. Har bir qurilma sahifasida rasm shaffofligi bloki va manba havolasi mavjud.</p>
          </section>
          <section className="rounded-2xl border border-[#d8e7e3] bg-[#f7fbfa] p-5">
            <h3 className="font-bold text-[#173d42]">6. Texnik Sinxronlash va Google Drive Qoidasi</h3>
            <p className="mt-2 leading-6 text-[#5b7c77]">Loyiha kodi faqat rasmiy <code className="rounded bg-[#e2ede8] px-1.5 py-0.5 text-xs text-[#0d7774]">uzme/biolab-interactive-guide</code> GitHub repozitoriyining <code className="rounded bg-[#e2ede8] px-1.5 py-0.5 text-xs text-[#0d7774]">main</code> branchida saqlanadi. Google Drive bo‘yicha barcha sanitizatsiyalangan fayllar, subpapkalar va snapshotlar faqat yagona "Biotexnologiya" root papkasi ichida yaratiladi va boshqariladi. Boshqa Drive papkalariga BioLab fayllari chiqarilmaydi. Maxfiy tokenlar va env fayllar sinxronizatsiyadan qat’iy chetlatiladi.</p>
          </section>
        </div>
        <div className="mt-8 flex justify-end border-t border-[#e2ede8] pt-4">
          <Button onClick={() => setSettingsOpen(false)} className="bg-[#0d7774] text-white hover:bg-[#075e5c]">Tushunarli, yopish</Button>
        </div>
      </div>
    </div>}
  </div>;
}
