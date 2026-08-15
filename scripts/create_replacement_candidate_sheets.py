from pathlib import Path
import hashlib
import re
from PIL import Image, ImageDraw, ImageFont, ImageOps

ASSET_DIR = Path('/home/ubuntu/webdev-static-assets')
SEARCH_DIR = Path('/home/ubuntu/upload/search_images')
OUTPUT_DIR = Path('/home/ubuntu/biolab-image-audit/replacement-candidates')
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

TARGET_IDS = [38, 43, 45, 52, 55, 58, 61, 64, 76, 79, 80, 81, 84, 92, 94, 95, 96]
TILE_W, TILE_H, COLS = 250, 205, 4
FONT = ImageFont.load_default()


def digest(path: Path) -> str:
    h = hashlib.sha256()
    with path.open('rb') as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def equipment_asset(equipment_id: int) -> Path | None:
    matches = sorted(ASSET_DIR.glob(f'biolab-equipment-{equipment_id:03d}-*'))
    return matches[0] if matches else None


search_files = sorted(
    [p for p in SEARCH_DIR.iterdir() if p.is_file()], key=lambda p: (p.stat().st_mtime, p.name)
)
search_hashes: dict[str, list[Path]] = {}
for path in search_files:
    try:
        search_hashes.setdefault(digest(path), []).append(path)
    except (OSError, ValueError):
        continue

report = []
for equipment_id in TARGET_IDS:
    asset = equipment_asset(equipment_id)
    if asset is None:
        report.append(f'BIO-{equipment_id:03d}: asset not found')
        continue
    candidates = search_hashes.get(digest(asset), [])
    if not candidates:
        report.append(f'BIO-{equipment_id:03d}: no exact image in search archive')
        continue

    source_match = candidates[0]
    index = search_files.index(source_match)
    neighbors = search_files[max(0, index - 8):min(len(search_files), index + 9)]
    rows = (len(neighbors) + COLS - 1) // COLS
    sheet = Image.new('RGB', (COLS * TILE_W, rows * TILE_H), '#e8f0f0')
    draw = ImageDraw.Draw(sheet)
    draw.text((8, 8), f'BIO-{equipment_id:03d} candidates — original: {source_match.name}', fill='#084f4a', font=FONT)

    for n, path in enumerate(neighbors):
        col, row = n % COLS, n // COLS
        x, y = col * TILE_W, row * TILE_H
        tile = Image.new('RGB', (TILE_W - 10, TILE_H - 10), 'white')
        td = ImageDraw.Draw(tile)
        td.rectangle((0, 0, tile.width - 1, tile.height - 1), outline='#a2baba', width=1)
        try:
            with Image.open(path) as img:
                product = ImageOps.exif_transpose(img).convert('RGB')
                product = ImageOps.contain(product, (tile.width - 12, 158), Image.Resampling.LANCZOS)
                tile.paste(product, ((tile.width - product.width) // 2, 14 + (158 - product.height) // 2))
        except (OSError, ValueError):
            continue
        tag = 'CURRENT' if path == source_match else 'candidate'
        td.text((8, 178), f'{tag}: {path.name[:23]}', fill='#145d58' if tag == 'CURRENT' else '#4f6262', font=FONT)
        sheet.paste(tile, (x + 5, y + 5))

    sheet.save(OUTPUT_DIR / f'candidates-BIO-{equipment_id:03d}.png')
    report.append(f'BIO-{equipment_id:03d}: {source_match.name}')

(OUTPUT_DIR / 'mapping.txt').write_text('\n'.join(report) + '\n', encoding='utf-8')
print('\n'.join(report))
