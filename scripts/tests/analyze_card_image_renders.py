from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageStat

AUDIT_DIR = Path("/home/ubuntu/biolab-image-audit/rendered-mobile-cards")
OUTPUT = AUDIT_DIR.parent / "card-render-visual-audit.json"


def classify(path: Path) -> dict:
    image = Image.open(path).convert("RGB")
    width, height = image.size

    # Badge va bookmarkdan chetda qoladigan asosiy mahsulot tasviri maydoni.
    content = image.crop((int(width * 0.16), int(height * 0.18), int(width * 0.84), int(height * 0.86)))
    pixels = list(content.getdata())
    total = len(pixels)

    neutral_white = sum(
        red >= 220 and green >= 220 and blue >= 220 and max(red, green, blue) - min(red, green, blue) <= 34
        for red, green, blue in pixels
    )
    very_dark = sum(
        red <= 58 and green <= 72 and blue <= 72
        for red, green, blue in pixels
    )

    # Katta, bir xil oq patch letterboxing yoki oq manba fonining belgisi bo‘lishi mumkin.
    white_fraction = neutral_white / total
    dark_fraction = very_dark / total
    mean = ImageStat.Stat(content).mean

    if white_fraction >= 0.16:
        profile = "paper"
        issue = "white-source-background"
    elif dark_fraction >= 0.58:
        profile = "ink"
        issue = "dark-source-background"
    else:
        profile = "laboratory"
        issue = None

    return {
        "id": path.stem,
        "profile": profile,
        "issue": issue,
        "whiteFraction": round(white_fraction, 4),
        "darkFraction": round(dark_fraction, 4),
        "meanRGB": [round(value, 1) for value in mean],
    }


entries = [classify(path) for path in sorted(AUDIT_DIR.glob("BIO-*.png"))]
summary = {}
for entry in entries:
    summary[entry["profile"]] = summary.get(entry["profile"], 0) + 1

report = {"audited": len(entries), "summary": summary, "entries": entries}
OUTPUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
print(json.dumps({"audited": len(entries), "summary": summary, "output": str(OUTPUT)}, indent=2))
