import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type LabEntryGateProps = {
  onEnter: () => void;
};

export default function LabEntryGate({ onEnter }: LabEntryGateProps) {
  const [isEntering, setIsEntering] = useState(false);

  const enterLaboratory = () => {
    if (isEntering) return;
    setIsEntering(true);
    window.setTimeout(onEnter, 260);
  };

  return <main className={`lab-entry lab-entry-splash ${isEntering ? "is-entering" : ""}`} data-lab-entry aria-labelledby="lab-entry-title">
    <section className="lab-entry-frame lab-entry-splash-frame" data-lab-entry-frame>
      <div className="lab-entry-splash-halo" aria-hidden="true" />
      <h1 id="lab-entry-title" className="sr-only">BioLab laboratoriya ochilish sahifasi</h1>
      <img
        className="lab-entry-splash-logo"
        data-lab-entry-logo
        src="/manus-storage/biolab-gold-fullscreen-black_15728cda.png"
        alt="BioLab oltin laboratoriya logotipi"
      />
      <div className="lab-entry-splash-footer">
        <p>O‘ZBEKCHA BIOTEXNOLOGIYA TIZIMI</p>
        <button type="button" className="lab-entry-action lab-entry-splash-action" data-lab-entry-action onClick={enterLaboratory} disabled={isEntering}>
          <span>{isEntering ? "Laboratoriya ochilmoqda…" : "Laboratoriyaga kirish"}</span><ArrowUpRight size={20} aria-hidden="true" />
        </button>
      </div>
    </section>
  </main>;
}
