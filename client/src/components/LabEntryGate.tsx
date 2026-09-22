import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type LabEntryGateProps = {
  onEnter: () => void;
};

export default function LabEntryGate({ onEnter }: LabEntryGateProps) {
  const [isEntering, setIsEntering] = useState(false);
  const { text } = useLanguage();

  const enterLaboratory = () => {
    if (isEntering) return;
    setIsEntering(true);
    window.setTimeout(onEnter, 260);
  };

  return <main className={`lab-entry lab-entry-splash ${isEntering ? "is-entering" : ""}`} data-lab-entry aria-labelledby="lab-entry-title">
    <section className="lab-entry-frame lab-entry-splash-frame" data-lab-entry-frame>
      <div className="lab-entry-splash-halo" aria-hidden="true" />
      <h1 id="lab-entry-title" className="sr-only">BioLab laboratoriya ochilish sahifasi</h1>
      <div className="lab-entry-splash-brand" data-lab-entry-logo aria-label="BioLab. Muallif: Mengliyev Bahrom">
        <img className="lab-entry-splash-logo" src="/biolab-logo.webp" alt="BioLab laboratoriya logotipi" />
        <span className="lab-entry-splash-brand-name">BioLab</span>
        <span className="lab-entry-splash-brand-author">{text.author}</span>
      </div>
      <div className="lab-entry-splash-footer">
        <p>{text.systemTagline}</p>
        <button type="button" className="lab-entry-action lab-entry-splash-action" data-lab-entry-action onClick={enterLaboratory} disabled={isEntering}>
          <span>{isEntering ? text.loading : text.enterLab}</span><ArrowUpRight size={20} aria-hidden="true" />
        </button>
      </div>
    </section>
  </main>;
}
