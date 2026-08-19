import { useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, FlaskConical, Heart } from "lucide-react";
import { equipment, type Equipment } from "@/lib/equipmentData";
import { equipmentImages } from "@/lib/equipmentImages";
import { getImageBackgroundProfile, getImagePresentation } from "@/lib/equipmentImagePresentation";
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
  const pageSize = 12;
  const totalPages = Math.ceil(equipment.length / pageSize);
  const pageEquipment = equipment.slice(currentIndex * pageSize, (currentIndex + 1) * pageSize);

  return (
    <section
      className="pure3d-carousel my-8 rounded-[32px] border border-[#d3e5df] bg-gradient-to-b from-[#f7fcfb] to-[#edf7f4] p-6 shadow-[0_20px_50px_rgba(28,71,67,0.06)] sm:p-10"
      aria-label="Asosiy qurilmalar 3D carouseli"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="eyebrow mb-2">Original 3D Carousel Arxitekturasi</div>
          <h2 className="display text-3xl font-bold text-[#173d42]">Asosiy Biotexnologiya Qurilmalari</h2>
          <p className="mt-1 text-sm text-[#62827d]">
            Har bir qurilma original namuna geometriyasidagi aylanuvchi halqada ko‘rsatiladi.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentIndex((page) => Math.max(0, page - 1))}
            disabled={currentIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#b8d8cc] bg-white text-[#0d7774] shadow-sm transition hover:bg-[#e7f5f1] disabled:cursor-not-allowed disabled:opacity-40"
            title="Oldingi sahifa"
            aria-label="Oldingi carousel sahifasi"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="rounded-xl border border-[#b8d8cc] bg-white px-4 py-2 text-xs font-bold text-[#173d42]" aria-live="polite">
            Sahifa {currentIndex + 1} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentIndex((page) => Math.min(totalPages - 1, page + 1))}
            disabled={currentIndex === totalPages - 1}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#b8d8cc] bg-white text-[#0d7774] shadow-sm transition hover:bg-[#e7f5f1] disabled:cursor-not-allowed disabled:opacity-40"
            title="Keyingi sahifa"
            aria-label="Keyingi carousel sahifasi"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {pageEquipment.length > 0 ? (
        <div className="scene" aria-live="polite">
          <div className="a3d" style={{ "--n": pageEquipment.length } as CarouselStyle}>
            {pageEquipment.map((device, index) => {
              const image = equipmentImages[device.id];
              const imagePresentation = getImagePresentation(device.id);
              const imageBackgroundProfile = getImageBackgroundProfile(device.id);
              const isPriorityImage = currentIndex === 0 && index < 3;
              const bookmarked = isBookmarked(device.id);

              return (
                <div
                  key={device.id}
                  className="card group cursor-pointer"
                  style={{ "--i": index } as CarouselStyle}
                  role="group"
                  tabIndex={0}
                  onClick={() => onSelectDevice(device)}
                  onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) return;
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onSelectDevice(device);
                    }
                  }}
                  aria-label={`${device.name}, ${device.model}, o‘rganish`}
                >
                  <span className="card-shell">
                    <span className="card-media" data-image-profile={imageBackgroundProfile}>
                      {image ? (
                        <>
                          {imagePresentation.fit === "contain" && imageBackgroundProfile === "laboratory" && (
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
                            className={`relative h-full w-full ${imagePresentation.fit === "cover" ? "object-cover" : imageBackgroundProfile === "paper" ? "object-contain p-0" : imageBackgroundProfile === "ink" ? "object-contain p-1 brightness-110 contrast-110" : "object-contain p-2"}`}
                            style={{ objectPosition: imagePresentation.position }}
                            loading={isPriorityImage ? "eager" : "lazy"}
                          />
                        </>
                      ) : (
                        <span className="flex h-full w-full items-center justify-center bg-[#e5f2ee] text-[#0d7774]">
                          <FlaskConical size={36} />
                        </span>
                      )}
                      <span className="card-code">{device.id}</span>
                    </span>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onToggleBookmark(device.id);
                      }}
                      data-bookmark-button={device.id}
                      aria-pressed={bookmarked}
                      aria-label={bookmarked ? `${device.name} saralanganlardan olib tashlash` : `${device.name} saralanganlarga saqlash`}
                      className={`absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full border shadow-sm backdrop-blur transition ${bookmarked ? "border-[#0d7774] bg-[#0d7774] text-white" : "border-white/80 bg-white/90 text-[#0d7774] hover:border-[#0d7774] hover:bg-[#e3f2e9]"}`}
                    >
                      <Heart size={14} fill={bookmarked ? "currentColor" : "none"} />
                    </button>
                    <span className="card-caption">
                      <span className="card-category">{device.category}</span>
                      <span className="card-name">{device.name}</span>
                      <span className="card-model">{device.model}</span>
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="carousel-empty">Carousel uchun qurilmalar topilmadi.</div>
      )}
    </section>
  );
}

/* The .scene/.a3d/.card class names intentionally mirror the supplied original sample. */
