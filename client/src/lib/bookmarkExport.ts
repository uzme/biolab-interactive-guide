import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import type { Equipment } from "@/lib/equipmentData";

const PDF_PAGE_WIDTH = 595.28;
const PDF_PAGE_HEIGHT = 841.89;
const PDF_MARGIN = 44;
const EXPORT_DATE_FORMATTER = new Intl.DateTimeFormat("uz-UZ", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function exportDateToken(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function getBookmarksPdfFilename(exportedAt = new Date()) {
  return `BioLab_saralanganlar_${exportDateToken(exportedAt)}.pdf`;
}

function quoteCsv(value: string | number) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function toPdfText(value: string) {
  return value
    .replace(/[ʻʼ‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–]/g, "-")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, " ");
}

function wrapPdfText(text: string, font: PDFFont, size: number, maxWidth: number) {
  const words = toPdfText(text).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth || !line) {
      line = candidate;
      continue;
    }
    lines.push(line);
    line = word;
  }

  if (line) lines.push(line);
  return lines.length ? lines : [""];
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

function drawPdfHeader(page: PDFPage, bold: PDFFont, regular: PDFFont, deviceCount: number, exportedAt: Date) {
  page.drawRectangle({ x: 0, y: PDF_PAGE_HEIGHT - 116, width: PDF_PAGE_WIDTH, height: 116, color: rgb(0.02, 0.16, 0.16) });
  page.drawText("BIO.LAB / SARALANGANLAR", { x: PDF_MARGIN, y: PDF_PAGE_HEIGHT - 48, size: 9, font: bold, color: rgb(0.57, 0.91, 0.83) });
  page.drawText("Saralangan qurilmalar ro'yxati", { x: PDF_MARGIN, y: PDF_PAGE_HEIGHT - 78, size: 19, font: bold, color: rgb(1, 1, 1) });
  const subtitle = `${deviceCount} ta qurilma  |  ${EXPORT_DATE_FORMATTER.format(exportedAt)}`;
  page.drawText(toPdfText(subtitle), { x: PDF_MARGIN, y: PDF_PAGE_HEIGHT - 97, size: 8.5, font: regular, color: rgb(0.77, 0.9, 0.85) });
}

export function buildBookmarksCsv(devices: Equipment[], exportedAt = new Date()) {
  const rows = [
    ["BioLab Interactive Guide — Saralangan qurilmalar"],
    [`Eksport sanasi: ${EXPORT_DATE_FORMATTER.format(exportedAt)}`],
    [],
    ["Tartib", "Kod", "Qurilma nomi", "Kategoriya", "Model", "Ishlab chiqaruvchi"],
    ...devices.map((device, index) => [
      index + 1,
      device.id,
      device.name,
      device.category,
      device.model,
      device.brands,
    ]),
  ];

  return `\uFEFF${rows.map((row) => row.map(quoteCsv).join(",")).join("\r\n")}\r\n`;
}

export async function buildBookmarksPdf(devices: Equipment[], exportedAt = new Date()) {
  const pdf = await PDFDocument.create();
  pdf.setTitle("BioLab — Saralangan qurilmalar");
  pdf.setAuthor("BioLab Interactive Guide");
  pdf.setSubject("Foydalanuvchi saralangan qurilmalari");
  pdf.setCreationDate(exportedAt);

  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const pages: PDFPage[] = [];
  const createPage = () => {
    const page = pdf.addPage([PDF_PAGE_WIDTH, PDF_PAGE_HEIGHT]);
    drawPdfHeader(page, bold, regular, devices.length, exportedAt);
    pages.push(page);
    return { page, cursorY: PDF_PAGE_HEIGHT - 144 };
  };

  let { page, cursorY } = createPage();
  const contentWidth = PDF_PAGE_WIDTH - PDF_MARGIN * 2;

  devices.forEach((device, index) => {
    const nameLines = wrapPdfText(`${index + 1}. ${device.id} — ${device.name}`, bold, 11, contentWidth - 28);
    const modelLines = wrapPdfText(`${device.category}  |  ${device.model}`, regular, 8.5, contentWidth - 28);
    const entryHeight = 18 + nameLines.length * 14 + modelLines.length * 11 + 14;

    if (cursorY - entryHeight < PDF_MARGIN + 25) {
      ({ page, cursorY } = createPage());
    }

    page.drawRectangle({
      x: PDF_MARGIN,
      y: cursorY - entryHeight,
      width: contentWidth,
      height: entryHeight,
      color: index % 2 === 0 ? rgb(0.95, 0.98, 0.97) : rgb(1, 1, 1),
      borderColor: rgb(0.78, 0.88, 0.84),
      borderWidth: 0.6,
    });

    let textY = cursorY - 18;
    nameLines.forEach((line) => {
      page.drawText(line, { x: PDF_MARGIN + 14, y: textY, size: 11, font: bold, color: rgb(0.05, 0.24, 0.25) });
      textY -= 14;
    });
    modelLines.forEach((line) => {
      page.drawText(line, { x: PDF_MARGIN + 14, y: textY, size: 8.5, font: regular, color: rgb(0.27, 0.44, 0.42) });
      textY -= 11;
    });
    cursorY -= entryHeight + 9;
  });

  pages.forEach((pdfPage, index) => {
    pdfPage.drawLine({ start: { x: PDF_MARGIN, y: 31 }, end: { x: PDF_PAGE_WIDTH - PDF_MARGIN, y: 31 }, thickness: 0.6, color: rgb(0.79, 0.87, 0.84) });
    pdfPage.drawText(`BioLab Interactive Guide  |  ${index + 1} / ${pages.length}`, { x: PDF_MARGIN, y: 18, size: 8, font: regular, color: rgb(0.33, 0.48, 0.45) });
  });

  return new Blob([await pdf.save()], { type: "application/pdf" });
}

export function downloadBookmarksCsv(devices: Equipment[]) {
  triggerDownload(
    new Blob([buildBookmarksCsv(devices)], { type: "text/csv;charset=utf-8" }),
    `BioLab_saralanganlar_${exportDateToken()}.csv`,
  );
}

export async function downloadBookmarksPdf(devices: Equipment[]) {
  triggerDownload(await buildBookmarksPdf(devices), getBookmarksPdfFilename());
}

export type PdfShareResult = "shared" | "downloaded" | "cancelled";

export async function shareBookmarksPdf(devices: Equipment[], exportedAt = new Date()): Promise<PdfShareResult> {
  const filename = getBookmarksPdfFilename(exportedAt);
  const pdfBlob = await buildBookmarksPdf(devices, exportedAt);

  if (typeof navigator !== "undefined" && typeof navigator.share === "function" && typeof File !== "undefined") {
    const file = new File([pdfBlob], filename, { type: "application/pdf" });
    const shareData: ShareData = {
      files: [file],
      title: "BioLab — Saralangan qurilmalar",
      text: `${devices.length} ta saralangan BioLab qurilmasi ro‘yxati`,
    };
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

  triggerDownload(pdfBlob, filename);
  return "downloaded";
}
