import React, { useState, useMemo, type CSSProperties } from "react";
import { FlaskConical } from "lucide-react";
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

  const paginatedItems = useMemo(() => {
    const start = currentIndex * pageSize;
    return equipment.slice(start, start + pageSize);
  }, [currentIndex]);

  if (!equipment.length) {
    return <div className="pure3d-carousel carousel-empty">Qurilmalar topilmadi.</div>;
  }

  return (
    <div className="pure3d-carousel" aria-label="Tanlangan qurilmalar carousel">
      <div className="scene">
        <div className="carousel-nav-controls flex items-center justify-between mb-4 px-4">
          <button
            type="button"
            className="px-3 py-1.5 text-xs font-medium rounded-md bg-teal-900/40 text-teal-200 border border-teal-700/50 hover:bg-teal-800/60 transition-colors"
            onClick={() => setCurrentIndex((prev: number) => (prev > 0 ? prev - 1 : totalPages - 1))}
          >
            ← Oldingi 12 ta
          </button>
          <span className="text-xs text-slate-300 font-medium">
            Sahifa {currentIndex + 1} / {totalPages} (Jami {equipment.length} qurilma)
          </span>
          <button
            type="button"
            className="px-3 py-1.5 text-xs font-medium rounded-md bg-teal-900/40 text-teal-200 border border-teal-700/50 hover:bg-teal-800/60 transition-colors"
            onClick={() => setCurrentIndex((prev: number) => (prev < totalPages - 1 ? prev + 1 : 0))}
          >
            Keyingi 12 ta →
          </button>
        </div>

        <div className="a3d" style={{ "--n": paginatedItems.length } as CarouselStyle}>
          {paginatedItems.map((device: Equipment, index: number) => {
            const imageKey = device.id;
            const image = equipmentImages[imageKey];
            const presentation = getImagePresentation(imageKey);

            return (
              <button
                key={device.id}
                type="button"
                className="card"
                style={{ "--i": index } as CarouselStyle}
                onClick={() => onSelectDevice(device)}
                aria-label={`${device.name}, ${device.model} tafsilotlarini ochish`}
              >
                <span className="card-shell">
                  <span className="card-media">
                    {image ? (
                      <img
                        src={image.url}
                        alt={image.alt}
                        style={{ objectFit: presentation.fit, objectPosition: presentation.position }}
                      />
                    ) : (
                      <span className="carousel-empty" aria-label="Rasm mavjud emas">
                        <FlaskConical size={24} aria-hidden="true" />
                      </span>
                    )}
                    <span className="card-code">{imageKey}</span>
                  </span>
                  <span className="card-caption">
                    <span className="card-category">{device.category}</span>
                    <span className="card-name">{device.name}</span>
                    <span className="card-model">{device.model}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
