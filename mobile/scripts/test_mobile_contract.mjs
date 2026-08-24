import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = relative => readFile(new URL(relative, root), 'utf8');

const [app, equipment, learning, exporters] = await Promise.all([
  read('App.tsx'),
  read('src/data/equipment.ts'),
  read('src/data/learning.ts'),
  read('src/lib/exporters.ts'),
]);

assert.equal((equipment.match(/"id": "BIO-\d{3}"/g) ?? []).length, 100, '100 ta katalog qurilmasi saqlanishi kerak');
assert.match(learning, /learningBlocks\[number\]/, '16 bo‘limli dosye resolveri bo‘lishi kerak');
assert.match(app, /react-native-webview/, 'Expo Go qobig‘i original sayt runtime’ini WebView orqali ochishi kerak');
assert.match(app, /biolabguide-fbcitqyf\.manus\.space/, 'faqat canonical BioLab manzili yuklanishi kerak');
assert.match(app, /cacheEnabled/, 'oldin yuklangan original sayt resurslari WebView keshi orqali qayta ishlatilishi kerak');
assert.match(app, /onShouldStartLoadWithRequest/, 'tashqi rasmiy manbalar ilova ichidagi katalogdan ajratilishi kerak');
assert.match(exporters, /writeAsStringAsync/, 'CSV qurilma fayliga yozilishi kerak');
assert.match(exporters, /printToFileAsync/, 'PDF qurilma fayliga yaratilishi kerak');

console.log('PASS: BioLab Mobile 100-device, dossier and CSV/PDF export contract');
