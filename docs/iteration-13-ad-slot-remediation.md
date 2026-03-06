## Context

BudgetBee gaming promise pages (`gaming-promise-template.tsx`) render three TopAds mobile ad slots (`square01`, `square02`, `square03`). After Iteration 11's exclusion-scope fix, loader and interstitial ad units now fire correctly on promise and reward pages. However, mobile `square0{n}` slots display only the "Publicidad" placeholder text without filling actual ad creatives. This indicates the TopAds SDK recognizes the slots but cannot serve inventory into them — likely due to a policy or configuration mismatch at the slot level rather than a page-level exclusion.

Separately, two of the three ad slots in `gaming-promise-template.tsx` violate Google AdSense placement policy:

- `square01` (line 199) renders immediately before a `next/image` element — the section's article image follows directly after the ad div with no intervening text.
- `square02` (line 221) renders immediately after a `next/image` element — the ad div follows the section's image with no intervening text.

Google's ad placement policy requires that mobile ad units not be positioned directly adjacent to images, buttons, or interactive elements. Only text elements (`<p>`, `<h1>`–`<h6>`, `<li>`) qualify as valid neighbors for ad slots. Both violations carry sanction risk for the AdSense account.

The reward template (`gaming-reward-template.tsx`) is compliant — all three slots have text paragraphs on both sides.

## Task

### 1. Relocate `square01` in `gaming-promise-template.tsx`

Move the `square01` ad slot from its current position (line 199, before the first section's image) to after the first section's image AND after the next text paragraph. The slot must have a `<p>` or heading element both above and below it.

Target structure:

```
[Section 0 text paragraphs/bullets]
[Section 0 image]
[Section 1 opening paragraph(s)]   ← text above
[square01 ad slot]
[Section 1 continued text]         ← text below
```

If Section 1 has no opening paragraph before its own image, insert `square01` after Section 1's text content instead.

### 2. Relocate `square02` in `gaming-promise-template.tsx`

Move the `square02` ad slot from its current position (line 221, after the second section's image) to a location where text elements exist on both sides. Place it between two paragraph blocks within the subsequent section's text content.

Target structure:

```
[Section 1 closing text]           ← text above
[square02 ad slot]
[Section 2 opening text]           ← text below
```

### 3. Diagnose mobile slot fill failure

The `square0{n}` slots render the "Publicidad" label (confirming SDK initialization) but receive no ad creative. Investigate:

- Verify the TopAds dashboard configuration for `square` size slots — confirm they are enabled for the `budgetbee.com` domain and `/gaming/*` URL patterns (excluding `/gaming/*-quiz-*`).
- Check whether the `data-topads-size="square"` attribute value matches the slot size registered in the TopAds console. If the console expects `300x250` or `responsive` instead of `square`, update the attribute.
- Confirm the TopAds SDK script loads before the DOM elements are parsed. If the script is deferred or async-loaded after hydration, the SDK may not detect the slots. Test moving the script tag to `<head>` with `strategy="beforeInteractive"` in `app/layout.tsx`.
- Verify no CSP (Content-Security-Policy) header blocks the ad creative iframe origin.
- Test on a clean browser profile (no ad blocker, no privacy extensions) to rule out client-side filtering.

### 4. Validate `gaming-reward-template.tsx`

No structural changes required — all three slots (`square01`, `square02`, `square03`) already have text elements as neighbors. Confirm slot fill behavior matches promise pages (if reward pages also show only "Publicidad", the root cause is SDK/dashboard configuration, not DOM placement).

## Outcome

After implementation:

- All `square0{n}` ad slots in `gaming-promise-template.tsx` have text elements (`<p>`, `<h*>`, `<li>`) as both their preceding and following DOM siblings — no slot is adjacent to an `<Image>`, `<button>`, or interactive element.
- The TopAds mobile slot configuration is verified and corrected in the dashboard, resolving the "Publicidad" placeholder-only rendering across all promise and reward pages.
- Google AdSense placement policy compliance is restored, eliminating sanction risk for the account.
- Loader, interstitial, and mobile ad units all render correctly on non-quiz gaming pages.
