from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math
import sys

source_dir = Path(sys.argv[1])
output_dir = Path(sys.argv[2])
output_dir.mkdir(parents=True, exist_ok=True)

items = sorted(source_dir.glob("*.webp"))
if not items:
    raise SystemExit(f"WebP topilmadi: {source_dir}")

columns = 4
rows = 5
thumb_width, thumb_height = 384, 216
label_height = 32
page_size = columns * rows
font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 18)

for page_index, start in enumerate(range(0, len(items), page_size), start=1):
    page_items = items[start : start + page_size]
    sheet = Image.new("RGB", (columns * thumb_width, rows * (thumb_height + label_height)), "#0b1720")
    draw = ImageDraw.Draw(sheet)
    for item_index, image_path in enumerate(page_items):
        col = item_index % columns
        row = item_index // columns
        x = col * thumb_width
        y = row * (thumb_height + label_height)
        with Image.open(image_path) as image:
            image = image.convert("RGB")
            image.thumbnail((thumb_width, thumb_height), Image.Resampling.LANCZOS)
            canvas = Image.new("RGB", (thumb_width, thumb_height), "#10262d")
            canvas.paste(image, ((thumb_width - image.width) // 2, (thumb_height - image.height) // 2))
            sheet.paste(canvas, (x, y))
        draw.rectangle((x, y + thumb_height, x + thumb_width, y + thumb_height + label_height), fill="#123e48")
        draw.text((x + 10, y + thumb_height + 6), image_path.stem, font=font, fill="#e8fbfb")
    sheet.save(output_dir / f"hero-audit-sheet-{page_index:02d}.png", "PNG", optimize=True)

print(f"{len(items)} ta asset uchun {math.ceil(len(items) / page_size)} ta contact sheet: {output_dir}")
