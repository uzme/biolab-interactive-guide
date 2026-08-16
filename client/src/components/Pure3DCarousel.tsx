import { useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, FlaskConical, Heart } from "lucide-react";
import { equipment, type Equipment } from "@/lib/equipmentData";
import { equipmentImages } from "@/lib/equipmentImages";
import { getImagePresentation } from "@/lib/equipmentImagePresentation";
import "./Pure3DCarousel.css";

type CarouselStyle = CSSProperties & {
  "--n"?: number;
  "--i"?: number;
};

type Pure3DCarouselProps = {
  onSelectDevice: (device: Equipment) => void;
  isBookmarked: (deviceId: string) => boolean;
  onToggleBookmark: (deviceId: string) => void;
};

export default function Pure3DCarousel({ onSelectDevice, isBookmarked, onToggleBookmark }: Pure3DCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(equipment.length / itemsPerPage);

  const paginatedEquipment = equipment.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <div className="mb-6 flex items-center justify-between px-2">
        <div>
          <div className="tech-label text-[#0d7774]">3D KMR / 100 QURILMA HALQASI</div>
          <p className="text-xs text-[#5d827c]">Sahifa {currentIndex + 1} / {totalPages} (Har sahifada 12 ta asbob)</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[#b8d8ce] bg-white text-[#0b7772] shadow-sm transition hover:bg-[#0d7774] hover:text-white"
            aria-label="Oldingi sahifa"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[#b8d8ce] bg-white text-[#0b7772] shadow-sm transition hover:bg-[#0d7774] hover:text-white"
            aria-label="Keyingi sahifa"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="scene" style={{ "--n": paginatedEquipment.length } as CarouselStyle}>
        <div className="a3d">
          {paginatedEquipment.map((device, index) => {
            const rawImg = equipmentImages[device.id];
            const presentation = getImagePresentation(device.id);
            const bookmarked = isBookmarked(device.id);
            return (
              <div
                key={device.id}
                className="card group cursor-pointer"
                style={{ "--i": index } as CarouselStyle}
                onClick={() => onSelectDevice(device)}
              >
                <div className="card-shell relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#d2e4dd] bg-[#ffffff] p-3 text-left shadow-[0_12px_30px_rgba(20,68,64,0.08)] transition group-hover:border-[#0d7774] group-hover:shadow-[0_18px_40px_rgba(13,119,116,0.18)]">
                  <div className="absolute right-3 top-3 z-20">
                      <button
                        type="button"
                        data-bookmark-button="true"
                        aria-pressed={bookmarked}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(device.id);
                        }}
                        className={`grid h-8 w-8 place-items-center rounded-full border transition ${bookmarked ? "border-[#0d7774] bg-[#0d7774] text-white shadow" : "border-[#c4e0d6] bg-white/90 text-[#547b74] hover:border-[#0d7774] hover:text-[#0d7774]"}`}
                        aria-label="Saralashga qo‘shish"
                      >
                      <Heart size={15} fill={bookmarked ? "currentColor" : "none"} />
                    </button>
                  </div>
                  <div className="relative mb-3 flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-[#f4f8f6] p-2">
                    {rawImg ? (
                      <img
                        src={typeof rawImg === "string" ? rawImg : String(rawImg)}
                        alt={device.name}
                        className={`max-h-full max-w-full transition duration-300 group-hover:scale-105 ${presentation.fit === "cover" ? "h-full w-full object-cover" : "object-contain"}`}
                        style={{ objectPosition: presentation.position }}
                      />
                    ) : (
                      <FlaskConical size={36} className="text-[#0d7774]/40" />
                    )}
                    <span className="absolute bottom-2 left-2 rounded-md bg-[#0b3941]/85 px-2 py-0.5 text-[10px] font-bold text-[#d2f4eb] backdrop-blur-sm">
                      {device.id}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d7774]">{device.category}</div>
                      <h4 className="mt-1 line-clamp-1 text-sm font-bold tracking-[-0.02em] text-[#173d42]">{device.name}</h4>
                      <p className="mt-0.5 line-clamp-1 text-xs text-[#5d827c]">{device.model || device.brands}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-[#e5f0ec] pt-2 text-[11px] font-bold text-[#0d7774]">
                      <span>16 qadamli SOP</span>
                      <span className="transition group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
