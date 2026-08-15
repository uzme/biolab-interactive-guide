/* BioLab style: Swiss-scientific catalogue card, focused on a 16-section Uzbek learning curriculum. */
/*
  BioLab design reminder: Modern Precision Biotech — compact laboratory data bands,
  category-specific scientific glyphs, deep teal structure, and mint only for active learning signals.
*/
import { ArrowUpRight, Beaker, BookOpenCheck, CircleDollarSign, Cpu, FlaskConical, Gauge, Grid2X2, Microscope, Settings2, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Equipment } from "@/lib/equipmentData";
import { learningByNumber, purchaseByNumber } from "@/lib/learningData";

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
  const price = purchaseByNumber[device.number]?.price || device.newPrice;
  const learning = learningByNumber[device.number];
  const tone = categoryTone[device.category] || categoryTone["Molekulyar biologiya"];

  return <article className="equipment-card group relative overflow-hidden rounded-[22px] border border-[#ccdcd8] bg-[#ffffff] p-5 shadow-[0_7px_18px_rgba(23,61,66,0.025)]" style={{ animationDelay: `${Math.min(index, 7) * 35}ms` }}>
    <div className={`absolute inset-x-0 top-0 h-1 ${tone.signal}`} />
    <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full border border-[#d7efe7] bg-[#f2faf7]" />
    <div className="relative mb-5 flex items-start justify-between gap-3">
      <div className={`relative grid h-14 w-20 place-items-center overflow-hidden rounded-xl border soft-grid ${tone.icon}`}><Icon size={22} /><span className={`absolute bottom-1.5 left-1.5 h-1 w-8 rounded-full opacity-70 ${tone.signal}`} /></div>
      <div className="space-y-1 text-right"><span className="block rounded-full border border-[#bccfca] bg-[#f8fbfa] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#355b57]">BIO-{String(device.number).padStart(3, "0")}</span><span className="tech-label block text-[#5f8880]">O‘QUV-16</span></div>
    </div>
    <div className="relative eyebrow mb-2">{device.category}</div>
    <h3 className="relative display min-h-[58px] text-[1.35rem] font-bold leading-[1.08] tracking-[-0.035em] text-[#173d42]">{device.name}</h3>
    <div className="relative mt-3 overflow-hidden rounded-xl border border-[#cadbd5] bg-[#f5faf8] text-[10px] font-bold uppercase tracking-[0.09em]">
      <div className="grid grid-cols-[1fr_auto] gap-2 border-b border-[#d6e6e0] px-3 py-2.5"><span className="truncate text-[#355e58]">{device.model}</span><span className="rounded-sm bg-[#0d7774] px-1.5 py-0.5 text-white">16 bo‘lim</span></div>
      <div className="flex items-center justify-between gap-2 px-3 py-2"><span className="flex min-w-0 items-center gap-1.5 truncate text-[#5f817c]"><BookOpenCheck size={12} className="shrink-0 text-[#0d9488]" />{learning?.manufacturer || "Manual"}</span><span className="shrink-0 rounded bg-[#dff3eb] px-1.5 py-0.5 text-[#087a73]">SOP</span></div>
    </div>
    <p className="relative mt-3 min-h-[54px] text-sm leading-6 text-[#6f8984]">{device.description}</p>
    <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-[#d7e5df] pt-4"><span className="min-w-0 truncate text-xs font-semibold text-[#466c67]"><CircleDollarSign size={13} className="mr-1 inline text-[#0d9488]" />{price}</span><Button size="sm" variant="outline" className="shrink-0 border-[#94bcb1] bg-transparent text-[#0d7774] hover:bg-[#e3f2e9]" onClick={() => onOpen(device)}>O‘rganish <ArrowUpRight size={15} /></Button></div>
  </article>;
}
