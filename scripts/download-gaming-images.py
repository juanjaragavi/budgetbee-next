#!/usr/bin/env python3
"""Download gaming images using Pollinations.ai and convert to webp."""

import os
import subprocess
import time
from urllib.parse import quote
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

BASE = "/Users/macbookpro/GitHub/budgetbee-next/public/images/gaming"

IMAGES = [
    # Roblox images
    {
        "prompt": "Colorful Roblox characters standing together in a vibrant game world, blocky 3D avatars, bright purple and gold coins floating, gaming hero banner, digital illustration, high quality",
        "output": f"{BASE}/roblox/hero-robux.webp",
        "width": 900,
        "height": 507,
    },
    {
        "prompt": "Close-up of shiny gold and purple virtual game coins stacked together, Robux currency concept, glowing metallic coins, clean studio background, digital art, detailed",
        "output": f"{BASE}/roblox/robux-coins.webp",
        "width": 600,
        "height": 400,
    },
    {
        "prompt": "Colorful blocky game avatar being customized with different outfits and accessories, character creation screen concept, vibrant purple theme, digital illustration",
        "output": f"{BASE}/roblox/roblox-avatar.webp",
        "width": 600,
        "height": 400,
    },
    {
        "prompt": "Digital gift card and promo code redemption concept, glowing purple card with game currency icons, discount codes floating, modern clean design, promotional visual",
        "output": f"{BASE}/roblox/roblox-promo.webp",
        "width": 600,
        "height": 400,
    },
    # Minecraft images
    {
        "prompt": "Epic Minecraft landscape with blocky terrain, green hills, trees, a player character holding a diamond pickaxe, blue sky, pixel art style hero banner, vibrant colors, wide angle",
        "output": f"{BASE}/minecraft/hero-minecraft.webp",
        "width": 900,
        "height": 507,
    },
    {
        "prompt": "Golden Minecoins virtual currency coins stacked in a pile, Minecraft marketplace concept, blocky pixel style, green emerald accents, clean background, digital illustration",
        "output": f"{BASE}/minecraft/minecoins.webp",
        "width": 600,
        "height": 400,
    },
    {
        "prompt": "Minecraft wooden chest opening with golden light, treasure loot spilling out with diamonds emeralds and gold, blocky pixel style, warm glowing scene, digital art",
        "output": f"{BASE}/minecraft/minecraft-loot.webp",
        "width": 600,
        "height": 400,
    },
    {
        "prompt": "Multiple Minecraft character skins standing in a row, different outfits and costumes, blocky pixel art characters, colorful variety, character customization showcase",
        "output": f"{BASE}/minecraft/minecraft-skins.webp",
        "width": 600,
        "height": 400,
    },
    # Fortnite images
    {
        "prompt": "Fortnite style battle royale characters in action poses, colorful futuristic soldiers with weapons, blue and gold V-Bucks coins, hero banner style, dynamic composition, high energy digital art",
        "output": f"{BASE}/fortnite/hero-fortnite.webp",
        "width": 900,
        "height": 507,
    },
    {
        "prompt": "V-Bucks gold coins with blue diamond center, virtual game currency pile, shiny metallic, glowing blue accents, clean studio background, detailed digital illustration",
        "output": f"{BASE}/fortnite/vbucks.webp",
        "width": 600,
        "height": 400,
    },
    {
        "prompt": "Collection of colorful battle royale character skins in futuristic outfits, different rarities from common to legendary, character showcase lineup, vibrant digital art",
        "output": f"{BASE}/fortnite/fortnite-skins.webp",
        "width": 600,
        "height": 400,
    },
    {
        "prompt": "Battle Pass reward tier progression concept, golden tiers with unlockable items skins and emotes, futuristic UI design, blue and gold color scheme, gaming progression visual",
        "output": f"{BASE}/fortnite/battle-pass.webp",
        "width": 600,
        "height": 400,
    },
    # Reward app logos
    {
        "prompt": "Microsoft Rewards logo icon, blue and green gradient shield with star, clean minimal flat design, white background, app icon style, square format",
        "output": f"{BASE}/apps/microsoft-rewards.webp",
        "width": 200,
        "height": 200,
    },
    {
        "prompt": "Swagbucks logo icon, blue circle with SB letters, money coin concept, clean minimal flat design, white background, app icon style, square format",
        "output": f"{BASE}/apps/swagbucks.webp",
        "width": 200,
        "height": 200,
    },
    {
        "prompt": "Fetch Rewards logo icon, orange and white modern app icon, receipt scanning concept, clean minimal flat design, white background, square format",
        "output": f"{BASE}/apps/fetch-rewards.webp",
        "width": 200,
        "height": 200,
    },
    {
        "prompt": "InboxDollars logo icon, green dollar sign in envelope, money earning concept, clean minimal flat design, white background, app icon style, square format",
        "output": f"{BASE}/apps/inboxdollars.webp",
        "width": 200,
        "height": 200,
    },
]


def download_image(prompt, output, width, height, max_retries=3):
    """Download an image from Pollinations.ai and convert to webp."""
    encoded = quote(prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded}?width={width}&height={height}&model=flux&nologo=true&seed=42"
    tmp = output.replace(".webp", ".jpg")
    name = os.path.basename(output)

    for attempt in range(1, max_retries + 1):
        try:
            print(f"  ⏳ [{attempt}/{max_retries}] {name} ...")
            req = Request(url, headers={
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
                "Accept": "image/*,*/*",
            })
            with urlopen(req, timeout=180) as resp:
                data = resp.read()
                with open(tmp, "wb") as f:
                    f.write(data)

            # Convert to webp using sips (macOS)
            subprocess.run(
                ["sips", "-s", "format", "webp", tmp, "--out", output],
                capture_output=True, check=True,
            )
            os.remove(tmp)
            size_kb = os.path.getsize(output) / 1024
            print(f"  ✅ {name} ({size_kb:.0f} KB)")
            return True
        except (URLError, HTTPError, OSError) as e:
            print(f"  ⚠️  Attempt {attempt} failed: {e}")
            if attempt < max_retries:
                time.sleep(5 * attempt)
            # Clean up temp file on failure
            if os.path.exists(tmp):
                os.remove(tmp)

    print(f"  ❌ FAILED: {name}")
    return False


def main():
    # Ensure directories exist
    for d in ["roblox", "minecraft", "fortnite", "apps"]:
        os.makedirs(os.path.join(BASE, d), exist_ok=True)

    total = len(IMAGES)
    success = 0

    for i, img in enumerate(IMAGES, 1):
        category = os.path.basename(os.path.dirname(img["output"])).upper()
        if i == 1 or IMAGES[i - 2]["output"].split("/")[-2] != img["output"].split("/")[-2]:
            print(f"\n=== {category} IMAGES ===\n")

        if download_image(img["prompt"], img["output"], img["width"], img["height"]):
            success += 1

        # Small delay between requests
        if i < total:
            time.sleep(2)

    print(f"\n=== COMPLETE: {success}/{total} images downloaded ===\n")

    # List all webp files
    for root, _, files in sorted(os.walk(BASE)):
        for f in sorted(files):
            if f.endswith(".webp"):
                path = os.path.join(root, f)
                size = os.path.getsize(path) / 1024
                print(f"  {path} ({size:.0f} KB)")


if __name__ == "__main__":
    main()
