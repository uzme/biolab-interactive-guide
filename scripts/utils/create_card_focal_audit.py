"""Render 100 equipment images as the catalogue card's center-cropped image window."""
from __future__ import annotations

import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path("/home/ubuntu/biolab-guide")
ASSET_DIR = Path("/home/ubuntu/webdev-static-assets")
OUT_DIR = Path("/home/ubuntu/biolab-image-audit/card-focal-audit")
REGISTRY = ROOT / "client/src/lib/equipmentImages.ts"

COLS = 4
CELL_W, CELL_H = 330, 190
LABEL_H = 42
GAP = 18
PAD = 24
ROWS_PER_SHEET = 5


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    filename = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
    return ImageFont.truetype(filename, size)


def registry_images() -> list[tuple[str, str]]:
    text = REGISTRY.read_text(encoding="utf-8")
    pairs = re.findall(r'"(BIO-\d{3})":\s*\{\s*url:\s*"([^"]+)"', text, re.S)
    return sorted(pairs, key=lambda item: item[0])


def local_asset(url: str) -> Path | None:
    remote_name = Path(url).name
    local_base = re.sub(r"_[0-9a-f]{8}(?=\.[a-zA-Z0-9]+$)", "", remote_name)
    direct = ASSET_DIR / local_base
    if direct.exists():
        return direct
    candidates = sorted(ASSET_DIR.glob(f"{Path(local_base).stem}.*"))
    return candidates[0] if candidates else None


def cover_crop(image: Image.Image) -> Image.Image:
    image = ImageOps.exif_transpose(image).convert("RGB")
    scale = max(CELL_W / image.width, CELL_H / image.height)
    resized = image.resize((round(image.width * scale), round(image.height * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - CELL_W) // 2
    top = (resized.height - CELL_H) // 2
    return resized.crop((left, top, left + CELL_W, top + CELL_H))


def contain_fit(image: Image.Image) -> Image.Image:
    image = ImageOps.exif_transpose(image).convert("RGB")
    scale = min(CELL_W / image.width, CELL_H / image.height)
    resized = image.resize((round(image.width * scale), round(image.height * scale)), Image.Resampling.LANCZOS)
    panel = Image.new("RGB", (CELL_W, CELL_H), "#eaf5f2")
    panel.paste(resized, ((CELL_W - resized.width) // 2, (CELL_H - resized.height) // 2))
    return panel


def render_sheet(records: list[tuple[str, str]], part: int) -> list[str]:
    rows = (len(records) + COLS - 1) // COLS
    sheet_w = PAD * 2 + COLS * CELL_W + (COLS - 1) * GAP
    sheet_h = PAD * 2 + rows * (CELL_H + LABEL_H) + (rows - 1) * GAP
    canvas = Image.new("RGB", (sheet_w, sheet_h), "#edf7f4")
    draw = ImageDraw.Draw(canvas)
    missing: list[str] = []
    for index, (bio_id, url) in enumerate(records):
        col, row = index % COLS, index // COLS
        x = PAD + col * (CELL_W + GAP)
        y = PAD + row * (CELL_H + LABEL_H + GAP)
        asset = local_asset(url)
        if asset:
            try:
                crop = cover_crop(Image.open(asset))
                canvas.paste(crop, (x, y))
            except Exception:
                missing.append(f"{bio_id}: unreadable {asset.name}")
                draw.rectangle((x, y, x + CELL_W, y + CELL_H), fill="#f7d7d7")
        else:
            missing.append(f"{bio_id}: no local asset for {Path(url).name}")
            draw.rectangle((x, y, x + CELL_W, y + CELL_H), fill="#f7d7d7")
        draw.rectangle((x, y, x + CELL_W, y + CELL_H), outline="#91bcb1", width=2)
        draw.rectangle((x, y + CELL_H, x + CELL_W, y + CELL_H + LABEL_H), fill="#ffffff")
        draw.text((x + 10, y + CELL_H + 10), bio_id, fill="#0b5358", font=font(17, True))
        status = "CENTER COVER" if asset else "MISSING"
        draw.text((x + 122, y + CELL_H + 12), status, fill="#50736d", font=font(12, True))
    out = OUT_DIR / f"catalogue-cover-audit-{part:02d}.png"
    canvas.save(out, quality=94)
    return missing


def render_contain_sheet(records: list[tuple[str, str]]) -> list[str]:
    rows = (len(records) + COLS - 1) // COLS
    sheet_w = PAD * 2 + COLS * CELL_W + (COLS - 1) * GAP
    sheet_h = PAD * 2 + rows * (CELL_H + LABEL_H) + (rows - 1) * GAP
    canvas = Image.new("RGB", (sheet_w, sheet_h), "#edf7f4")
    draw = ImageDraw.Draw(canvas)
    missing: list[str] = []
    for index, (bio_id, url) in enumerate(records):
        col, row = index % COLS, index // COLS
        x = PAD + col * (CELL_W + GAP)
        y = PAD + row * (CELL_H + LABEL_H + GAP)
        asset = local_asset(url)
        if asset:
            try:
                canvas.paste(contain_fit(Image.open(asset)), (x, y))
            except Exception:
                missing.append(f"{bio_id}: unreadable {asset.name}")
        else:
            missing.append(f"{bio_id}: no local asset for {Path(url).name}")
        draw.rectangle((x, y, x + CELL_W, y + CELL_H), outline="#91bcb1", width=2)
        draw.rectangle((x, y + CELL_H, x + CELL_W, y + CELL_H + LABEL_H), fill="#ffffff")
        draw.text((x + 10, y + CELL_H + 10), bio_id, fill="#0b5358", font=font(17, True))
        draw.text((x + 122, y + CELL_H + 12), "CONTAIN TEST", fill="#50736d", font=font(12, True))
    out = OUT_DIR / "catalogue-contain-audit-affected.png"
    canvas.save(out, quality=94)
    return missing


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    records = registry_images()
    report = ["# Catalogue card focal audit", "", "Each image below uses the same center `object-cover` rule as the card image window.", ""]
    missing: list[str] = []
    chunk_size = COLS * ROWS_PER_SHEET
    for part, offset in enumerate(range(0, len(records), chunk_size), start=1):
        chunk = records[offset : offset + chunk_size]
        missing.extend(render_sheet(chunk, part))
        report.append(f"- Sheet {part:02d}: {chunk[0][0]} — {chunk[-1][0]}")
    affected_ids = {
        "BIO-017", "BIO-018", "BIO-019", "BIO-021", "BIO-022", "BIO-023", "BIO-024", "BIO-026", "BIO-027", "BIO-028", "BIO-029", "BIO-034", "BIO-037", "BIO-038", "BIO-041", "BIO-042", "BIO-046", "BIO-050", "BIO-052", "BIO-053", "BIO-054", "BIO-057", "BIO-062", "BIO-063", "BIO-064", "BIO-065", "BIO-071", "BIO-073", "BIO-075", "BIO-080", "BIO-082", "BIO-083", "BIO-089", "BIO-092", "BIO-097", "BIO-098", "BIO-099", "BIO-100",
    }
    missing.extend(render_contain_sheet([record for record in records if record[0] in affected_ids]))
    report.append("- Contain test: all affected image records")
    report.extend(["", "## Missing or unreadable", *(missing or ["- None"])])
    (OUT_DIR / "audit-index.md").write_text("\n".join(report) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
