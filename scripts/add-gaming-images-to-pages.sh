#!/bin/bash
# Add heroImage and section images to all gaming promise and reward pages
BASE="/Users/macbookpro/GitHub/budgetbee-next/app/gaming"

# --- ROBUX PROMISE PAGES ---
for f in "$BASE"/robux-promise-p*/page.tsx; do
  echo "Updating $(basename $(dirname $f))..."
  
  # Add ROBLOX_IMAGES to import if not already there
  if ! grep -q "ROBLOX_IMAGES" "$f"; then
    sed -i '' 's/{ ROBLOX_THEME, FINANCIAL_RELATED_ARTICLES }/{ ROBLOX_THEME, ROBLOX_IMAGES, FINANCIAL_RELATED_ARTICLES }/' "$f"
    sed -i '' 's/{ ROBLOX_THEME,$/{ ROBLOX_THEME, ROBLOX_IMAGES,/' "$f"
  fi
  # Also handle multi-line imports
  if ! grep -q "ROBLOX_IMAGES" "$f"; then
    sed -i '' '/ROBLOX_THEME/s/ROBLOX_THEME/ROBLOX_THEME, ROBLOX_IMAGES/' "$f"
  fi
  
  # Add heroImage after subtitle line (only if not already present)
  if ! grep -q "heroImage" "$f"; then
    sed -i '' '/subtitle="/a\
      heroImage={{ src: ROBLOX_IMAGES.hero, alt: "Roblox gameplay and Robux rewards" }}' "$f"
  fi
  
  # Add image to first section (after first heading's paragraphs array closing)
  if ! grep -q 'image:.*ROBLOX_IMAGES' "$f"; then
    # Add image to first section - find the first section's closing and add image before it
    python3 -c "
import re
with open('$f', 'r') as fh:
    content = fh.read()

# Find sections array and add image to first and third sections
sections_count = 0
lines = content.split('\n')
new_lines = []
in_section = False
section_depth = 0
brace_count = 0

for i, line in enumerate(lines):
    new_lines.append(line)
    # Track when we enter a section object (after 'sections={[')
    if 'heading:' in line and not in_section:
        sections_count += 1
        in_section = True
        brace_count = 0
    
    # For sections 1 and 3, add image after the bullets/paragraphs closure
    if in_section and sections_count in (1, 3):
        # Look for the section closing pattern: '        },'
        stripped = line.strip()
        if stripped == '},' and in_section:
            # Check if next line starts a new section or is the end
            if i + 1 < len(lines):
                next_stripped = lines[i+1].strip()
                if next_stripped.startswith('{') or next_stripped.startswith(']'):
                    # This is a section boundary - add image before the comma
                    new_lines.pop()  # Remove the '},' 
                    if sections_count == 1:
                        new_lines.append('          image: { src: ROBLOX_IMAGES.coins, alt: \"Robux virtual currency\" },')
                    else:
                        new_lines.append('          image: { src: ROBLOX_IMAGES.avatar, alt: \"Roblox avatar customization\" },')
                    new_lines.append(line)  # Re-add the '},'
                    in_section = False

with open('$f', 'w') as fh:
    fh.write('\n'.join(new_lines))
" 2>/dev/null
  fi
done

# --- ROBUX REWARD PAGES ---
for f in "$BASE"/robux-reward-p*/page.tsx; do
  echo "Updating $(basename $(dirname $f))..."
  
  if ! grep -q "ROBLOX_IMAGES" "$f"; then
    sed -i '' 's/ROBLOX_THEME,$/ROBLOX_THEME,\n  ROBLOX_IMAGES,/' "$f"
  fi
  
  if ! grep -q "heroImage" "$f"; then
    sed -i '' '/subtitle="/a\
      heroImage={{ src: ROBLOX_IMAGES.hero, alt: "Roblox gameplay and Robux rewards" }}' "$f"
  fi
done

# --- FORTNITE PROMISE PAGES ---
for f in "$BASE"/fortnite-promise-p*/page.tsx; do
  echo "Updating $(basename $(dirname $f))..."
  
  if ! grep -q "FORTNITE_IMAGES" "$f"; then
    sed -i '' 's/FORTNITE_THEME,$/FORTNITE_THEME, FORTNITE_IMAGES,/' "$f"
  fi
  
  if ! grep -q "heroImage" "$f"; then
    sed -i '' '/subtitle="/a\
      heroImage={{ src: FORTNITE_IMAGES.hero, alt: "Fortnite gameplay and V-Bucks" }}' "$f"
  fi
done

# --- FORTNITE REWARD PAGES ---
for f in "$BASE"/fortnite-reward-p*/page.tsx; do
  echo "Updating $(basename $(dirname $f))..."
  
  if ! grep -q "FORTNITE_IMAGES" "$f"; then
    sed -i '' 's/FORTNITE_THEME,$/FORTNITE_THEME,\n  FORTNITE_IMAGES,/' "$f"
  fi
  
  if ! grep -q "heroImage" "$f"; then
    sed -i '' '/subtitle="/a\
      heroImage={{ src: FORTNITE_IMAGES.hero, alt: "Fortnite gameplay and V-Bucks" }}' "$f"
  fi
done

# --- MINECRAFT PROMISE PAGES ---
for f in "$BASE"/minecraft-promise-p*/page.tsx; do
  echo "Updating $(basename $(dirname $f))..."
  
  if ! grep -q "MINECRAFT_IMAGES" "$f"; then
    sed -i '' 's/MINECRAFT_THEME,$/MINECRAFT_THEME, MINECRAFT_IMAGES,/' "$f"
  fi
  
  if ! grep -q "heroImage" "$f"; then
    sed -i '' '/subtitle="/a\
      heroImage={{ src: MINECRAFT_IMAGES.hero, alt: "Minecraft world and gameplay" }}' "$f"
  fi
done

# --- MINECRAFT REWARD PAGES ---
for f in "$BASE"/minecraft-reward-p*/page.tsx; do
  echo "Updating $(basename $(dirname $f))..."
  
  if ! grep -q "MINECRAFT_IMAGES" "$f"; then
    sed -i '' 's/MINECRAFT_THEME,$/MINECRAFT_THEME,\n  MINECRAFT_IMAGES,/' "$f"
  fi
  
  if ! grep -q "heroImage" "$f"; then
    sed -i '' '/subtitle="/a\
      heroImage={{ src: MINECRAFT_IMAGES.hero, alt: "Minecraft world and gameplay" }}' "$f"
  fi
done

echo ""
echo "=== VERIFICATION ==="
echo "Pages with heroImage: $(grep -rl 'heroImage' $BASE/*/page.tsx | wc -l | tr -d ' ')"
echo "Pages with ROBLOX_IMAGES: $(grep -rl 'ROBLOX_IMAGES' $BASE/*/page.tsx | wc -l | tr -d ' ')"
echo "Pages with FORTNITE_IMAGES: $(grep -rl 'FORTNITE_IMAGES' $BASE/*/page.tsx | wc -l | tr -d ' ')"
echo "Pages with MINECRAFT_IMAGES: $(grep -rl 'MINECRAFT_IMAGES' $BASE/*/page.tsx | wc -l | tr -d ' ')"
