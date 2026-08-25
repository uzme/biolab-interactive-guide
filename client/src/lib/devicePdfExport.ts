import { PDFDocument, rgb, StandardFonts, type PDFFont, type PDFPage } from "pdf-lib";
import type { Equipment } from "@/lib/equipmentData";
import { loadLearningContent, loadPurchaseContent, resolveDeviceContent, type LearningContent, type PurchaseContent } from "@/lib/learningData";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 44;
const BODY_WIDTH = PAGE_WIDTH - MARGIN * 2;
const DATE_FORMATTER = new Intl.DateTimeFormat("uz-UZ", { day: "2-digit", month: "long", year: "numeric" });

export type DevicePdfShareResult = "shared" | "downloaded" | "cancelled";

type DossierSection = { number: number; title: string; content: string };

function toPdfText(value: string) {
  return value
    .replace(/[ʻʼ‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–]/g, "-")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, " ");
}

function wrapText(value: string, font: PDFFont, size: number, maxWidth: number) {
  const words = toPdfText(value).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";

  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (!line || font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
      return;
    }
    lines.push(line);
    line = word;
  });

  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

function filenameToken(exportedAt: Date) {
  return exportedAt.toISOString().slice(0, 10);
}

export function getDevicePdfFilename(device: Equipment, exportedAt = new Date()) {
  return `BioLab_${device.id}_oquv_dosyesi_${filenameToken(exportedAt)}.pdf`;
}

function getSections(learning: LearningContent | undefined, device: Equipment): DossierSection[] {
  if (!learning) {
    return [{ number: 1, title: "Qurilma tavsifi", content: device.description || device.purpose || "O‘quv ma’lumoti vaqtincha yuklanmadi." }];
  }

  return [
    { number: 1, title: "Qurilmaning o‘zbekcha nomi", content: learning.title },
    { number: 2, title: "Original nomi, manufacturer va model", content: `Original nomi: ${learning.originalName}\nManufacturer: ${learning.manufacturer}\nModel: ${learning.model}` },
    { number: 3, title: "Qurilma nima?", content: learning.whatIs },
    { number: 4, title: "Qurilma nima qiladi?", content: learning.whatItDoes },
    { number: 5, title: "Ishlash prinsipi", content: learning.principle },
    { number: 6, title: "Nimalarni o‘rganish mumkin?", content: learning.learningOutcomes },
    { number: 7, title: "Qurilmaning asosiy qismlari", content: learning.mainParts },
    { number: 8, title: "Namuna tayyorlash", content: learning.samplePreparation },
    { number: 9, title: "Qanday ishlatiladi - bosqichma-bosqich", content: learning.workflow },
    { number: 10, title: "Natijani o‘qish va talqin qilish", content: learning.resultInterpretation },
    { number: 11, title: "Eng ko‘p uchraydigan xatolar", content: learning.commonMistakes },
    { number: 12, title: "Xavfsizlik", content: learning.safety },
    { number: 13, title: "Tozalash va kundalik xizmat", content: learning.maintenance },
    { number: 14, title: "Kalibratsiya va troubleshooting", content: learning.calibrationTroubleshooting },
    { number: 15, title: "O‘rganish uchun amaliy mashqlar", content: learning.practice },
    { number: 16, title: "Ishonchli o‘quv manbalari", content: learning.sources.map((source) => `${source.label}: ${source.note}${source.url ? ` (${source.url})` : ""}`).join("\n\n") || "Manba ma’lumoti ko‘rsatilmagan." },
  ];
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function drawHeader(page: PDFPage, bold: PDFFont, regular: PDFFont, device: Equipment, continuation: boolean) {
  page.drawRectangle({ x: 0, y: PAGE_HEIGHT - 92, width: PAGE_WIDTH, height: 92, color: rgb(0.025, 0.16, 0.16) });
  page.drawText("BIO.LAB / INDIVIDUAL O'QUV DOSYESI", { x: MARGIN, y: PAGE_HEIGHT - 42, size: 8.5, font: bold, color: rgb(0.56, 0.92, 0.83) });
  page.drawText(toPdfText(`${device.id}  |  ${continuation ? "DAVOMI" : "16 BO'LIMLI SOP"}`), { x: MARGIN, y: PAGE_HEIGHT - 63, size: 8.2, font: regular, color: rgb(0.8, 0.92, 0.87) });
}

export async function buildDevicePdf(device: Equipment, learning: LearningContent | undefined, purchase: PurchaseContent | undefined, exportedAt = new Date()) {
  const pdf = await PDFDocument.create();
  pdf.setTitle(`BioLab — ${device.name}`);
  pdf.setAuthor("BioLab Interactive Guide");
  pdf.setSubject(`${device.id} uchun 16 bo‘limli o‘quv dosyesi`);
  pdf.setCreationDate(exportedAt);

  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const pages: PDFPage[] = [];
  let page!: PDFPage;
  let cursorY = 0;

  const createPage = (continuation = false) => {
    page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pages.push(page);
    drawHeader(page, bold, regular, device, continuation);
    cursorY = continuation ? PAGE_HEIGHT - 118 : PAGE_HEIGHT - 315;
  };

  createPage();
  page.drawRectangle({ x: MARGIN, y: PAGE_HEIGHT - 292, width: BODY_WIDTH, height: 166, color: rgb(0.94, 0.98, 0.97), borderColor: rgb(0.71, 0.86, 0.81), borderWidth: 0.8 });
  page.drawText(toPdfText(learning?.title || device.name), { x: MARGIN + 18, y: PAGE_HEIGHT - 161, size: 20, font: bold, color: rgb(0.04, 0.27, 0.27), maxWidth: BODY_WIDTH - 36, lineHeight: 24 });
  const profileLines = [
    `${device.id}  |  ${device.category}`,
    `Model: ${learning?.model || device.model}`,
    `Manufacturer: ${learning?.manufacturer || device.brands || "Aniqlanmagan"}`,
    `Eksport sanasi: ${DATE_FORMATTER.format(exportedAt)}`,
  ];
  profileLines.forEach((line, index) => page.drawText(toPdfText(line), { x: MARGIN + 18, y: PAGE_HEIGHT - 222 - index * 15, size: 9, font: index === 0 ? bold : regular, color: index === 0 ? rgb(0.04, 0.47, 0.43) : rgb(0.24, 0.42, 0.39) }));

  const ensureSpace = (height: number) => {
    if (cursorY - height < MARGIN + 42) createPage(true);
  };

  const drawSection = (section: DossierSection) => {
    const title = `${String(section.number).padStart(2, "0")}. ${section.title}`;
    const titleLines = wrapText(title, bold, 11.5, BODY_WIDTH - 28);
    const bodyLines = section.content.split(/\n{2,}|\n/).flatMap((paragraph) => wrapText(paragraph, regular, 9.1, BODY_WIDTH - 28));
    ensureSpace(24 + titleLines.length * 14 + Math.min(bodyLines.length, 5) * 12 + 20);

    page.drawRectangle({ x: MARGIN, y: cursorY - 5, width: 4, height: 18, color: rgb(0.05, 0.57, 0.51) });
    let textY = cursorY;
    titleLines.forEach((line) => {
      page.drawText(line, { x: MARGIN + 14, y: textY, size: 11.5, font: bold, color: rgb(0.04, 0.26, 0.26) });
      textY -= 14;
    });
    cursorY = textY - 4;
    bodyLines.forEach((line) => {
      if (cursorY < MARGIN + 46) {
        createPage(true);
      }
      page.drawText(line, { x: MARGIN + 14, y: cursorY, size: 9.1, font: regular, color: rgb(0.22, 0.36, 0.34) });
      cursorY -= 12;
    });
    cursorY -= 16;
    if (cursorY > MARGIN + 42) page.drawLine({ start: { x: MARGIN + 14, y: cursorY + 6 }, end: { x: PAGE_WIDTH - MARGIN, y: cursorY + 6 }, thickness: 0.45, color: rgb(0.82, 0.9, 0.87) });
  };

  getSections(learning, device).forEach(drawSection);
  if (purchase) {
    drawSection({ number: 17, title: "Xarid va foydalanish konteksti", content: `Narx benchmarki: ${purchase.price}\n${purchase.priceEvidence}\n\nXarid va import: ${purchase.whereToBuy}\n${purchase.availabilityUz}\n\nServis va TCO: ${purchase.service}\n${purchase.tco}` });
  }

  pages.forEach((pdfPage, index) => {
    pdfPage.drawLine({ start: { x: MARGIN, y: 31 }, end: { x: PAGE_WIDTH - MARGIN, y: 31 }, thickness: 0.6, color: rgb(0.72, 0.84, 0.8) });
    pdfPage.drawText("© 2026 Mengliyev Bahrom Husanovich  |  BioLab Interactive Guide", { x: MARGIN, y: 18, size: 7.4, font: regular, color: rgb(0.31, 0.47, 0.43) });
    pdfPage.drawText(`${index + 1} / ${pages.length}`, { x: PAGE_WIDTH - MARGIN - 24, y: 18, size: 7.4, font: bold, color: rgb(0.05, 0.42, 0.39) });
  });

  return new Blob([await pdf.save()], { type: "application/pdf" });
}

export async function shareDevicePdf(device: Equipment, exportedAt = new Date()): Promise<DevicePdfShareResult> {
  const { learning, purchase } = await resolveDeviceContent(loadLearningContent(device.number), loadPurchaseContent(device.number));
  const filename = getDevicePdfFilename(device, exportedAt);
  const blob = await buildDevicePdf(device, learning, purchase, exportedAt);

  if (typeof navigator !== "undefined" && typeof navigator.share === "function" && typeof File !== "undefined") {
    const file = new File([blob], filename, { type: "application/pdf" });
    const shareData: ShareData = { files: [file], title: `BioLab — ${device.name}`, text: `${device.id} uchun BioLab o‘quv dosyesi` };
    const supportsFiles = typeof navigator.canShare !== "function" || navigator.canShare(shareData);
    if (supportsFiles) {
      try {
        await navigator.share(shareData);
        return "shared";
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return "cancelled";
      }
    }
  }

  triggerDownload(blob, filename);
  return "downloaded";
}
