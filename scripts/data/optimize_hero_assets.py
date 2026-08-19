"""Convert generated BioLab hero JPGs into compact 16:9 WebP assets.

Source assets remain in /home/ubuntu/webdev-static-assets outside the deploy tree.
Run: python3 scripts/data/optimize_hero_assets.py
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps


ASSET_DIR = Path("/home/ubuntu/webdev-static-assets")
MAX_SIZE = (1440, 810)


def optimize(source: Path) -> tuple[str, int, int]:
    target = source.with_suffix(".webp")
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        image.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)
    return source.name, source.stat().st_size, target.stat().st_size


def main() -> None:
    sources = sorted(ASSET_DIR.glob("biolab-equipment-*-hero.jpg"))
    if not sources:
        raise SystemExit("No generated BioLab hero JPG assets found.")

    total_before = total_after = 0
    for source in sources:
        name, before, after = optimize(source)
        total_before += before
        total_after += after
        print(f"{name}: {before / 1024:.0f} KiB -> {after / 1024:.0f} KiB")

    reduction = 100 * (1 - (total_after / total_before)) if total_before else 0
    print(f"Total: {total_before / 1024 / 1024:.2f} MiB -> {total_after / 1024 / 1024:.2f} MiB ({reduction:.1f}% smaller)")


if __name__ == "__main__":
    main()
