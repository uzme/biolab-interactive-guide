/* BioLab style: Swiss-scientific catalogue card, focused on a 16-section Uzbek learning curriculum. */
/*
  BioLab design reminder: Modern Precision Biotech — compact laboratory data bands,
  category-specific scientific glyphs, deep teal structure, and mint only for active learning signals.
*/
import { ArrowUpRight, Beaker, BookOpenCheck, CircleDollarSign, Cpu, FlaskConical, Gauge, Grid2X2, Microscope, Settings2, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Equipment } from "@/lib/equipmentData";
import { equipmentImages } from "@/lib/equipmentImages";
import { getImagePresentation } from "@/lib/equipmentImagePresentation";

const cardIcons: Record<string, typeof FlaskConical> = {
  "Molekulyar biologiya": Cpu,
  "Mikroskopiya": Microscope,
  "Hujayra kulturalari": Beaker,
  "Mikrobiologiya": FlaskConical,
  "Analitika": Gauge,
  "Sentrifugatsiya": Settings2,
  "Bioreaktorlar": Beaker,
  "Sovutish va saqlash": Snowflake,
  "Namuna tayyorlash": Grid2X2,
  "Avtomatlashtirish": Cpu,
};

const categoryTone: Record<string, { icon: string; signal: string }> = {
  "Molekulyar biologiya": { icon: "border-[#bcdfe0] bg-[#e7f5f5] text-[#087a73]", signal: "bg-[#0c7773]" },
  "Mikroskopiya": { icon: "border-[#cbd8e9] bg-[#eef3f9] text-[#4b6893]", signal: "bg-[#4b6893]" },
  "Hujayra kulturalari": { icon: "border-[#c8dfc7] bg-[#edf7ed] text-[#3d7b52]", signal: "bg-[#3d7b52]" },
  "Mikrobiologiya": { icon: "border-[#d9d5bb] bg-[#f8f6e8] text-[#847b31]", signal: "bg-[#847b31]" },
  "Analitika": { icon: "border-[#d1cee8] bg-[#f1f0fa] text-[#665a9b]", signal: "bg-[#665a9b]" },
  "Sentrifugatsiya": { icon: "border-[#c7d7e3] bg-[#eef5f8] text-[#46758a]", signal: "bg-[#46758a]" },
  "Bioreaktorlar": { icon: "border-[#c7e2dc] bg-[#eaf7f3] text-[#347b69]", signal: "bg-[#347b69]" },
  "Sovutish va saqlash": { icon: "border-[#c9d9ec] bg-[#edf4fb] text-[#4d78a8]", signal: "bg-[#4d78a8]" },
  "Namuna tayyorlash": { icon: "border-[#e1d0b8] bg-[#fbf4e9] text-[#9b6834]", signal: "bg-[#9b6834]" },
  "Avtomatlashtirish": { icon: "border-[#cbd3da] bg-[#f0f3f5] text-[#536b78]", signal: "bg-[#536b78]" },
};

export default function EquipmentCard({ device, index, onOpen }: { device: Equipment; index: number; onOpen: (device: Equipment) => void }) {
  const Icon = cardIcons[device.category] || FlaskConical;
  const price = device.newPrice;
  const tone = categoryTone[device.category] || categoryTone["Molekulyar biologiya"];
  const imageKey = `BIO-${String(device.number).padStart(3, "0")}`;
  const image = equipmentImages[imageKey];
  const imagePresentation = getImagePresentation(imageKey);
  const imageLabel = image?.sourceType === "official" ? "Mahsulot rasmi" : "O‘quv vizuali";
  const recordCode = `SOP-${String(device.number).padStart(3, "0")}`;

  return <article className="equipment-card group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#ccdcd8] bg-[#ffffff] shadow-[0_7px_18px_rgba(23,61,66,0.025)]" style={{ animationDelay: `${Math.min(index, 7) * 35}ms` }}>
    <div className={`absolute inset-x-0 top-0 h-1 ${tone.signal}`} />
    <figure className="relative grid h-52 place-items-center overflow-hidden border-b border-[#d9e9e5] bg-[#d6e7e2] sm:h-48">
      {image ? <>
        {imagePresentation.fit === "contain" && <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,249,247,0.82),rgba(204,225,219,0.72)_65%,rgba(180,209,201,0.72))]" />}
        <img src={image.url} alt={image.alt} loading="lazy" decoding="async" className={`absolute inset-0 z-10 h-full w-full transition duration-300 group-hover:scale-[1.02] ${imagePresentation.fit === "contain" ? "object-contain p-4 contrast-110 mix-blend-multiply drop-shadow-[0_10px_15px_rgba(21,66,68,0.22)] [-webkit-mask-image:radial-gradient(ellipse_92%_105%_at_center,black_52%,transparent_100%)] [mask-image:radial-gradient(ellipse_92%_105%_at_center,black_52%,transparent_100%)] sm:p-3" : "object-cover"}`} style={{ objectPosition: imagePresentation.position }} />
      </> : <div className={`grid h-20 w-20 place-items-center rounded-2xl border soft-grid ${tone.icon}`}><Icon size={30} /></div>}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white/75 to-transparent" />
      <span className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/75 bg-white/90 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] shadow-sm backdrop-blur ${tone.icon.split(" ").filter((className) => className.startsWith("text-")).join(" ")}`}><Icon size={12} />{imageLabel}</span>
      <span className="absolute right-3 top-3 rounded-full border border-[#b7d4cc] bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#355b57] shadow-sm backdrop-blur">{imageKey}</span>
    </figure>
    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex items-center justify-between gap-2 rounded-lg border border-[#b9d5cd] bg-[#f0f8f5] px-2.5 py-2"><span className="tech-label text-[#0b6663]">PROTOKOL REKORDI</span><span className="rounded border border-[#b3d9cc] bg-white px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#0b6663]">{recordCode}</span></div>
      <div className="relative eyebrow mb-2">{device.category}</div>
      <h3 className="relative display min-h-[58px] text-[1.35rem] font-bold leading-[1.08] tracking-[-0.035em] text-[#173d42]">{device.name}</h3>
      <div className="relative mt-3 overflow-hidden rounded-xl border border-[#b9d5cd] bg-[#f5faf8] text-[10px] font-bold uppercase tracking-[0.09em]">
        <div className="grid grid-cols-[1fr_auto] gap-2 border-b border-[#d6e6e0] px-3 py-2.5"><span className="flex min-w-0 items-center gap-1.5 truncate text-[#355e58]"><span className="shrink-0 rounded bg-[#dcefe8] px-1 py-0.5 text-[8px] text-[#39746a]">MODEL</span><span className="truncate">{device.model}</span></span><span className="rounded-sm bg-[#0b5358] px-1.5 py-0.5 text-white">16 qadam</span></div>
        <div className="flex items-center justify-between gap-2 px-3 py-2"><span className="flex min-w-0 items-center gap-1.5 truncate text-[#5f817c]"><BookOpenCheck size={12} className="shrink-0 text-[#0d9488]" /><span className="truncate">{device.brands || "Manual"}</span></span><span className="shrink-0 rounded border border-[#bce4d8] bg-[#e7f5ef] px-1.5 py-0.5 text-[#087a73]">{recordCode}</span></div>
      </div>
      <p className="relative mt-3 min-h-[54px] text-sm leading-6 text-[#6f8984]">{device.description}</p>
      <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-[#d7e5df] pt-4"><span className="min-w-0 truncate text-xs font-semibold text-[#466c67]"><CircleDollarSign size={13} className="mr-1 inline text-[#0d9488]" />{price}</span><Button size="sm" variant="outline" className="shrink-0 border-[#94bcb1] bg-transparent text-[#0d7774] hover:bg-[#e3f2e9]" onClick={() => onOpen(device)}>O‘rganish <ArrowUpRight size={15} /></Button></div>
    </div>
  </article>;
}
