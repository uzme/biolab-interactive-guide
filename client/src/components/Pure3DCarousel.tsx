import { useState, type CSSProperties } from "react";
import { FlaskConical, ChevronLeft, ChevronRight } from "lucide-react";
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
};

export default function Pure3DCarousel({ onSelectDevice }: Pure3DCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pageSize = 12;
  const totalPages = Math.ceil(equipment.length / pageSize);

  const paginatedEquipment = equipment.slice(
    currentIndex * pageSize,
    (currentIndex + 1) * pageSize
  );

  return (
    <div className="my-8 rounded-[32px] border border-[#d3e5df] bg-gradient-to-b from-[#f7fcfb] to-[#edf7f4] p-6 shadow-[0_20px_50px_rgba(28,71,67,0.06)] sm:p-10">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="eyebrow mb-2">Original 3D Carousel Arxitekturasi</div>
          <h2 className="display text-3xl font-bold text-[#173d42]">Asosiy Biotexnologiya Qurilmalari</h2>
          <p className="mt-1 text-sm text-[#62827d]">100 ta qurilma ichidan tanlangan asosiy laboratoriya tizimlari va ularning 3D taqdimoti.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#b8d8cc] bg-white text-[#0d7774] shadow-sm transition hover:bg-[#e7f5f1] disabled:opacity-40"
            title="Oldingi sahifa"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="rounded-xl border border-[#b8d8cc] bg-white px-4 py-2 text-xs font-bold text-[#173d42]">
            Sahifa {currentIndex + 1} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentIndex === totalPages - 1}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#b8d8cc] bg-white text-[#0d7774] shadow-sm transition hover:bg-[#e7f5f1] disabled:opacity-40"
            title="Keyingi sahifa"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="carousel-container py-6">
        <div
          className="carousel"
          style={
            {
              "--n": paginatedEquipment.length,
            } as CarouselStyle
          }
        >
          {paginatedEquipment.map((device, idx) => {
            const image = equipmentImages[device.id];
            const imagePresentation = getImagePresentation(device.id);
            return (
              <div
                key={device.id}
                className="carousel-item group cursor-pointer"
                style={
                  {
                    "--i": idx,
                  } as CarouselStyle
                }
                onClick={() => onSelectDevice(device)}
              >
                <div className="flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#c8e2da] bg-white p-4 shadow-[0_12px_35px_rgba(28,71,67,0.08)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#0d7774] group-hover:shadow-[0_20px_45px_rgba(13,119,116,0.18)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f0f7f5]">
                    {image ? (
                      <>
                        {imagePresentation.fit === "contain" && (
                          <img
                            aria-hidden="true"
                            src={image.url}
                            alt=""
                            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-xl"
                            style={{ objectPosition: imagePresentation.position }}
                          />
                        )}
                        <img
                          src={image.url}
                          alt={image.alt}
                          className={`relative h-full w-full ${
                            imagePresentation.fit === "contain" ? "object-contain p-2" : "object-cover"
                          }`}
                          style={{ objectPosition: imagePresentation.position }}
                          loading={currentIndex === 0 && idx < 3 ? "eager" : "lazy"}
                        />
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#e5f2ee] text-[#0d7774]">
                        <FlaskConical size={36} />
                      </div>
                    )}
                    <span className="absolute top-2.5 left-2.5 rounded-full bg-[#173d42]/80 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                      {device.id}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-[#0d7774] uppercase tracking-[0.1em]">{device.category}</div>
                      <h3 className="mt-1 line-clamp-1 text-sm font-bold text-[#173d42] group-hover:text-[#0d7774]">{device.name}</h3>
                      <p className="mt-0.5 line-clamp-1 text-xs text-[#62827d]">{device.model}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-[#edf4f2] pt-2.5">
                      <span className="text-[11px] font-bold text-[#35625f]">O‘rganish</span>
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e3f2ec] text-[#0d7774] transition group-hover:bg-[#0d7774] group-hover:text-white">
                        →
                      </span>
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
