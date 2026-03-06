# Prompt

## Context

BudgetBee gaming promise pages use `gaming-promise-template.tsx` as their shared layout component. The component renders a `<main>` element (line 78) containing the hero section, article content, FAQ, CTAs, and footer.

TopAds provides a full-screen rewarded overlay ad unit activated via the `data-topads-rewarded` attribute. This unit functions as an offer wall — it blocks page content until the user watches an ad, then reveals the underlying page. Competitor sites (MeusBeneficios, BuzzBlitz, Zacheck) deploy identical rewarded overlays at page entry to gate content access and maximize ad revenue per session.

The rewarded overlay is distinct from the existing `square0{n}` inline ad slots. It requires a single `<div>` with `data-topads-rewarded` and a `data-topads-texts` JSON attribute containing localized copy for the overlay UI (title, description, CTA label, disclaimer).

## Task

Add the following `<div>` element to `gaming-promise-template.tsx`, immediately after the opening `<main>` tag (line 78), before the `<Header />` component (line 81):

```jsx
<div
  data-topads-rewarded
  data-topads-texts='{"title":"See how to get Robux","description":"Discover the best ways to get Robux quickly","CTA":"See quick methods","disclaimer":"To continue, it will be necessary to watch an ad."}'
/>
```

Placement target — the resulting JSX structure:

```jsx
<main
  className={`flex min-h-screen flex-col bg-white${stickyBanner ? " pb-16" : ""}`}
>
  <div
    data-topads-rewarded
    data-topads-texts='{"title":"See how to get Robux","description":"Discover the best ways to get Robux quickly","CTA":"See quick methods","disclaimer":"To continue, it will be necessary to watch an ad."}'
  />
  <Header />
  {/* ... rest of template */}
</main>
```

Scope: all promise pages rendered through `gaming-promise-template.tsx`. No changes to `gaming-reward-template.tsx`, quiz pages, or chat entry components.

The `data-topads-texts` JSON is currently hardcoded for Robux. If the template needs per-game copy variants (Minecraft, Fortnite), the texts object should be parameterized via a new optional prop on `GamingPromiseTemplateProps`. For the initial deployment, the static Robux copy is acceptable across all verticals.

## Outcome

Every gaming promise page renders a TopAds full-screen rewarded overlay on page load. The overlay gates article content behind an ad view, matching the monetization pattern used by competitor funnels. The `<div>` is the first child of `<main>`, ensuring the SDK intercepts before any content paints. No existing ad slots, layout structure, or component behavior is affected.
