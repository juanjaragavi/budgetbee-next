---
name: budgetbee-codebase-ops
description: "BudgetBee USA codebase operating map for architecture-aware edits, safe content/catalog updates, API/integration changes, and deployment readiness. Use when working in budgetbee-next, especially for blog/product page CRUD, SEO registry updates, analytics/UTM flows, or TopNetworks cross-repo sync decisions."
---

# BudgetBee Codebase Ops

Comprehensive, implementation-level operating guide for `budgetbee-next` (`budgetbeepro.com`), aligned with TopNetworks standards and the sync orchestration model.

## Scope and boundaries

Use this skill when the task is in `budgetbee-next` and requires codebase-specific navigation or safe change execution.

- Market: US
- Brand: BudgetBee (TopNetworks Inc.)
- Audience: Gen-Z and Millennials
- Runtime app port: `3007`
- Core stack: Next.js App Router + TypeScript + Tailwind + shadcn/ui

Do not use this as generic Next.js guidance for unrelated repositories.

## Relationship to TopNetworks orchestrator

This skill is repository-local and is governed by:

- `../topnetworks-sync-orchestrator/SKILL.md`

Coordination contract:

1. Use `budgetbee-codebase-ops` first for exact local implementation details and safe edit points.
2. If the change may need parity across US/UK/MX/BudgetBee (SEO, analytics, shared components, scripts, governance docs), escalate to `topnetworks-sync-orchestrator`.
3. Keep orchestrator taxonomy when describing scope:
- shared architecture
- market-localized
- brand-localized
- repo-specific
4. Before multi-repo deployment readiness, run the BudgetBee wrapper:
- `node scripts/topnetworks-predeploy.mjs preflight --execute`

## Relationship to project instruction files

This skill complements project-level instruction files and does not override them.

- `.github/copilot-instructions.md`
- `.github/instructions/project-rules.instructions.md`
- `.github/instructions/BLOG_POST_INTEGRATION.instructions.md`
- `.github/instructions/PUSH-AND-COMMIT.instructions.md`

If an instruction file and this skill appear to conflict, validate against current code implementation before applying either one blindly.

## System map

### App routing and rendering

- App Router entrypoints are thin wrappers in `app/**/page.tsx`.
- Most UI/data arrays live in `app/**/page-client.tsx`.
- Home wrappers:
- `app/page.tsx` -> `app/page-client.tsx`
- Archive wrappers:
- `app/blog/page.tsx` -> `app/blog/page-client.tsx`
- `app/personal-finance/page.tsx` -> `app/personal-finance/page-client.tsx`
- `app/financial-solutions/page.tsx` -> `app/financial-solutions/page-client.tsx`

### SEO and sitemap control plane

Centralized SEO registry (critical invariant):

- `lib/seo-route-registry.ts` is the canonical route inventory for metadata + structured data + sitemap inclusion.
- `lib/seo.ts` derives metadata/schema from the registry.
- `app/sitemap.ts` uses `getIndexableRoutes()` from `lib/seo.ts`.

Implication: new pages are not safely "auto-included" by filesystem alone. For indexable content, update the registry.

### Analytics and ad-tech

Current active implementation in this repo:

- GTM inline bootstrap in `app/layout.tsx`
- Google Ads integration: `components/analytics/google-ads.tsx`
- Google Ad Manager integration: `components/analytics/gam.tsx`
- UTM capture/injection flow:
- `components/analytics/utm-persister.tsx`
- `components/analytics/utm-link-injector.tsx`
- Optional dev diagnostics:
- `components/analytics/utm-monitor.tsx`
- `components/analytics/validation-panel.tsx`

Important: older AdZep docs exist, but `components/analytics/adzep*.tsx` are not present in current codebase.

Important conflict note: `.github/instructions/ADZEP_IMPLEMENTATION.instructions.md` and `.github/instructions/ADZEP_SUMMARY.instructions.md` describe a broader AdZep implementation than what is currently present in this repository. Treat those as historical or aspirational unless matching files exist in the tree.

### API and data pipeline

Primary API endpoints in `app/api/*/route.ts`:

- `subscribe`: dual write path to Brevo + ConvertKit
- `sheets`: Google Sheets ingestion for quiz/form leads
- `contact`: Brevo contact + notes from contact form
- `search`: Vertex AI Discovery Engine query proxy
- `authors`: serves `lib/data/authors.json`
- `webmanifest`: serves manifest with custom headers
- `posts`: metadata existence scanner (diagnostic style)

### Operations and scripts

High-signal scripts:

- `scripts/git-workflow.sh`: local commit/push/merge workflow (`dev` -> `main`/`backup`, interactive merge prompt)
- `scripts/sync-branches.sh`: branch synchronization and return to `dev`
- `scripts/deploy_update.sh`: server-side `main` pull/build/pm2 reload
- `scripts/topnetworks-predeploy.mjs`: wrapper to orchestrator deployment preflight for repo `budgetbee`

## Key integrations and required environment variables

From runtime/API usage:

- `BREVO_API_KEY`
- `KIT_API_KEY`
- `KIT_API_URL` (optional override)
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SHEET_ID`
- `VERTEX_AI_SEARCH_API_KEY`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`
- `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED`
- `NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION`

Observed implementation note: GTM ID is currently hardcoded in `app/layout.tsx` (`GTM-MP4CPT97`) instead of sourced from an environment variable.

## Invariants and guardrails

1. Keep route SEO registry synchronized with real pages.
- If you add/remove/rename indexable routes, update `lib/seo-route-registry.ts` and verify `app/sitemap.ts` output assumptions.

2. Keep listing/catalog arrays synchronized across all discovery surfaces.
- Content metadata is duplicated across:
- `app/blog/page-client.tsx`
- `app/personal-finance/page-client.tsx`
- `app/financial-solutions/page-client.tsx`
- `app/page-client.tsx` (homepage featured/grid data)
- `components/mdx/blog-layout.tsx` (sidebar recent links)
- `lib/navigation/headerNavigation.ts` (menu + featured posts)

3. Preserve noindex behavior for funnel/tool routes.
- `next.config.mjs` explicitly noindexes quiz and recommender flows.

4. Keep UTM field continuity end-to-end.
- Frontend stores/propagates UTM values; API endpoints map both `utm_*` and plain aliases (`source`, `campaign`, etc.).

5. Do not treat stale docs as implementation truth.
- Validate against live files before editing (for example AdZep references).

## Common change recipes

### 1) Add a new personal-finance article page

1. Create route directory with `page.tsx` under `app/personal-finance/<slug>/`.
2. Add route entry in `lib/seo-route-registry.ts` with:
- pathname, title, description, image, category=`personal-finance`, contentType=`article`, date
3. Update listing surfaces:
- `app/blog/page-client.tsx`
- `app/personal-finance/page-client.tsx`
- Optional boosts: `app/page-client.tsx`, `components/mdx/blog-layout.tsx`, `lib/navigation/headerNavigation.ts`
4. Verify slug consistency across links and registry.

### 2) Add a new financial-solution product page

1. Create route directory with `page.tsx` under `app/financial-solutions/<slug>/`.
2. Add SEO registry entry with category=`financial-solutions` and contentType (`credit-card`, `loan`, or `financial-product`).
3. Update all relevant listing/menu arrays:
- `app/blog/page-client.tsx`
- `app/financial-solutions/page-client.tsx`
- `app/page-client.tsx` if featured
- `lib/navigation/headerNavigation.ts`
- `components/mdx/blog-layout.tsx` if recent sidebar exposure is needed
4. Validate internal links and cards use the same slug.

### 3) Modify analytics/ads behavior safely

1. Start from `app/layout.tsx` to see load order and client-only boundaries.
2. For Google Ads events use helpers in `components/analytics/google-ads.tsx`.
3. For GAM slots/refresh use `components/analytics/gam.tsx` contract.
4. Preserve UTM persistence/injection chain to avoid attribution loss.

### 4) Modify lead ingestion or CRM mapping

1. Check `app/api/subscribe/route.ts`, `app/api/contact/route.ts`, and `app/api/sheets/route.ts` together.
2. Keep field mapping consistent (`utm_*` plus aliases, brand fields `Pais`/`Marca`).
3. Avoid breaking duplicate handling semantics (Brevo duplicate path and Sheets 409 duplicate path).

## Validation workflow

Minimum per change set:

1. `pnpm lint`
2. `pnpm build`
3. Route smoke checks for changed pages
4. If integrations changed, test affected APIs locally

For deployment readiness aligned with TopNetworks orchestrator:

1. `node scripts/topnetworks-predeploy.mjs audit-scripts`
2. `node scripts/topnetworks-predeploy.mjs preflight --execute`

## Decision matrix: local vs orchestrated

Use only this skill when:

- change is BudgetBee-only
- localized copy/category/content updates
- repo-specific integrations or scripts

Escalate to orchestrator when:

- same pattern likely required in US/UK/MX siblings
- shared SEO/GEO/LLM indexing conventions change
- shared analytics/ad-tech behavior changes
- deployment readiness/reporting must be synchronized across repos

## Quick prompts

- "Using budgetbee-codebase-ops, add a new personal finance article and wire all required listing arrays and SEO registry entries."
- "Using budgetbee-codebase-ops, update a financial-solutions card page slug safely across registry, menus, and homepage cards."
- "Using budgetbee-codebase-ops, trace the subscribe flow end-to-end and add a new UTM field safely."
- "Use budgetbee-codebase-ops, then escalate to topnetworks-sync-orchestrator for parity validation in US/UK/MX repos."
