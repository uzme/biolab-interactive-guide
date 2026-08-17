from pathlib import Path
import re
from PIL import Image, ImageDraw, ImageFont, ImageOps

ASSET_DIR = Path('/home/ubuntu/webdev-static-assets')
OUTPUT_DIR = Path('/home/ubuntu/biolab-image-audit')
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

TILE_W, TILE_H = 280, 230
IMAGE_H = 185
COLS, ROWS = 5, 4
FONT = ImageFont.load_default()


def equipment_id(path: Path) -> int | None:
    match = re.match(r'biolab-equipment-(\d{3})(?:-|\.)', path.name)
    return int(match.group(1)) if match else None


assets = sorted(
    (path for path in ASSET_DIR.iterdir() if path.is_file() and equipment_id(path) is not None),
    key=lambda path: equipment_id(path),
)

for batch_index in range(0, len(assets), COLS * ROWS):
    batch = assets[batch_index:batch_index + COLS * ROWS]
    sheet = Image.new('RGB', (COLS * TILE_W, ROWS * TILE_H), '#e7efef')
    draw = ImageDraw.Draw(sheet)

    for local_index, asset in enumerate(batch):
        col = local_index % COLS
        row = local_index // COLS
        x, y = col * TILE_W, row * TILE_H
        tile = Image.new('RGB', (TILE_W - 12, TILE_H - 12), 'white')
        tile_draw = ImageDraw.Draw(tile)
        tile_draw.rectangle((0, 0, tile.width - 1, tile.height - 1), outline='#9db4b4', width=2)

        with Image.open(asset) as source:
            product = ImageOps.exif_transpose(source).convert('RGB')
            contained = ImageOps.contain(product, (tile.width - 18, IMAGE_H - 12), method=Image.Resampling.LANCZOS)
            px = (tile.width - contained.width) // 2
            py = 8 + (IMAGE_H - contained.height) // 2
            tile.paste(contained, (px, py))

        label = f'BIO-{equipment_id(asset):03d}'
        filename = asset.stem.replace(f'biolab-equipment-{equipment_id(asset):03d}', '').strip('-')[:28]
        tile_draw.rectangle((0, IMAGE_H, tile.width, tile.height), fill='#f2f7f7')
        tile_draw.text((10, IMAGE_H + 10), label, fill='#085f5a', font=FONT)
        tile_draw.text((10, IMAGE_H + 28), filename, fill='#425a5a', font=FONT)
        sheet.paste(tile, (x + 6, y + 6))

    start_id = equipment_id(batch[0])
    end_id = equipment_id(batch[-1])
    sheet.save(OUTPUT_DIR / f'biolab-image-audit-{start_id:03d}-{end_id:03d}.png')

print(f'Created {len(list(OUTPUT_DIR.glob("biolab-image-audit-*.png")))} audit sheets for {len(assets)} equipment images.')
