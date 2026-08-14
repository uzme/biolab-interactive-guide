/* BioLab style: tactile 3D learning surface, deep teal stage, mint hotspot pulses, clear Uzbek labels. */
import React, { useMemo, useState } from "react";
import { ArrowLeft, Box, CircleHelp, Crosshair, Info, Rotate3D, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Equipment } from "@/lib/equipmentData";

type Hotspot = { id: string; label: string; position: string; normal: string; detail: string };

const hotspots: Hotspot[] = [
  { id: "control", label: "Boshqaruv paneli", position: "0.17m 0.24m 0.42m", normal: "0m 1m 0m", detail: "Dastur, sikl harorati va vaqt parametrlarini kiritish joyi." },
  { id: "sample", label: "Namuna bloki", position: "-0.03m 0.12m 0.38m", normal: "0m 1m 0m", detail: "PCR naychalari yoki plastinkasi shu blokka joylashtiriladi." },
  { id: "lid", label: "Qopqoq va optik yo‘l", position: "0.08m 0.42m 0.34m", normal: "0m 1m 0m", detail: "Namuna zonasini yopadi va optik signalni aniqlash tizimiga uzatadi." },
];

export default function DeviceViewer({ device, onBack }: { device: Equipment; onBack: () => void }) {
  const [activeHotspot, setActiveHotspot] = useState(hotspots[0]);
  const [tourStep, setTourStep] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const tour = useMemo(() => [
    { title: "Qurilmani ko‘zdan kechiring", text: "Modelni aylantiring va asosiy qismlarning joylashuvini kuzating." },
    { title: "Namuna zonasini aniqlang", text: "PCR plastinkasi yoki naychalari joylashadigan markaziy blokni toping." },
    { title: "Boshqaruvni o‘rganing", text: "Harorat sikli va optik o‘lchovni boshqaruvchi panelni tekshiring." },
  ], []);

  const viewer = React.createElement("model-viewer", {
    src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    alt: `${device.name} uchun namunaviy 3D model`,
    "camera-controls": true,
    "auto-rotate": true,
    "shadow-intensity": "1",
    "camera-orbit": "45deg 65deg 2.8m",
    onLoad: () => setModelLoaded(true),
    style: { width: "100%", height: "100%", background: "transparent", position: "relative", zIndex: 10 },
    children: hotspots.map((spot) => React.createElement("button", {
      key: spot.id,
      className: `hotspot absolute z-10 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-[#73e0c2] text-[#0f4548] shadow-lg transition hover:scale-110 ${activeHotspot.id === spot.id ? "ring-4 ring-[#73e0c2]/30" : ""}`,
      slot: `hotspot-${spot.id}`,
      "data-position": spot.position,
      "data-normal": spot.normal,
      "aria-label": spot.label,
      onClick: () => { setActiveHotspot(spot); setShowInfo(true); },
    }, React.createElement(Crosshair, { size: 14 })))
  });

  return (
    <div className="min-h-screen bg-[#f7fbfa] text-[#173d42]">
      <header className="sticky top-0 z-30 border-b border-[#d8e7e3] bg-[#f7fbfa]/95 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-[#126a6a] transition hover:gap-3"><ArrowLeft size={17} /> Barcha uskunalar</button>
          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6d8b87] sm:flex"><Box size={15} /> Interaktiv o‘rganish</div>
          <Button variant="outline" className="border-[#b7d6ca] bg-transparent text-[#126a6a] hover:bg-[#edf7f4]" onClick={() => setShowInfo((value) => !value)}><CircleHelp size={16} /> <span className="hidden sm:inline">Yo‘riqnoma</span></Button>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 sm:py-10">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_320px] lg:items-end">
          <div className="fade-in">
            <div className="eyebrow mb-3">{device.category} / BIO-{String(device.number).padStart(3, "0")}</div>
            <h1 className="display max-w-3xl text-4xl font-bold leading-[0.98] text-[#173d42] sm:text-6xl">{device.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b7773]">{device.description} {device.purpose}.</p>
          </div>
          <div className="rounded-2xl border border-[#d8e7e3] bg-[#ffffff] p-5 shadow-[0_14px_40px_rgba(28,71,67,0.06)]">
            <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-[#71918b]"><span>O‘rganish progressi</span><span>{Math.round(((tourStep + 1) / tour.length) * 100)}%</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-[#e8f1ef]"><div className="h-full rounded-full bg-[#0d7774] transition-all duration-300" style={{ width: `${((tourStep + 1) / tour.length) * 100}%` }} /></div>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#2e5e5b]"><Sparkles size={15} className="text-[#0d9d8d]" /> {tour[tourStep].title}</div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.3fr)_minmax(330px,0.7fr)]">
          <section className="model-stage relative min-h-[540px] overflow-hidden rounded-[28px] border border-[#215b5e] p-5 shadow-[0_24px_60px_rgba(18,76,76,0.18)] sm:p-8">
            <div className="absolute left-6 top-6 z-10 rounded-full border border-white/15 bg-[#0d464d]/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b7eee0] backdrop-blur-md">3D namuna ko‘rinishi</div>
            <div className="absolute right-6 top-6 z-10 flex items-center gap-2 text-xs text-[#b7eee0]"><Rotate3D size={16} /> Aylantiring va yaqinlashtiring</div>
            <div className="relative h-[430px] sm:h-[500px]">
              {!modelLoaded && <div className="absolute inset-0 z-0 flex items-center justify-center" aria-label="PCR qurilmasining sxematik ko‘rinishi">
                <div className="relative h-[265px] w-[360px] rounded-[26px] border border-[#7ec9ba]/50 bg-gradient-to-br from-[#d6eee7] via-[#b5dcd3] to-[#76b8ad] shadow-[0_26px_50px_rgba(3,35,44,0.36)] sm:h-[310px] sm:w-[440px]">
                  <div className="absolute inset-x-6 top-5 h-7 rounded-lg border border-[#75aaa3] bg-[#a8d1c8]/80" />
                  <div className="absolute left-8 top-16 h-32 w-[210px] rounded-2xl border border-[#6da69d] bg-[#85bdb4]/75 shadow-inner sm:left-10 sm:h-40 sm:w-[265px]"><div className="absolute inset-5 rounded-xl border-2 border-dashed border-[#d7f5e8]/70" /><div className="absolute bottom-5 left-1/2 h-7 w-24 -translate-x-1/2 rounded-md bg-[#4f918b]/80" /></div>
                  <div className="absolute right-7 top-16 h-24 w-24 rounded-xl border border-[#6da69d] bg-[#e5f6f0]/85 p-3 sm:right-10 sm:h-28 sm:w-28"><div className="mb-3 h-2 w-10 rounded bg-[#2e7a76]/70" /><div className="space-y-2"><div className="h-1.5 w-full rounded bg-[#8abcb3]" /><div className="h-1.5 w-4/5 rounded bg-[#8abcb3]" /><div className="h-5 w-8 rounded border border-[#2e7a76]/40 bg-[#bfe6d9]" /></div></div>
                  <div className="absolute bottom-4 left-8 right-8 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.16em] text-[#2d6f6a]"><span>THERMAL CYCLE</span><span>REAL-TIME PCR</span></div>
                </div>
              </div>}
              <div className="pointer-events-none absolute inset-0 z-20">
                {hotspots.map((spot, index) => <button key={`fallback-${spot.id}`} className={`pointer-events-auto absolute grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[#73e0c2] text-[#0f4548] shadow-lg transition hover:scale-110 ${activeHotspot.id === spot.id ? "ring-4 ring-[#73e0c2]/30" : ""}`} style={{ left: `${[68, 36, 55][index]}%`, top: `${[38, 56, 28][index]}%` }} aria-label={spot.label} onClick={() => { setActiveHotspot(spot); setShowInfo(true); }}><Crosshair size={14} /></button>)}
              </div>
              {viewer}
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0a3d45]/75 px-4 py-3 text-xs text-[#c4e9df] backdrop-blur-md">
              <span><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#73e0c2]" />Hotspotni tanlang</span>
              <span>Model aniqligi: namuna</span>
            </div>
          </section>

          <aside className="space-y-5">
            <section className="rounded-[26px] border border-[#d8e7e3] bg-[#ffffff] p-6 shadow-[0_14px_40px_rgba(28,71,67,0.06)]">
              <div className="mb-5 flex items-start justify-between gap-3"><div><div className="eyebrow mb-2">Interaktiv detal</div><h2 className="display text-2xl font-bold text-[#173d42]">{activeHotspot.label}</h2></div><div className="grid h-9 w-9 place-items-center rounded-xl bg-[#d9f0e5] text-[#087a73]"><Info size={17} /></div></div>
              <p className="text-sm leading-6 text-[#5b7773]">{activeHotspot.detail}</p>
              <div className="mt-5 border-t border-[#e4efec] pt-4 text-xs text-[#78908c]">Hotspotlar qurilmaning o‘quvchi uchun muhim qismlarini ko‘rsatadi.</div>
            </section>

            {showInfo && <section className="rounded-[26px] border border-[#0d7774] bg-[#0d7774] p-6 text-[#effcf5] shadow-[0_14px_40px_rgba(13,119,116,0.2)]">
              <div className="eyebrow mb-2 text-[#a8e8d5]">Bosqichma-bosqich</div><h2 className="display text-2xl font-bold">{tour[tourStep].title}</h2><p className="mt-3 text-sm leading-6 text-[#d1f1e6]">{tour[tourStep].text}</p>
              <div className="mt-6 flex items-center justify-between"><span className="text-xs font-bold text-[#a8e8d5]">{tourStep + 1} / {tour.length}-qadam</span><div className="flex gap-2"><Button size="sm" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" disabled={tourStep === 0} onClick={() => setTourStep((step) => step - 1)}>Ortga</Button><Button size="sm" className="bg-[#d9f0e5] text-[#075b5d] hover:bg-white" disabled={tourStep === tour.length - 1} onClick={() => setTourStep((step) => step + 1)}>Keyingi</Button></div></div>
            </section>}

            <section className="rounded-[26px] border border-[#d8e7e3] bg-[#ffffff] p-6 shadow-[0_14px_40px_rgba(28,71,67,0.06)]">
              <div className="mb-4 flex items-center justify-between"><h2 className="display text-xl font-bold">Tezkor ma’lumot</h2><span className="rounded-full bg-[#eaf6f2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#14766e]">Tekshiruv</span></div>
              <div className="space-y-3 text-sm"><div className="flex justify-between gap-3 border-b border-[#e5eee8] pb-3"><span className="text-[#78908c]">Model</span><span className="max-w-[190px] text-right font-semibold text-[#315e5b]">{device.model}</span></div><div className="flex justify-between gap-3 border-b border-[#e5eee8] pb-3"><span className="text-[#78908c]">Yangi narx</span><span className="text-right font-semibold text-[#315e5b]">{device.newPrice}</span></div><div className="flex justify-between gap-3"><span className="text-[#78908c]">Brendlar</span><span className="max-w-[190px] text-right font-semibold text-[#315e5b]">{device.brands}</span></div></div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
