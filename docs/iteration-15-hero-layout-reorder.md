# Prompt

## Context

Google AdSense placement policy prohibits mobile ad units adjacent to images, buttons, or interactive elements. On BudgetBee gaming promise and reward pages, the current hero section layout packs the badge, `<h1>` title, subtitle `<p>`, and (in the promise template) the `square02` ad slot all inside the same gradient `<section>`. The hero image follows immediately after in the `<article>` block.

This layout creates two compliance issues: the ad slot sits inside a visually dominant colored container (which Google classifies as a deceptive integration pattern), and the ad is one DOM sibling away from the hero image. The screenshot of the Robux promise page confirms the violation — the `square02` ad renders between the subtitle and the hero image with no text buffer.

### Current DOM order — `gaming-promise-template.tsx`

```
<section> (gradient background)
  badge
  <h1>title</h1>
  <p>subtitle</p>
  <div id="square02" data-topads .../>    ← inside gradient, adjacent to image
</section>
<article>
  <Image heroImage />                     ← immediately after gradient section
  CTA buttons
  sections...
</article>
```

### Current DOM order — `gaming-reward-template.tsx`

```
<section> (gradient background)
  badge
  <h1>title</h1>
  <p>subtitle</p>
</section>
<article>
  <Image heroImage />
  intro paragraphs
  <div id="square02" data-topads .../>    ← after intro text (compliant)
  ...
</article>
```

## Task

Restructure the first viewport of both `gaming-promise-template.tsx` and `gaming-reward-template.tsx` to the following DOM order:

### Target layout (both templates)

```
<section> (gradient background)
  badge
  <h1>title</h1>
</section>

<article>
  <div id="square01" data-topads data-topads-size="square" />

  <p>subtitle</p>

  <Image heroImage />

  ... (rest of content)
</article>
```

### Specific changes — `gaming-promise-template.tsx`

1. **Remove subtitle from hero `<section>`**: Delete `<p className="text-lg opacity-90">{subtitle}</p>` (line 105) from inside the gradient section.
2. **Remove `square02` from hero `<section>`**: Delete the `<div id="square02" .../>` block (lines 107–112) from inside the gradient section.
3. **Insert ad slot as first child of `<article>` inner container** (`div.max-w-4xl`): Add a `<div id="square01" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8" />` before the hero image.
4. **Insert subtitle between ad slot and hero image**: Add `<p className="text-gray-700 text-lg mb-6 leading-relaxed">{subtitle}</p>` after the ad slot and before the `{heroImage && ...}` conditional.
5. **Renumber remaining ad slots**: The slot removed from the hero was `square02`. Renumber the existing downstream slots so the sequence remains `square01` (new position above subtitle), `square02` (mid-content), `square03` (pre-footer). Audit the full file and update all `id="square0{n}"` values accordingly.

### Specific changes — `gaming-reward-template.tsx`

1. **Remove subtitle from hero `<section>`**: Delete `<p className="text-lg opacity-90">{subtitle}</p>` (line 85) from inside the gradient section.
2. **Insert ad slot as first child of `<article>` inner container**: Add `<div id="square01" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8" />` before the hero image.
3. **Insert subtitle between ad slot and hero image**: Add `<p className="text-gray-700 text-lg mb-6 leading-relaxed">{subtitle}</p>` after the new ad slot and before the `{heroImage && ...}` block.
4. **Renumber downstream ad slots** to maintain sequential `square01`, `square02`, `square03` order.

### Styling notes

- The subtitle moves from `text-white` (inherited from gradient section) to `text-gray-700` on the white `<article>` background.
- The subtitle retains `text-lg` and `leading-relaxed` but drops `opacity-90` (no longer needed on a white background).
- The ad slot uses the same `className` pattern as all other `square0{n}` slots: `"items-center justify-center flex w-full my-8"`.
- The hero gradient `<section>` now contains only the badge and `<h1>`. No padding adjustments needed — `py-12 md:py-16` remains.

## Outcome

The first viewport of all gaming promise and reward pages renders in this order from top to bottom: colored gradient header (badge + title only) → `square01` ad slot on white background → subtitle text → hero image. The ad slot is surrounded by text above (title in gradient, though visually separated) and text below (subtitle paragraph), satisfying Google's ad placement policy. No ad unit is adjacent to the hero image — the subtitle `<p>` acts as the required text buffer. The layout is consistent across both template components and all 54 gaming page routes.
