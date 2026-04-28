# BudgetBee — SEO, LLM Indexing & Crawler Optimization Report

**Project:** `budgetbee-next` · US financial education and comparison platform
**Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS
**Scope:** Metadata, structured data, semantic markup, sitemap, robots, AI crawler manifest
**Baseline:** Optimized TopFinanzas US/MX SEO architecture
**Prepared:** April 2026

## Executive Summary

BudgetBee has been refactored to align with the optimized TopFinanzas SEO and LLM-indexing architecture. The implementation centralizes metadata and structured data generation, adds server-rendered JSON-LD, improves crawler controls, excludes conversion surfaces from the sitemap, and adds an `llms.txt` manifest for AI systems.
The audit found 164 App Router pages, including 72 financial-solution detail pages and 29 personal-finance detail pages. Before the refactor, content pages had mostly basic `title` and `description` metadata, but no consistent canonical URLs, OpenGraph blocks, Twitter metadata, route-specific robots directives, or route-level JSON-LD. The crawler setup also blocked major AI crawlers and indexed funnel-style routes.

## Baseline Gaps Identified

### Root Metadata and Schema

- `app/layout.tsx` used a flat global title instead of a title template.
- A hardcoded viewport meta tag duplicated the exported `viewport` object.
- `maximumScale: 1` limited mobile zoom accessibility.
- Organization JSON-LD used placeholder/non-US details and was embedded manually in `<head>`.
- WebSite schema with `SearchAction` was missing.

### Content Metadata

- 103 content/archive routes were audited.
- 101 content detail pages lacked explicit canonical URLs and route-specific OpenGraph/Twitter metadata.
- Existing standalone `metadata.ts` files were present for several routes, but Next.js does not consume those as route metadata files.
- Four routes had older schema/metadata implementations that conflicted with the shared metadata approach.

### Structured Data

- Existing schema helpers rendered JSON-LD with `next/script` using `afterInteractive`, meaning structured data depended on client-side hydration.
- Most content detail routes had no BreadcrumbList, BlogPosting, CreditCard, LoanOrCredit, or FinancialProduct schema.

### Crawler Efficiency

- `app/robots.ts` blocked GPTBot, Google-Extended, CCBot, and Anthropic-AI.
- `app/sitemap.ts` included quiz/recommender conversion routes.
- No `public/llms.txt` content manifest existed.

## Implemented Changes

### Shared SEO Layer

Added `lib/seo.ts` and `lib/seo-route-registry.ts` to centralize:

- BudgetBee brand constants and canonical URL generation.
- Route metadata generation through `createRouteMetadata`.
- Noindex metadata helper for future conversion routes.
- Organization, WebSite, WebPage, BreadcrumbList, BlogPosting, CreditCard, LoanOrCredit, and FinancialProduct schema helpers.
- Registry-backed indexable route filtering for sitemap generation.
  The registry contains 110 SEO route entries: 9 static/core routes and 101 content detail routes.

### Server-Rendered JSON-LD

Added `components/seo/json-ld.tsx`, which renders escaped JSON-LD directly in server output. Existing schema helper components now use this server-rendered component instead of `next/script` with `afterInteractive`.

### Root Layout Refactor

Updated `app/layout.tsx` to:

- Use `SEO_SITE` constants.
- Add `title.template` and a consistent default title.
- Set `metadataBase`, canonical, language alternates, authors, publisher, robots, OpenGraph, and Twitter defaults.
- Remove duplicate hardcoded viewport output.
- Remove `maximumScale: 1`.
- Render Organization and WebSite JSON-LD in the body through `JsonLd`.
- Preserve existing analytics, GTM/GAM/TopAds, UTM, and navigation providers.

### Route Metadata and Structured Data

Updated all 101 content detail routes under:

- `app/financial-solutions/*/page.tsx`
- `app/personal-finance/*/page.tsx`
  Each detail page now uses `createRouteMetadata(pathname)`. Each detail route also has a colocated `layout.tsx` that injects route-specific BreadcrumbList plus either FinancialProduct/CreditCard/LoanOrCredit or BlogPosting JSON-LD.
  Client-heavy pages were split into server metadata wrappers while preserving their existing interactive behavior in colocated client components:
- `app/page.tsx` → `app/page-client.tsx`
- `app/blog/page.tsx` → `app/blog/page-client.tsx`
- `app/financial-solutions/page.tsx` → `app/financial-solutions/page-client.tsx`
- `app/personal-finance/page.tsx` → `app/personal-finance/page-client.tsx`

### Semantic Markup

Most content detail routes already used `<article>`. The audit found missing article wrappers on two financial-product detail pages, which were corrected:

- `app/financial-solutions/siren-card/page.tsx`
- `app/financial-solutions/yotta-credit-card/page.tsx`
  After the refactor, all 101 financial-solution and personal-finance detail routes have shared metadata and route-level JSON-LD; all 101 detail routes are semantically wrapped with `<article>`.

### Robots and Sitemap

Updated `app/robots.ts` to:

- Allow normal indexing of public content.
- Explicitly allow major search and AI crawler user agents including GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, YouBot, cohere-ai, CCBot, Googlebot, Google-Extended, and Bingbot.
- Disallow non-indexable routes such as API, admin, gaming, quiz, recommender, invite, UTM, and short redirect surfaces.
  Updated `app/sitemap.ts` to use `getIndexableRoutes()` from `lib/seo.ts`, excluding quiz, recommender, gaming, UTM, API, and admin surfaces from the XML sitemap.
  Updated `next.config.mjs` with `X-Robots-Tag: noindex, nofollow` headers for non-indexable conversion and debug-style routes:
- `/gaming/:path*`
- `/credit-card-recommender-p1`
- `/credit-card-recommender-p2`
- `/credit-card-recommender-p3`
- `/quiz`
- `/quiz-2`
- `/quiz-results`
- `/invit-credit-card-rec-uk`
- `/utm-test`

### AI Content Manifest

Added `public/llms.txt` with:

- Core BudgetBee page references.
- Featured financial-solution pages.
- Featured personal-finance guides.
- Legal/policy pages.
- Editorial and AI usage guidance.

## Validation Log

### Build

Command:
`npm --prefix /Users/macbookpro/GitHub/budgetbee-next run build`
Result:

- Passed.
- Compiled successfully in 14.0s.
- Generated 178/178 static pages.

### Lint

Command:
`npm --prefix /Users/macbookpro/GitHub/budgetbee-next run lint`
Result:

- Passed.
- No ESLint warnings or errors.

### Generated HTML Inspection

Representative financial product page:
`app/financial-solutions/citi-simplicity-card-benefits`
Generated output confirmed:

- `application/ld+json`: present
- `BreadcrumbList`: present
- `CreditCard` / `FinancialProduct` / `LoanOrCredit`: present
- canonical tag: present
- `og:title`: present
- `<article>`: present
  Representative personal finance page:
  `app/personal-finance/best-personal-loans`
  Generated output confirmed:
- `application/ld+json`: present
- `BreadcrumbList`: present
- `BlogPosting`: present
- canonical tag: present
- `og:title`: present
- `<article>`: present
  Homepage:
  Generated output confirmed:
- `application/ld+json`: present
- canonical tag: present
- `og:title`: present
- WebPage schema: present

### Robots and Sitemap Inspection

Generated `robots.txt` confirmed:

- AI/search crawler allowlisting is present.
- `/gaming/` and other non-indexable routes are disallowed.
- Sitemap reference points to `https://budgetbeepro.com/sitemap.xml`.
  Generated `sitemap.xml` confirmed:
- Content routes such as `https://budgetbeepro.com/financial-solutions/citi-simplicity-card-benefits` are present.
- Article routes such as `https://budgetbeepro.com/personal-finance/best-personal-loans` are present.
- Recommender route `https://budgetbeepro.com/credit-card-recommender-p1` is excluded.
- Gaming routes are excluded.

### Lighthouse and Rich Results

Lighthouse CLI is not installed globally or locally in this repository, so numeric Lighthouse scores were not captured during local validation.
Google Rich Results Test cannot be executed fully against local static output from this environment. Post-deployment validation should be run against production URLs for:

- BreadcrumbList
- BlogPosting
- CreditCard / LoanOrCredit / FinancialProduct
- Organization
- WebSite

## Post-Deployment Checklist

- Submit the updated sitemap in Google Search Console and Bing Webmaster Tools.
- Validate representative production URLs in Google Rich Results Test and Schema Markup Validator.
- Run PageSpeed Insights or Lighthouse against deployed production pages to capture LCP, CLS, and INP lab/field diagnostics.
- Monitor Search Console crawl coverage for excluded quiz/recommender/gaming routes.
- Monitor AI referral traffic and citations from Perplexity, ChatGPT browsing, Claude, Google AI Overviews, and Bing/Copilot surfaces.
