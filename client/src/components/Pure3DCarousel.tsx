import type { CSSProperties } from "react";
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
  const items = equipment.slice(0, 12);

  if (!items.length) {
    return <div className="pure3d-carousel carousel-empty">Qurilmalar topilmadi.</div>;
  }

  return (
    <div className="pure3d-carousel" aria-label="Tanlangan qurilmalar carousel">
      <div className="scene">
        <div className="a3d" style={{ "--n": items.length } as CarouselStyle}>
          {items.map((device, index) => {
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
