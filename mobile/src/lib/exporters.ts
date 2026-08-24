import * as FileSystem from 'expo-file-system/legacy';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import type { Equipment } from '../data/equipment';

const escapeCsv = (value: string) => `"${value.replace(/"/g, '""')}"`;
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] ?? char));
const dateText = () => new Date().toLocaleDateString('uz-UZ');

export async function shareBookmarksCsv(items: Equipment[]): Promise<void> {
  const rows = [
    '\uFEFFBioLab Interactive Guide — Saralangan qurilmalar',
    `Eksport sanasi: ${dateText()}`,
    '',
    ['Tartib', 'Kod', 'Qurilma nomi', 'Kategoriya', 'Model', 'Ishlab chiqaruvchi'].map(escapeCsv).join(','),
    ...items.map(item => [item.number, item.id, item.name, item.category, item.model, item.brands].map(value => escapeCsv(String(value))).join(',')),
  ];
  const uri = `${FileSystem.cacheDirectory}biolab-saralanganlar.csv`;
  await FileSystem.writeAsStringAsync(uri, rows.join('\n'), { encoding: FileSystem.EncodingType.UTF8 });
  await Sharing.shareAsync(uri, { mimeType: 'text/csv', dialogTitle: 'BioLab saralanganlarini ulashish' });
}

export async function shareBookmarksPdf(items: Equipment[]): Promise<void> {
  const rows = items.map(item => `<tr><td>${item.number}</td><td>${escapeHtml(item.id)}</td><td><strong>${escapeHtml(item.name)}</strong><br/><small>${escapeHtml(item.model)}</small></td><td>${escapeHtml(item.category)}</td></tr>`).join('');
  const html = `<!doctype html><html><head><meta charset="utf-8"/><style>
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#0b1e1c;padding:28px}h1{font-size:23px;margin:0;color:#0b6b5e}p{color:#49645f;font-size:12px}table{width:100%;border-collapse:collapse;margin-top:20px;font-size:11px}th{background:#e9f8f2;color:#0b6b5e;text-align:left}td,th{padding:9px;border-bottom:1px solid #dcebe6;vertical-align:top}small{color:#5f726d}footer{margin-top:22px;color:#5f726d;font-size:10px}
  </style></head><body><h1>BioLab — saralangan qurilmalar</h1><p>Eksport sanasi: ${dateText()} · Jami: ${items.length} ta qurilma</p><table><thead><tr><th>#</th><th>Kod</th><th>Qurilma</th><th>Bo‘lim</th></tr></thead><tbody>${rows}</tbody></table><footer>BioLab Interactive Guide · Ushbu ro‘yxat faqat brauzer/mobil qurilmadagi saralanganlardan yaratilgan.</footer></body></html>`;
  const { uri } = await Print.printToFileAsync({ html });
  await Sharing.shareAsync(uri, { mimeType: 'application/pdf', dialogTitle: 'BioLab PDF ro‘yxatini ulashish' });
}
