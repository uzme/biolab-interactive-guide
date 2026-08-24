import { useState } from "react";
import { ArrowUpRight, Dna, FlaskConical, ScanLine } from "lucide-react";

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
        <div className="lab-entry-brand"><span className="lab-entry-mark">BL</span><span>BIO.LAB <b>/ LAB-01</b></span></div>
        <span className="lab-entry-live"><i /> LIVE TIZIM</span>
      </div>

      <div className="lab-entry-visual" aria-label="Laboratoriya tizimi vizuali">
        <img src="/manus-storage/biolab-hero_a08d430e.jpg" alt="Zamonaviy biotexnologiya laboratoriyasi" />
        <div className="lab-entry-shade" aria-hidden="true" />
        <div className="lab-entry-agent-scene" data-agent-scene aria-hidden="true">
          <div className="agent-scene-path" />
          <div className="agent-scene-window"><i /><i /><i /></div>
          <div className="agent-scene-desk"><span className="agent-monitor"><i /></span><span className="agent-keyboard" /><span className="agent-desk-lamp" /></div>
          <div className="agent-figure agent-figure-work"><i className="agent-head" /><i className="agent-body" /><i className="agent-arm agent-arm-left" /><i className="agent-arm agent-arm-right" /></div>
          <div className="agent-scene-lounge"><span className="agent-sofa" /><span className="agent-sofa-leg" /></div>
          <div className="agent-figure agent-figure-rest"><i className="agent-head" /><i className="agent-body" /><i className="agent-arm agent-arm-left" /><i className="agent-arm agent-arm-right" /></div>
          <div className="agent-coffee"><i /><span /></div>
          <div className="agent-cat"><i className="agent-cat-ear agent-cat-ear-left" /><i className="agent-cat-ear agent-cat-ear-right" /><i className="agent-cat-tail" /></div>
        </div>
        <div className="lab-entry-scan" aria-hidden="true" />
        <div className="lab-entry-dna" aria-hidden="true"><Dna size={112} strokeWidth={1.05} /></div>
        <div className="lab-entry-visual-label lab-entry-label-top">SAMPLE / 01</div>
        <div className="lab-entry-visual-label lab-entry-label-bottom"><ScanLine size={14} /> ANALIZ YADROSI</div>
        <div className="lab-entry-orbit lab-entry-orbit-one" aria-hidden="true"><FlaskConical size={15} /></div>
        <div className="lab-entry-orbit lab-entry-orbit-two" aria-hidden="true"><span /></div>
        <div className="lab-entry-agent-status" data-agent-status aria-label="Laboratoriya agenti ish va tanaffus jarayonini bajaradi"><span className="agent-status-work">AGENT / TAHLILDA</span><span className="agent-status-rest">AGENT / TANAFFUSDA</span></div>
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
