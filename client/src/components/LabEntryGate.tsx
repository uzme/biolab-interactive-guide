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

  return <main className={`lab-entry ${isEntering ? "is-entering" : ""}`} data-lab-entry aria-labelledby="lab-entry-title">
    <div className="lab-entry-grid" aria-hidden="true" />
    <div className="lab-entry-glow lab-entry-glow-a" aria-hidden="true" />
    <div className="lab-entry-glow lab-entry-glow-b" aria-hidden="true" />
    <section className="lab-entry-frame">
      <div className="lab-entry-topline">
        <div className="lab-entry-brand"><span className="lab-entry-mark"><img src="/manus-storage/biolab-gold-3d-monogram-clean_2eb9f2d4.png" alt="" /></span><span>BIO.LAB <b>/ LAB-01</b></span></div>
        <span className="lab-entry-live"><i /> LIVE TIZIM</span>
      </div>

      <div className="lab-entry-visual" aria-label="Jonli laboratoriya ish va tanaffus sahnasi">
        <img src="/biolab-live-lab-agent-scene.webp" alt="Laboratoriyada kompyuter va pipetka bilan ishlayotgan biotexnolog mutaxassisi, qahva va mushukcha bilan" />
        <div className="lab-entry-shade" aria-hidden="true" />
        <img className="lab-entry-gold-emblem" src="/manus-storage/biolab-gold-lab-image-overlay-alpha_11e875f8.png" alt="" aria-hidden="true" />
        <div className="lab-entry-agent-scene" data-agent-scene aria-hidden="true">
          <span className="studio-monitor-glow" />
          <span className="studio-coffee-steam studio-coffee-steam-one" />
          <span className="studio-coffee-steam studio-coffee-steam-two" />
          <span className="studio-live-signal" />
        </div>
        <div className="lab-entry-scan" aria-hidden="true" />
        <div className="lab-entry-visual-label lab-entry-label-top">ISH STOLI / LIVE</div>
        <div className="lab-entry-agent-status" data-agent-status aria-label="Laboratoriya agenti ish va tanaffus jarayonini bajaradi"><span className="agent-status-work">TAHLIL JARAYONI</span><span className="agent-status-rest">QISQA TANAFFUS</span></div>
      </div>

      <div className="lab-entry-content">
        <p className="lab-entry-kicker"><span /> O‘ZBEKCHA BIOTEXNOLOGIYA TIZIMI</p>
        <h1 id="lab-entry-title">Laboratoriyani<br /><em>jonli boshqaring.</em></h1>
        <p className="lab-entry-copy">100 ta qurilma, 16 bo‘limli amaliy SOP va ish stolidan tanaffusgacha jonli laboratoriya ritmi.</p>
        <div className="lab-entry-workflow" aria-label="Laboratoriya workflow bosqichlari">
          <span><b>01</b> NAMUNA</span><i /><span><b>02</b> TAHLIL</span><i /><span><b>03</b> NATIJA</span>
        </div>
      </div>

      <button type="button" className="lab-entry-action" data-lab-entry-action onClick={enterLaboratory} disabled={isEntering}>
        <span>{isEntering ? "Laboratoriya ochilmoqda…" : "Laboratoriyaga kirish"}</span><ArrowUpRight size={20} aria-hidden="true" />
      </button>
      <p className="lab-entry-note">Tizim tayyor <span /> 100 × 16 O‘QUV REKORDI</p>
    </section>
  </main>;
}
