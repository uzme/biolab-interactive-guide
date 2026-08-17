import { CheckCircle2, Download, RefreshCw, Trash2, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { equipmentImages } from "@/lib/equipmentImages";
import { useOfflinePack } from "@/hooks/useOfflinePack";
import { toast } from "sonner";

const OFFLINE_ASSETS = [
  "/manus-storage/biolab-logo_c6e5d846.png",
  "/manus-storage/biolab-hero_a08d430e.jpg",
  ...Object.values(equipmentImages).map((image) => image.url),
];

export default function OfflineManager() {
  const { isOnline, isSupported, status, progress, downloadPack, clearPack } = useOfflinePack();
  const isReady = status === "tayyor";
  const isDownloading = status === "yuklanmoqda";
  const percent = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

  const handleDownload = async () => {
    if (!isOnline) {
      toast.error("Offline paketni yuklash uchun internet aloqasi kerak.");
      return;
    }
    const sent = await downloadPack(OFFLINE_ASSETS);
    if (!sent) toast.error("Offline paketni boshlash imkoni bo‘lmadi. HTTPS ulanishini tekshiring.");
  };

  const handleClear = async () => {
    await clearPack();
    toast.success("Offline paket keshdan tozalandi.");
  };

  if (!isSupported) {
    return (
      <span className="hidden items-center gap-2 rounded-full border border-[#ead8b7] bg-[#fffaf0] px-3 py-1.5 text-xs font-semibold text-[#8b6b3f] sm:inline-flex" title="Offline rejim HTTPS ulanishini talab qiladi">
        <WifiOff size={14} /> Offline: HTTPS kerak
      </span>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <span
        data-offline-status={isOnline ? "online" : "offline"}
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[11px] font-semibold ${isOnline ? "border-[#cbded4] bg-white text-[#597b75]" : "border-[#f1c9c2] bg-[#fff6f4] text-[#a24f42]"}`}
        title={isOnline ? "Internet aloqasi mavjud" : "Internet aloqasi yo‘q; saqlangan offline ma’lumotlar mavjud bo‘lsa, ular ishlaydi"}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${isOnline ? "bg-[#16a085]" : "bg-[#d86657]"}`} />
        <span className="hidden sm:inline">{isOnline ? "Onlayn" : "Offline"}</span>
      </span>
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-full border px-3 text-xs font-semibold ${isReady ? "border-[#b8dfd1] bg-[#f1fbf7] text-[#0d7773]" : "border-[#cbded4] bg-white text-[#597b75]"}`}
        onClick={handleDownload}
        loading={isDownloading}
        loadingLabel={`Offline ${percent}%`}
        title={isReady ? "Offline paketni yangilash" : "Offline o‘quv paketini yuklash"}
        aria-label={isDownloading ? `Offline paket yuklanmoqda: ${percent}%` : isReady ? "Offline paketni yangilash" : "Offline paketni yuklash"}
      >
        {!isDownloading && (isReady ? <CheckCircle2 size={14} /> : <Download size={14} />)}
        <span className="hidden sm:inline">{isReady ? "Offline tayyor" : "Offline paket"}</span>
      </Button>
      {isReady && (
        <Button variant="ghost" size="icon" className="h-8 w-8 text-[#78938d]" onClick={handleClear} title="Offline paketni tozalash" aria-label="Offline paketni tozalash">
          <Trash2 size={14} />
        </Button>
      )}
      {progress.failed > 0 && <span className="sr-only">{progress.failed} ta fayl yuklanmadi</span>}
    </div>
  );
}
