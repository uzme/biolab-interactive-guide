import React, { useState } from "react";
import { equipment } from "@/lib/equipmentData";
import { equipmentImages } from "@/lib/equipmentImages";
import { getImagePresentation } from "@/lib/equipmentImagePresentation";
import { ArrowUpRight, FlaskConical } from "lucide-react";

export default function Pure3DCarousel({ onSelectDevice }: { onSelectDevice: (device: any) => void }) {
  const items = equipment.slice(0, 12);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDevice = items[activeIndex] || items[0];
  const activeImageKey = `BIO-${String(activeDevice.number).padStart(3, "0")}`;
  const activeImage = equipmentImages[activeImageKey];

  return (
    <div className="rounded-3xl border border-[#b8dcd2] bg-gradient-to-b from-[#f2f9f6] to-[#e6f4ef] p-6 shadow-sm">
      <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <div className="tech-label text-[#0d9488]">ORIGINAL 3D ANIMATED CAROUSEL</div>
          <h2 className="display text-2xl font-bold text-[#173d42] sm:text-3xl">3D Aylanuvchi Uskunalar Galereyasi</h2>
          <p className="mt-1 text-xs text-[#5a7c76]">Asl kod talabi bo‘yicha: rasm ostida qurilmaning aniq nomi va modeli ko‘rsatiladi.</p>
        </div>
        <div className="rounded-full border border-[#b2d9cd] bg-white px-3 py-1.5 text-xs font-bold text-[#0b7772]">
          Faol tanlov: #{String(activeDevice.number).padStart(3, "0")}
        </div>
      </div>

      {/* Pure CSS 3D Carousel scene inspired by original ZIP */}
      <div className="relative mx-auto h-[320px] w-full max-w-[900px] overflow-hidden [perspective:45em]">
        <div className="absolute inset-0 grid place-items-center">
          <div 
            className="grid h-[210px] w-[180px] [transform-style:preserve-3d] [animation:ry_bio_spin_32s_linear_infinite]"
            style={{ "--n": items.length } as React.CSSProperties}
          >
            {items.map((device, i) => {
              const imageKey = `BIO-${String(device.number).padStart(3, "0")}`;
              const imgData = equipmentImages[imageKey];
              const pres = getImagePresentation(imageKey);
              return (
                <div
                  key={device.id}
                  onClick={() => {
                    setActiveIndex(i);
                    onSelectDevice(device);
                  }}
                  className={`group absolute left-0 top-0 h-full w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-[#b5dbd0] bg-white p-2.5 shadow-xl transition hover:border-[#0d9488]`}
                  style={{
                    "--i": i,
                    "--ba": `calc(1turn / ${items.length})`,
                    transform: `rotateY(calc(var(--i) * var(--ba))) translateZ(210px)`,
                    backfaceVisibility: "hidden"
                  } as React.CSSProperties}
                >
                  <div className="relative h-32 w-full overflow-hidden rounded-xl bg-[#e3f2ec]">
                    {imgData ? (
                      <img
                        src={imgData.url}
                        alt={imgData.alt}
                        className="absolute inset-0 h-full w-full object-contain p-2 mix-blend-multiply"
                        style={{ objectPosition: pres.position }}
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-[#0d9488]"><FlaskConical size={20} /></div>
                    )}
                    <span className="absolute left-1.5 top-1.5 rounded bg-white/90 px-1.5 py-0.5 text-[8px] font-extrabold text-[#0b6663]">{imageKey}</span>
                  </div>
                  <div className="mt-2 text-left">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-[#0d9488] truncate">{device.category}</div>
                    <h4 className="display mt-0.5 text-xs font-extrabold leading-tight text-[#173d42] line-clamp-1">{device.name}</h4>
                    <p className="text-[10px] font-semibold text-[#62847e] truncate">{device.model}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Device Detailed Preview Banner */}
      <div 
        onClick={() => onSelectDevice(activeDevice)}
        className="mt-6 flex cursor-pointer flex-col items-center justify-between gap-4 rounded-2xl border border-[#b2dcd0] bg-white p-4 shadow-sm transition hover:border-[#0d9488] sm:flex-row"
      >
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#cce4dd] bg-[#edf7f4]">
            {activeImage ? (
              <img src={activeImage.url} alt={activeImage.alt} className="absolute inset-0 h-full w-full object-contain p-1 mix-blend-multiply" />
            ) : (
              <div className="grid h-full w-full place-items-center text-[#0d9488]"><FlaskConical size={18} /></div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#edf7f4] px-2 py-0.5 text-[10px] font-extrabold text-[#0b7772]">BIO-{String(activeDevice.number).padStart(3, "0")}</span>
              <span className="text-xs font-bold text-[#577973]">{activeDevice.category}</span>
            </div>
            <h3 className="display mt-1 text-base font-extrabold text-[#173d42]">{activeDevice.name}</h3>
            <p className="text-xs font-medium text-[#658781]">Model: <strong className="text-[#0d9488]">{activeDevice.model}</strong> ({activeDevice.brands || "Official"})</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-[#0c7773]">16 bo‘limli SOP larni ochish</span>
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0d9488] text-white shadow"><ArrowUpRight size={16} /></div>
        </div>
      </div>

      {/* Inline styles for 3D animation matching original ZIP */}
      <style>{`
        @keyframes ry_bio_spin_32s_linear_infinite {
          to {
            transform: rotateY(1turn);
          }
        }
      `}</style>
    </div>
  );
}
