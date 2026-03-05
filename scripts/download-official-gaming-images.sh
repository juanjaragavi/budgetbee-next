#!/bin/bash
# Download official gaming images from IGDB press kits and convert to webp

BASE="/Users/macbookpro/GitHub/budgetbee-next/public/images/gaming"
CWEBP="/opt/homebrew/bin/cwebp"

mkdir -p "$BASE/roblox" "$BASE/minecraft" "$BASE/fortnite"

echo "=== Downloading Roblox images ==="
# Key art for hero
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/ar3zq6.jpg" -o "$BASE/roblox/roblox-keyart-hero.jpg"
# Screenshots for gameplay
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/scyxw8.jpg" -o "$BASE/roblox/roblox-gameplay-01.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/scyxwa.jpg" -o "$BASE/roblox/roblox-gameplay-02.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/scyxwb.jpg" -o "$BASE/roblox/roblox-gameplay-03.jpg"
# Additional key art
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/ar4fu7.jpg" -o "$BASE/roblox/roblox-keyart-promo.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/ar451u.jpg" -o "$BASE/roblox/roblox-keyart-alt.jpg"

echo "=== Downloading Minecraft images ==="
# Artwork for hero
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/ar30cw.jpg" -o "$BASE/minecraft/minecraft-artwork-hero.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/ar30cv.jpg" -o "$BASE/minecraft/minecraft-artwork-alt.jpg"
# Screenshots
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/sc8d2z.jpg" -o "$BASE/minecraft/minecraft-gameplay-01.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/sc8d31.jpg" -o "$BASE/minecraft/minecraft-gameplay-02.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/sc8d2y.jpg" -o "$BASE/minecraft/minecraft-gameplay-03.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/sclnvg.jpg" -o "$BASE/minecraft/minecraft-gameplay-04.jpg"

echo "=== Downloading Fortnite images ==="
# Key art for hero
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/ar41mh.jpg" -o "$BASE/fortnite/fortnite-keyart-hero.jpg"
# Artwork
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/ar41mg.jpg" -o "$BASE/fortnite/fortnite-artwork-01.jpg"
# Screenshots (newer chapter)
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/sc105bo.jpg" -o "$BASE/fortnite/fortnite-gameplay-01.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/sc105bt.jpg" -o "$BASE/fortnite/fortnite-gameplay-02.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/sc105bu.jpg" -o "$BASE/fortnite/fortnite-gameplay-03.jpg"
curl -sL "https://images.igdb.com/igdb/image/upload/t_original/ar4llq.jpg" -o "$BASE/fortnite/fortnite-keyart-alt.jpg"

echo ""
echo "=== Verifying downloads ==="
for f in "$BASE"/roblox/*.jpg "$BASE"/minecraft/*.jpg "$BASE"/fortnite/*.jpg; do
  if [ -f "$f" ]; then
    ftype=$(file -b "$f" | head -1)
    fsize=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
    echo "  $(basename "$f"): $ftype ($fsize bytes)"
  fi
done

echo ""
echo "=== Converting to WebP ==="
for f in "$BASE"/roblox/*.jpg "$BASE"/minecraft/*.jpg "$BASE"/fortnite/*.jpg; do
  if [ -f "$f" ]; then
    outfile="${f%.jpg}.webp"
    "$CWEBP" -q 85 "$f" -o "$outfile" 2>/dev/null
    if [ -f "$outfile" ]; then
      fsize=$(stat -f%z "$outfile" 2>/dev/null || stat -c%s "$outfile" 2>/dev/null)
      echo "  $(basename "$outfile"): $fsize bytes"
      rm "$f"  # Remove original jpg
    else
      echo "  FAILED: $(basename "$f")"
    fi
  fi
done

echo ""
echo "=== Final verification ==="
for d in roblox minecraft fortnite; do
  echo "--- $d ---"
  ls -la "$BASE/$d/"*.webp 2>/dev/null
done
