import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BookOpen, Check, Database, ExternalLink, FileText, MonitorSmartphone, Moon, Palette, ShieldCheck, Sun, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

type SettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookmarkedCount: number;
  onClearBookmarks: () => void;
  onExportBookmarks: () => void;
  onExportBookmarksCsv: () => void;
  onExportBookmarksPdf: () => Promise<void> | void;
  onImportBookmarks: (file: File) => Promise<unknown>;
};

export default function SettingsDialog({ open, onOpenChange, bookmarkedCount, onClearBookmarks, onExportBookmarks, onExportBookmarksCsv, onExportBookmarksPdf, onImportBookmarks }: SettingsDialogProps) {
  const { theme, themePreference, toggleTheme, useSystemTheme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(() => localStorage.getItem("biolab-reduced-motion") === "true");
  const importInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reducedMotion);
    localStorage.setItem("biolab-reduced-motion", String(reducedMotion));
  }, [reducedMotion]);

  if (!open) return null;

  const handleClearBookmarks = () => {
    if (bookmarkedCount === 0) {
      toast.info("Saralangan qurilmalar ro‘yxati allaqachon bo‘sh.");
      return;
    }
    if (!window.confirm("Barcha saralangan qurilmalarni o‘chirishni xohlaysizmi?")) return;
    onClearBookmarks();
    toast.success("Saralangan qurilmalar tozalandi.");
  };

  const handleImportBookmarks = async (file: File) => {
    try {
      const result = await onImportBookmarks(file) as { addedCount?: number; ignoredCount?: number };
      const addedCount = result.addedCount ?? 0;
      const ignoredCount = result.ignoredCount ?? 0;
      toast.success(`${addedCount} ta qurilma import qilindi${ignoredCount ? `, ${ignoredCount} ta noma’lum ID e’tiborsiz qoldirildi` : ""}.`);
    } catch {
      toast.error("Xatcho‘plar faylini import qilib bo‘lmadi.");
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-[#173d42]/70 px-3 py-4 backdrop-blur-[2px] sm:p-6" onClick={() => onOpenChange(false)}>
      <div className="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-hidden rounded-[28px] border border-[#cfe4db] bg-[#f7fbfa] shadow-[0_30px_90px_rgba(20,68,64,0.28)]" role="dialog" aria-modal="true" aria-labelledby="biolab-settings-title" onClick={(event) => event.stopPropagation()}>
        <div className="border-b border-[#d7e7e1] bg-white/95 px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#0d7774] text-white shadow-[0_8px_18px_rgba(13,119,116,0.2)]"><Palette size={20} /></span>
              <div>
                <div className="tech-label text-[#0d7774]">BIO.LAB // CONTROL CENTER</div>
                <h2 id="biolab-settings-title" className="display mt-1 text-xl font-bold tracking-[-0.035em] text-[#173d42] sm:text-2xl">Sozlamalar va huquqiy ma’lumot</h2>
                <p className="mt-1 text-xs leading-5 text-[#68857f]">Ko‘rinish, qulaylik, ma’lumotlar va platforma shaffofligi bir joyda.</p>
              </div>
            </div>
            <button type="button" onClick={() => onOpenChange(false)} className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#edf7f4] text-[#0d7774] transition hover:bg-[#dceee7]" aria-label="Sozlamalarni yopish"><X size={18} /></button>
          </div>
        </div>

        <div className="max-h-[calc(100dvh-154px)] overflow-y-auto overscroll-contain px-5 py-5 [-webkit-overflow-scrolling:touch] sm:px-7 sm:py-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-2xl border border-[#cfe4db] bg-white p-5 shadow-[0_8px_20px_rgba(23,61,66,0.04)]">
              <div className="flex items-center gap-2 text-[#0d7774]"><Palette size={17} /><h3 className="font-bold text-[#173d42]">Ko‘rinish</h3></div>
              <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-[#dcebe5] bg-[#f7fbfa] p-3">
                <div><div className="text-sm font-bold text-[#173d42]">Rang mavzusi</div><div className="mt-1 text-xs text-[#68857f]">Tizimning kun/tun rejimiga avtomatik moslashadi.</div></div>
                <div className="flex shrink-0 gap-1.5">
                  <button type="button" onClick={() => useSystemTheme?.()} className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-bold transition ${themePreference === "system" ? "border-[#0d7774] bg-[#dff4ed] text-[#075f5c]" : "border-[#b8d8ce] bg-white text-[#0d7774] hover:bg-[#e5f3ed]"}`} aria-pressed={themePreference === "system"} aria-label="Tizim rang mavzusidan foydalanish"><MonitorSmartphone size={15} /> Avto</button>
                  <button type="button" onClick={() => toggleTheme?.()} className="inline-flex items-center gap-1.5 rounded-lg border border-[#b8d8ce] bg-white px-2.5 py-2 text-xs font-bold text-[#0d7774] transition hover:bg-[#e5f3ed]" aria-label="Rang mavzusini qo‘lda almashtirish">
                    {theme === "dark" ? <Moon size={15} /> : <Sun size={15} />} {theme === "dark" ? "Tungi" : "Yorug‘"}
                  </button>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 rounded-xl border border-[#dcebe5] bg-[#f7fbfa] p-3">
                <div><div className="text-sm font-bold text-[#173d42]">Kamroq animatsiya</div><div className="mt-1 text-xs text-[#68857f]">Harakatni kamaytirish sozlamasini saqlaydi.</div></div>
                <button type="button" role="switch" aria-checked={reducedMotion} onClick={() => setReducedMotion((value) => !value)} className={`relative h-7 w-12 rounded-full transition ${reducedMotion ? "bg-[#0d7774]" : "bg-[#b9d3ca]"}`} aria-label="Kamroq animatsiyani almashtirish"><span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${reducedMotion ? "translate-x-6" : "translate-x-1"}`} />{reducedMotion && <Check size={12} className="absolute left-2 top-2 text-white" />}</button>
              </div>
            </section>

            <section className="rounded-2xl border border-[#cfe4db] bg-white p-5 shadow-[0_8px_20px_rgba(23,61,66,0.04)]">
              <div className="flex items-center gap-2 text-[#0d7774]"><Database size={17} /><h3 className="font-bold text-[#173d42]">Mahalliy ma’lumotlar</h3></div>
              <p className="mt-3 text-xs leading-5 text-[#68857f]">Xatcho‘plar shu brauzerning LocalStorage xotirasida saqlanadi. Login yoki serverga yuborish talab qilinmaydi.</p>
              <div className="mt-4 rounded-xl border border-[#dcebe5] bg-[#f7fbfa] p-3"><div className="flex items-center justify-between gap-3"><div><div className="text-sm font-bold text-[#173d42]">Saqlangan qurilmalar</div><div className="mt-1 text-xs text-[#68857f]">{bookmarkedCount} ta xatcho‘p faol</div></div><button type="button" onClick={handleClearBookmarks} aria-label="Xatcho‘plarni tozalash" className="inline-flex items-center gap-1.5 rounded-lg border border-[#efc8c2] bg-white px-3 py-2 text-xs font-bold text-[#b44d43] transition hover:bg-[#fff3f1]"><Trash2 size={14} /> Tozalash</button></div><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={onExportBookmarksCsv} disabled={bookmarkedCount === 0} className="inline-flex items-center gap-1.5 rounded-lg border border-[#b8d8ce] bg-white px-3 py-2 text-xs font-bold text-[#0d7774] transition hover:bg-[#e5f3ed] disabled:cursor-not-allowed disabled:opacity-45">CSV eksport</button><button type="button" onClick={() => { void onExportBookmarksPdf(); }} disabled={bookmarkedCount === 0} className="inline-flex items-center gap-1.5 rounded-lg border border-[#b8d8ce] bg-white px-3 py-2 text-xs font-bold text-[#0d7774] transition hover:bg-[#e5f3ed] disabled:cursor-not-allowed disabled:opacity-45">PDF eksport</button><button type="button" onClick={onExportBookmarks} className="inline-flex items-center gap-1.5 rounded-lg border border-[#b8d8ce] bg-white px-3 py-2 text-xs font-bold text-[#0d7774] transition hover:bg-[#e5f3ed]">JSON eksport</button><button type="button" onClick={() => importInputRef.current?.click()} className="inline-flex items-center gap-1.5 rounded-lg border border-[#b8d8ce] bg-white px-3 py-2 text-xs font-bold text-[#0d7774] transition hover:bg-[#e5f3ed]">JSON import</button><input ref={importInputRef} type="file" accept="application/json,.json" className="hidden" aria-label="Xatcho‘plar JSON faylini tanlash" onChange={(event) => { const file = event.target.files?.[0]; if (file) void handleImportBookmarks(file); event.target.value = ""; }} /></div></div>
            </section>
          </div>

          <section className="mt-4 rounded-2xl border border-[#b6dcd1] bg-[#eef7f4] p-5" aria-label="Qat'iy mualliflik huquqi va yuridik himoya">
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} className="mt-0.5 shrink-0 text-[#0e6f67]" />
              <div>
                <h3 className="text-base font-bold text-[#0e6f67]">Qat’iy Mualliflik Huquqi va Intellektual Mulk Himoyasi (Copyright & Legal Enforcement)</h3>
                <p className="mt-2 text-sm leading-6 text-[#245b53]">
                  © 2026 <strong>Mengliyev Bahrom Husanovich</strong> — BioLab Interactive Guide muallifi va loyiha egasi. Platformaning dasturiy kodi, original interfeys arxitekturasi, 16 bosqichli SOP o‘quv oqimi hamda original dizayn tarkibidan foydalanish huquqi muallifda saqlanadi. Ruxsatsiz ko‘chirish, tarqatish yoki tijoriy maqsadlarda qayta ishlatish faqat huquq egasining yozma ruxsati bilan amalga oshirilishi mumkin.
                </p>
                <div className="mt-3 rounded-xl border border-[#a2d3c2] bg-white/80 p-3.5 text-xs leading-5 text-[#1b4b45]">
                  <strong>Huquqiy ogohlantirish:</strong> Qurilma rasmlari va xarakteristikalari o‘quv hamda tadqiqot maqsadida taqdim etiladi. Har bir uskuna bo‘yicha manufacturer, model va belgi huquqlari tegishli egalarida saqlanadi. Huquqbuzarlik holatlariga nisbatan amaldagi tartibda choralar ko‘rilishi mumkin.
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <div className="rounded-xl border border-[#b9d9cf] bg-white/80 p-3"><div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d7774]">Muallif va Egasi</div><div className="mt-1 text-sm font-bold text-[#173d42]">Mengliyev Bahrom Husanovich</div></div>
              <div className="rounded-xl border border-[#b9d9cf] bg-white/80 p-3"><div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d7774]">Yuridik himoya</div><div className="mt-1 text-sm font-bold text-[#173d42]">Qat’iy (Strict Enforcement)</div></div>
              <div className="rounded-xl border border-[#b9d9cf] bg-white/80 p-3"><div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d7774]">Repozitoriy</div><div className="mt-1 text-sm font-bold text-[#173d42]">uzme/biolab-interactive-guide</div></div>
            </div>
          </section>

          <section className="mt-4 rounded-2xl border border-[#cfe4db] bg-white p-5" data-settings-licensing>
            <div className="flex items-start gap-3"><FileText size={19} className="mt-0.5 shrink-0 text-[#0d7774]" /><div><h3 className="font-bold text-[#173d42]">Litsenziya va rasm manbasi shaffofligi</h3><p className="mt-2 text-sm leading-6 text-[#68857f]">Ilova kodi, interfeys va o‘quv oqimi BioLab Interactive Guide loyihasiga tegishli. Qurilma rasmlari katalogda manba turi bilan belgilanadi: ishlab chiqaruvchining rasmiy tasviri bo‘lsa <strong>official</strong>, o‘quviy AI-representative tasvir bo‘lsa shu holat alohida ko‘rsatiladi.</p></div></div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-[#d8e7e3] bg-[#f7fbfa] p-3"><div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d7774]">Kod va interfeys</div><div className="mt-1 text-sm font-bold text-[#173d42]">Loyiha litsenziyasi</div></div><div className="rounded-xl border border-[#d8e7e3] bg-[#f7fbfa] p-3"><div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d7774]">Rasm manbasi</div><div className="mt-1 text-sm font-bold text-[#173d42]">Har bir dosyeda ko‘rsatiladi</div></div><div className="rounded-xl border border-[#d8e7e3] bg-[#f7fbfa] p-3"><div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d7774]">Copyright</div><div className="mt-1 text-sm font-bold text-[#173d42]">© 2026 Mengliyev Bahrom Husanovich</div></div></div>
          </section>

          <section className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d8e7e3] bg-white p-5"><div className="flex items-center gap-2 text-[#0d7774]"><BookOpen size={17} /><h3 className="font-bold text-[#173d42]">O‘quv cheklovi</h3></div><p className="mt-2 text-xs leading-5 text-[#68857f]">SOP materiallari ta’limiy yo‘riqnoma sifatida beriladi. Muayyan modelda ishlashdan oldin ishlab chiqaruvchining rasmiy manuali va laboratoriya xavfsizlik protokolini tekshiring.</p><a href="https://github.com/uzme/biolab-interactive-guide" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0d7774] hover:underline">Loyiha manbasi <ExternalLink size={13} /></a></div>
            <div className="rounded-2xl border border-[#d8e7e3] bg-white p-5"><div className="flex items-center gap-2 text-[#0d7774]"><FileText size={17} /><h3 className="font-bold text-[#173d42]">Versiya</h3></div><p className="mt-2 text-xs leading-5 text-[#68857f]">BioLab Interactive Guide — zamonaviy katalog, SOP spine, PWA offline ishlashi va brauzer xatcho‘plari bilan.</p><div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#cfe4db] bg-[#edf7f4] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d7774]">Production ready</div></div>
          </section>
        </div>
      </div>
    </div>,
    document.body,
  );
}
