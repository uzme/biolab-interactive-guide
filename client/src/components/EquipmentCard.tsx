/* BioLab style: Swiss-scientific catalogue card, focused on a 16-section Uzbek learning curriculum. */
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

export default function EquipmentCard({ device, index, onOpen }: { device: Equipment; index: number; onOpen: (device: Equipment) => void }) {
  const Icon = cardIcons[device.category] || FlaskConical;
  const price = purchaseByNumber[device.number]?.price || device.newPrice;
  const learning = learningByNumber[device.number];

  return <article className="equipment-card group relative overflow-hidden rounded-[22px] border border-[#d8e7e3] bg-[#ffffff] p-5" style={{ animationDelay: `${Math.min(index, 7) * 35}ms` }}>
    <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full border border-[#d7efe7] bg-[#f2faf7]" />
    <div className="relative mb-5 flex items-start justify-between gap-3">
      <div className="relative grid h-14 w-20 place-items-center overflow-hidden rounded-xl border border-[#cce2dc] bg-[#eef8f5] soft-grid"><Icon size={22} className="text-[#087a73]" /><span className="absolute bottom-1.5 left-1.5 h-1 w-6 rounded-full bg-[#10a391]/50" /></div>
      <div className="space-y-1 text-right"><span className="block rounded-full border border-[#d6e9e2] bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#638881]">BIO-{String(device.number).padStart(3, "0")}</span><span className="tech-label block text-[#86a49d]">O‘QUV-16</span></div>
    </div>
    <div className="relative eyebrow mb-2">{device.category}</div>
    <h3 className="relative display min-h-[58px] text-xl font-bold leading-tight text-[#173d42]">{device.name}</h3>
    <div className="relative mt-3 overflow-hidden rounded-xl border border-[#dbeae5] bg-[#f7fbfa] text-[10px] font-bold uppercase tracking-[0.09em]">
      <div className="grid grid-cols-[1fr_auto] gap-2 border-b border-[#dbeae5] px-3 py-2.5"><span className="truncate text-[#4e7771]">{device.model}</span><span className="text-[#0d8a80]">16 bo‘lim</span></div>
      <div className="flex items-center justify-between gap-2 px-3 py-2"><span className="flex min-w-0 items-center gap-1.5 truncate text-[#78928e]"><BookOpenCheck size={12} className="shrink-0 text-[#0d9488]" />{learning?.manufacturer || "Manual"}</span><span className="shrink-0 rounded bg-[#dff3eb] px-1.5 py-0.5 text-[#087a73]">SOP</span></div>
    </div>
    <p className="relative mt-3 min-h-[54px] text-sm leading-6 text-[#6f8984]">{device.description}</p>
    <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-[#e5eee8] pt-4"><span className="min-w-0 truncate text-xs font-semibold text-[#466c67]"><CircleDollarSign size={13} className="mr-1 inline text-[#0d9488]" />{price}</span><Button size="sm" variant="outline" className="shrink-0 border-[#b9d8cd] bg-transparent text-[#0d7774] hover:bg-[#e3f2e9]" onClick={() => onOpen(device)}>O‘rganish <ArrowUpRight size={15} /></Button></div>
  </article>;
}
