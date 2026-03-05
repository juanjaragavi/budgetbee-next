#!/bin/bash
# Download gaming images using Pollinations.ai and convert to webp
# Usage: bash scripts/download-gaming-images.sh

set -o pipefail

BASE="/Users/macbookpro/GitHub/budgetbee-next/public/images/gaming"

# Create directories
mkdir -p "$BASE/roblox" "$BASE/minecraft" "$BASE/fortnite" "$BASE/apps"

download_image() {
  local prompt="$1"
  local output="$2"
  local width="$3"
  local height="$4"

  local encoded_prompt
  encoded_prompt=$(python3 -c "import urllib.parse; print(urllib.parse.quote('''$prompt'''))")

  local url="https://image.pollinations.ai/prompt/${encoded_prompt}?width=${width}&height=${height}&model=flux&nologo=true&seed=42"
  local tmp_file="${output%.webp}.jpg"

  echo "⏳ Downloading: $(basename "$output") ..."
  if curl -fsSL --max-time 120 "$url" -o "$tmp_file"; then
    # Convert to webp using sips (macOS built-in)
    sips -s format webp "$tmp_file" --out "$output" >/dev/null 2>&1
    rm -f "$tmp_file"
    echo "✅ Saved: $output"
  else
    echo "❌ Failed: $output"
  fi
}

echo ""
echo "=== ROBLOX / ROBUX IMAGES ==="
echo ""

download_image \
  "Colorful Roblox characters standing together in a vibrant game world, blocky 3D avatars, bright purple and gold coins floating, gaming hero banner, digital illustration, high quality" \
  "$BASE/roblox/hero-robux.webp" 900 507

download_image \
  "Close-up of shiny gold and purple virtual game coins stacked together, Robux currency concept, glowing metallic coins, clean studio background, digital art, detailed" \
  "$BASE/roblox/robux-coins.webp" 600 400

download_image \
  "Colorful blocky game avatar being customized with different outfits and accessories, character creation screen concept, vibrant purple theme, digital illustration" \
  "$BASE/roblox/roblox-avatar.webp" 600 400

download_image \
  "Digital gift card and promo code redemption concept, glowing purple card with game currency icons, discount codes floating, modern clean design, promotional visual" \
  "$BASE/roblox/roblox-promo.webp" 600 400

echo ""
echo "=== MINECRAFT IMAGES ==="
echo ""

download_image \
  "Epic Minecraft landscape with blocky terrain, green hills, trees, a player character holding a diamond pickaxe, blue sky, pixel art style hero banner, vibrant colors, wide angle" \
  "$BASE/minecraft/hero-minecraft.webp" 900 507

download_image \
  "Golden Minecoins virtual currency coins stacked in a pile, Minecraft marketplace concept, blocky pixel style, green emerald accents, clean background, digital illustration" \
  "$BASE/minecraft/minecoins.webp" 600 400

download_image \
  "Minecraft wooden chest opening with golden light, treasure loot spilling out with diamonds emeralds and gold, blocky pixel style, warm glowing scene, digital art" \
  "$BASE/minecraft/minecraft-loot.webp" 600 400

download_image \
  "Multiple Minecraft character skins standing in a row, different outfits and costumes, blocky pixel art characters, colorful variety, character customization showcase" \
  "$BASE/minecraft/minecraft-skins.webp" 600 400

echo ""
echo "=== FORTNITE / V-BUCKS IMAGES ==="
echo ""

download_image \
  "Fortnite style battle royale characters in action poses, colorful futuristic soldiers with weapons, blue and gold V-Bucks coins, hero banner style, dynamic composition, high energy digital art" \
  "$BASE/fortnite/hero-fortnite.webp" 900 507

download_image \
  "V-Bucks gold coins with blue diamond center, virtual game currency pile, shiny metallic, glowing blue accents, clean studio background, detailed digital illustration" \
  "$BASE/fortnite/vbucks.webp" 600 400

download_image \
  "Collection of colorful battle royale character skins in futuristic outfits, different rarities from common to legendary, character showcase lineup, vibrant digital art" \
  "$BASE/fortnite/fortnite-skins.webp" 600 400

download_image \
  "Battle Pass reward tier progression concept, golden tiers with unlockable items skins and emotes, futuristic UI design, blue and gold color scheme, gaming progression visual" \
  "$BASE/fortnite/battle-pass.webp" 600 400

echo ""
echo "=== REWARD APP LOGOS ==="
echo ""

download_image \
  "Microsoft Rewards logo icon, blue and green gradient shield with star, clean minimal flat design, white background, app icon style, square format" \
  "$BASE/apps/microsoft-rewards.webp" 200 200

download_image \
  "Swagbucks logo icon, blue circle with SB letters, money coin concept, clean minimal flat design, white background, app icon style, square format" \
  "$BASE/apps/swagbucks.webp" 200 200

download_image \
  "Fetch Rewards logo icon, orange and white modern app icon, receipt scanning concept, clean minimal flat design, white background, square format" \
  "$BASE/apps/fetch-rewards.webp" 200 200

download_image \
  "InboxDollars logo icon, green dollar sign in envelope, money earning concept, clean minimal flat design, white background, app icon style, square format" \
  "$BASE/apps/inboxdollars.webp" 200 200

echo ""
echo "=== DOWNLOAD COMPLETE ==="
echo ""
echo "Generated images:"
find "$BASE" -name "*.webp" -type f | sort
echo ""
echo "Total: $(find "$BASE" -name "*.webp" -type f | wc -l) images"
