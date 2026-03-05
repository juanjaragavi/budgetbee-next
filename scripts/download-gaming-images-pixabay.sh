#!/bin/bash
# Download gaming images from Pixabay CDN and convert to webp
set -o pipefail

BASE="/Users/macbookpro/GitHub/budgetbee-next/public/images/gaming"
mkdir -p "$BASE/roblox" "$BASE/minecraft" "$BASE/fortnite" "$BASE/apps"

download() {
  local url="$1" output="$2" width="$3" height="$4"
  local name=$(basename "$output")
  local tmp="${output%.webp}.tmp.jpg"

  echo "⏳ $name ..."
  if curl -fsSL --max-time 30 "$url" -o "$tmp" 2>/dev/null; then
    # Resize with sips, then convert to webp with cwebp
    sips --resampleWidth "$width" "$tmp" --out "$tmp" >/dev/null 2>&1
    cwebp -q 85 -quiet "$tmp" -o "$output" 2>/dev/null
    rm -f "$tmp"
    local size=$(stat -f%z "$output" 2>/dev/null || echo 0)
    echo "✅ $name ($(( size / 1024 )) KB)"
  else
    echo "❌ $name"
  fi
}

echo ""
echo "=== ROBLOX IMAGES ==="
download "https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg" \
  "$BASE/roblox/hero-robux.webp" 900 507
download "https://cdn.pixabay.com/photo/2019/05/05/11/04/coin-4180241_1280.jpg" \
  "$BASE/roblox/robux-coins.webp" 600 400
download "https://cdn.pixabay.com/photo/2021/02/16/18/55/gamer-6022003_640.png" \
  "$BASE/roblox/roblox-avatar.webp" 600 400
download "https://cdn.pixabay.com/photo/2015/08/11/08/21/coupon-883637_640.png" \
  "$BASE/roblox/roblox-promo.webp" 600 400

echo ""
echo "=== MINECRAFT IMAGES ==="
download "https://cdn.pixabay.com/photo/2015/03/01/19/32/minecraft-655158_1280.jpg" \
  "$BASE/minecraft/hero-minecraft.webp" 900 507
download "https://cdn.pixabay.com/photo/2018/06/11/10/01/coin-3468151_640.png" \
  "$BASE/minecraft/minecoins.webp" 600 400
download "https://cdn.pixabay.com/photo/2015/02/01/17/06/treasure-chest-619868_640.jpg" \
  "$BASE/minecraft/minecraft-loot.webp" 600 400
download "https://cdn.pixabay.com/photo/2016/06/20/16/43/minecraft-1469255_1280.png" \
  "$BASE/minecraft/minecraft-skins.webp" 600 400

echo ""
echo "=== FORTNITE IMAGES ==="
download "https://cdn.pixabay.com/photo/2023/12/07/15/01/fortnite-8435717_1280.png" \
  "$BASE/fortnite/hero-fortnite.webp" 900 507
download "https://cdn.pixabay.com/photo/2018/06/08/10/25/coin-3462048_640.png" \
  "$BASE/fortnite/vbucks.webp" 600 400
download "https://cdn.pixabay.com/photo/2023/01/04/19/35/game-7697501_640.png" \
  "$BASE/fortnite/fortnite-skins.webp" 600 400
download "https://cdn.pixabay.com/photo/2016/08/23/16/04/cup-1614844_640.png" \
  "$BASE/fortnite/battle-pass.webp" 600 400

echo ""
echo "=== REWARD APP ICONS ==="
download "https://cdn.pixabay.com/photo/2012/04/25/01/18/award-41584_1280.png" \
  "$BASE/apps/microsoft-rewards.webp" 200 200
download "https://cdn.pixabay.com/photo/2018/06/08/10/25/coin-3462048_640.png" \
  "$BASE/apps/swagbucks.webp" 200 200
download "https://cdn.pixabay.com/photo/2020/11/30/18/28/gift-5791812_640.png" \
  "$BASE/apps/fetch-rewards.webp" 200 200
download "https://cdn.pixabay.com/photo/2016/03/31/15/17/achievement-1293132_640.png" \
  "$BASE/apps/inboxdollars.webp" 200 200

echo ""
echo "=== COMPLETE ==="
echo "Downloaded files:"
find "$BASE" -name "*.webp" -type f | sort | while read f; do
  size=$(stat -f%z "$f" 2>/dev/null || echo 0)
  echo "  $f ($(( size / 1024 )) KB)"
done
echo "Total: $(find "$BASE" -name "*.webp" -type f | wc -l | tr -d ' ') webp files"
