from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

source = Path("/home/ubuntu/biolab-image-audit/rendered-mobile-cards")
target = Path("/home/ubuntu/biolab-image-audit/rendered-mobile-sheets")
target.mkdir(parents=True, exist_ok=True)

cards = sorted(p for p in source.glob("BIO-*.png"))
font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 14)

cols, rows = 2, 5
tile_width, tile_height, label_height = 390, 208, 26
padding = 16
per_sheet = cols * rows

for page_number, start in enumerate(range(0, len(cards), per_sheet), 1):
    batch = cards[start:start + per_sheet]
    canvas = Image.new("RGB", (
        cols * tile_width + (cols + 1) * padding,
        rows * (tile_height + label_height) + (rows + 1) * padding,
    ), "#eef6f4")
    draw = ImageDraw.Draw(canvas)
    for i, path in enumerate(batch):
        x = padding + (i % cols) * (tile_width + padding)
        y = padding + (i // cols) * (tile_height + label_height + padding)
        image = Image.open(path).convert("RGB")
        image.thumbnail((tile_width, tile_height), Image.Resampling.LANCZOS)
        canvas.paste(image, (x, y))
        draw.text((x, y + tile_height + 4), path.stem, font=font, fill="#123f43")
    canvas.save(target / f"mobile-card-render-audit-{page_number:02}.png", quality=92)

print(f"Created {page_number} rendered mobile card audit sheets in {target}")
