# BudgetBee Astro.js to Next.js Migration Plan

## Migration Overview

**Source Repository**: `/Users/macbookpro/GitHub/budgetbee/` (Astro.js)  
**Target Repository**: `/Users/macbookpro/GitHub/budgetbee-next/` (Next.js)  
**Template Source**: BudgetBee Next.js implementation  
**Production URL**: <https://budgetbeepro.com/>

## Objectives

1. **Complete Framework Migration**: Transform Astro.js application to Next.js 15+ with App Router
2. **Visual Parity**: Maintain pixel-perfect visual consistency with current production site
3. **AdZep Integration**: Implement comprehensive ad system with proper activation
4. **Performance**: Match or exceed current site performance metrics
5. **SEO Preservation**: Maintain all current SEO optimizations and structures

---

## Phase 1: Foundation Setup

### 1.1 Color Palette Migration

**Current BudgetBee Colors** (from `src/config/theme.json`):

```json
{
  "theme_color": {
    "primary": "#E7B739", // Yellow/Gold - Main brand color
    "secondary": "#7ED321", // Green - Secondary brand color
    "body": "#fff", // White background
    "border": "#e9e9e9", // Light gray border
    "light": "#F5F5F5" // Very light gray
  },
  "text_color": {
    "text": "#555", // Medium gray text
    "text-dark": "#222" // Dark gray/black text
  }
}
```

**Action Required**: Update `tailwind.config.js` to replace BudgetBee red/blue theme with BudgetBee yellow/green theme.

**New Tailwind Configuration**:

```javascript
colors: {
  primary: {
    DEFAULT: "#E7B739",      // BudgetBee main yellow/gold
    light: "#F0C955",         // Lighter yellow
    dark: "#D4A520",          // Darker gold
    accent: "#FFF9E6",        // Very light yellow for backgrounds
  },
  secondary: {
    DEFAULT: "#7ED321",       // BudgetBee green
    light: "#9FE351",         // Lighter green
    dark: "#6BB91A",          // Darker green
    accent: "#F0FFE6",        // Very light green for backgrounds
  },
  body: "#ffffff",
  border: "#e9e9e9",
  light: "#F5F5F5",
  text: {
    DEFAULT: "#555555",
    dark: "#222222",
  },
}
```

### 1.2 Typography Migration

**Current BudgetBee Typography**:

- **Primary Font**: Montserrat (weights: 300, 400, 600, 700)
- **Font Type**: sans-serif
- **Base Size**: 16px
- **Scale**: 1.2

**Action Required**: Replace Poppins font with Montserrat and update typography scales.

**Font Implementation**:

```typescript
// app/layout.tsx
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
```

**Typography Classes** (update `globals.css`):

```css
.text-h1 {
  @apply text-[28px] md:text-[40px] font-bold text-text-dark leading-tight;
}

.text-h2 {
  @apply text-[24px] md:text-[32px] font-bold text-text-dark leading-tight;
}

.text-h3 {
  @apply text-[20px] md:text-[28px] font-semibold text-text-dark leading-tight;
}

.text-h4 {
  @apply text-[18px] md:text-[24px] font-semibold text-text-dark leading-normal;
}

.text-h5 {
  @apply text-[16px] md:text-[20px] font-medium text-text-dark leading-normal;
}

.text-h6 {
  @apply text-[14px] md:text-[18px] font-medium text-text-dark leading-normal;
}

.text-body {
  @apply text-base text-text leading-relaxed;
}
```

### 1.3 Custom Styles Migration

**Files to Migrate**:

- `src/styles/base.css` → Integrate into `app/globals.css`
- `src/styles/buttons.css` → Create `components/ui/button.tsx` variants
- `src/styles/components.css` → Distribute to component-specific styles
- `src/styles/utilities.css` → Add to Tailwind utilities
- `src/styles/navigation.css` → Apply to Header/Navigation components
- `src/styles/ad-aware-design.css` → Keep for AdZep integration
- `src/styles/blog-mobile.css` → Apply to blog layout component

---

## Phase 2: Component Migration

### 2.1 Layout Components

#### Header Component

**Source**: `src/layouts/partials/Header.astro`  
**Target**: `components/layout/header.tsx`

**Key Features**:

- Logo with BudgetBee branding
- Navigation menu with categories
- Mobile responsive menu
- CTA button ("Get Started")
- Yellow/green color scheme

**Dependencies**:

- Logo component
- Navigation menu (desktop & mobile)
- Social media links

#### Footer Component

**Source**: `src/layouts/partials/Footer.astro`  
**Target**: `components/layout/footer.tsx`

**Variations**:

1. Full Footer (`Footer.astro`) - Default site footer
2. Compact Footer (`CompactFooter.astro`) - Minimal footer for specific pages
3. Minimal Footer (`MinimalFooter.astro`) - Quiz page footer

**Key Features**:

- Multi-column layout
- Social media integration
- Legal links (Privacy Policy, Terms, Cookie Policy)
- Copyright information
- Newsletter subscription form

#### Base Layout

**Source**: `src/layouts/Base.astro`  
**Target**: `app/layout.tsx`

**Key Features**:

- Meta tags configuration
- AdZep script loading (conditional based on page type)
- Google Tag Manager integration
- Resource hints (preconnect, dns-prefetch)
- Analytics wrapper
- Back-to-top button
- Conditional header/footer rendering

### 2.2 AdZep Integration Components

#### AdZone Components

**Source**: `src/layouts/shortcodes/AdZone.tsx`, `AdZoneTop3.tsx`  
**Target**: `components/ads/ad-zone.tsx`

**Ad Units**:

1. `us_budgetbeepro_1` - Homepage/primary placement
2. `us_budgetbeepro_2` - Secondary placement
3. `us_budgetbeepro_3` - Below title in blog posts
4. `us_budgetbeepro_4` - In-content placement

**Implementation Strategy**:

```typescript
// components/ads/ad-zone.tsx
interface AdZoneProps {
  id: 'us_budgetbeepro_1' | 'us_budgetbeepro_2' | 'us_budgetbeepro_3' | 'us_budgetbeepro_4';
  className?: string;
  style?: React.CSSProperties;
}

export default function AdZone({ id, className = '', style }: AdZoneProps) {
  return (
    <div
      id={id}
      className={`ad-zone flex justify-center items-center ${className}`}
      style={style}
    />
  );
}
```

#### AdZep Activator

**Source**: `src/components/analytics/AdZepActivator.tsx`  
**Target**: `components/analytics/adzep-activator.tsx`

**Features**:

- Single activation per page load
- Auto-sizer for ad containers
- Error handling with retry logic
- Quiz page exclusion
- Cooldown period between activations
- State management

**Reference**: Use existing implementation from budgetbee-next `components/analytics/adzep.tsx` but adapt with BudgetBee-specific logic.

#### AdZep Utilities

**Source**: `src/lib/adZepUtils.ts`  
**Target**: `lib/ads/activate-adzep.ts` (already exists, needs BudgetBee customization)

**Key Functions**:

- `activateAdZep()` - Main activation function
- `isAdZepActivated()` - Check activation state
- `resetAdZepState()` - Reset for testing
- `pageHasAdUnits()` - Detect ad containers on page

### 2.3 Blog Components

#### Blog Post Layout

**Source**: `src/layouts/PostSingle.astro`  
**Target**: `components/mdx/blog-layout.tsx`

**Features**:

- Article header with title, date, author
- Featured image
- Table of contents
- Reading time estimate
- Share buttons
- AdZone placements (below title, in content)
- Similar posts
- Author bio

#### Blog Post Card

**Source**: `src/layouts/partials/PostCardEnhanced.astro`  
**Target**: `components/blog/post-card.tsx`

**Features**:

- Featured image
- Category badge
- Title and excerpt
- Read more link
- Date and reading time
- Hover effects

#### Blog Posts Container

**Source**: `src/layouts/components/BlogPostsContainerEnhanced.astro`  
**Target**: `components/blog/posts-container.tsx`

**Features**:

- Grid layout (responsive)
- Pagination support
- Filter by category
- Loading states

#### Pagination Component

**Source**: `src/layouts/components/Pagination.astro`  
**Target**: `components/blog/pagination.tsx`

**Features**:

- Previous/Next buttons
- Page numbers
- Current page indicator
- Responsive design

### 2.4 Interactive Components

#### Quiz Components

**Source**: `src/pages/quiz.astro`, `src/pages/qz.astro`  
**Target**: `app/quiz/page.tsx`

**Features**:

- Multi-step form
- Progress indicator
- Answer validation
- Results calculation
- No AdZep activation (important!)

**Note**: Quiz has minimal footer and no ad units.

#### Credit Card Recommender

**Source**:

- `src/pages/credit-card-recommender-p1.astro`
- `src/pages/credit-card-recommender-p2.astro`
- `src/pages/credit-card-recommender-p3.astro`

**Target**:

- `app/credit-card-recommender-p1/page.tsx`
- `app/credit-card-recommender-p2/page.tsx`
- `app/credit-card-recommender-p3/page.tsx`

**Features**:

- Multi-page flow
- Form persistence
- Progress tracking
- Google Sheets integration
- Email notifications

### 2.5 Shortcode Components (for MDX)

**Source**: `src/layouts/shortcodes/`  
**Target**: `components/mdx/`

**Components to Migrate**:

1. **Accordion** - Collapsible content sections
2. **Button** - CTA buttons in content
3. **Notice** - Alert/info boxes
4. **Tabs** - Tabbed content
5. **Video** - Video embeds
6. **Youtube** - YouTube embeds
7. **AdZone** - Ad placements in content
8. **AdZoneTop3** - Below-title ad placement

---

## Phase 3: Pages Migration

### 3.1 Core Pages

| Astro Page                | Next.js Page              | Priority |
| ------------------------- | ------------------------- | -------- |
| `src/pages/index.astro`   | `app/page.tsx`            | High     |
| `src/pages/about.astro`   | `app/about-us/page.tsx`   | High     |
| `src/pages/contact.astro` | `app/contact-us/page.tsx` | High     |
| `src/pages/404.astro`     | `app/not-found.tsx`       | Medium   |

### 3.2 Blog Pages

| Astro Page                         | Next.js Page                    | Priority |
| ---------------------------------- | ------------------------------- | -------- |
| `src/pages/blog/index.astro`       | `app/blog/page.tsx`             | High     |
| `src/pages/blog/[single].astro`    | `app/blog/[slug]/page.tsx`      | High     |
| `src/pages/blog/page/[slug].astro` | `app/blog/page/[page]/page.tsx` | Medium   |

### 3.3 Category Pages

| Astro Page                                     | Next.js Page                              | Priority |
| ---------------------------------------------- | ----------------------------------------- | -------- |
| `src/pages/personal-finance/index.astro`       | `app/personal-finance/page.tsx`           | High     |
| `src/pages/personal-finance/[single].astro`    | `app/personal-finance/[slug]/page.tsx`    | High     |
| `src/pages/financial-solutions/index.astro`    | `app/financial-solutions/page.tsx`        | High     |
| `src/pages/financial-solutions/[single].astro` | `app/financial-solutions/[slug]/page.tsx` | High     |

### 3.4 Legal Pages

| Astro Page         | Next.js Page                  | Priority |
| ------------------ | ----------------------------- | -------- |
| Privacy Policy     | `app/privacy-policy/page.tsx` | Medium   |
| Terms & Conditions | `app/terms/page.tsx`          | Medium   |
| Cookie Policy      | `app/cookie-policy/page.tsx`  | Medium   |

### 3.5 Interactive Pages

| Astro Page                     | Next.js Page                | Priority |
| ------------------------------ | --------------------------- | -------- |
| `src/pages/quiz.astro`         | `app/quiz/page.tsx`         | High     |
| `src/pages/qz.astro`           | `app/qz/page.tsx`           | High     |
| `src/pages/quiz-results.astro` | `app/quiz-results/page.tsx` | High     |
| Credit Card Recommenders       | (Already exist)             | High     |

---

## Phase 4: Data & API Migration

### 4.1 API Routes

| Astro API                                        | Next.js API                        | Purpose                 |
| ------------------------------------------------ | ---------------------------------- | ----------------------- |
| `src/pages/api/contact.ts`                       | `app/api/contact/route.ts`         | Contact form submission |
| `src/pages/api/quiz-submission.ts`               | `app/api/quiz-submission/route.ts` | Quiz results handling   |
| `src/pages/api/test-google-sheets-connection.ts` | `app/api/test-sheets/route.ts`     | Testing endpoint        |

### 4.2 Content Migration

**Blog Content Location**:

- Astro: `src/content/blog/` (Astro Content Collections)
- Next.js: `content/blog/` (MDX files)

**Migration Strategy**:

1. Convert Astro Content Collections to MDX files
2. Maintain frontmatter structure
3. Update image paths
4. Verify internal links
5. Test MDX component usage

**Frontmatter Schema**:

```yaml
---
title: "Article Title"
description: "Article description"
image: "/images/blog/article-image.jpg"
date: "2024-01-15"
category: "Personal Finance" # or "Financial Solutions"
author: "BudgetBee Team"
tags: ["credit cards", "budgeting"]
---
```

### 4.3 Utilities Migration

**Key Utilities to Migrate**:

| Astro Utility                    | Next.js Utility               | Purpose                  |
| -------------------------------- | ----------------------------- | ------------------------ |
| `src/lib/utils/dateFormat.ts`    | `lib/utils/date-format.ts`    | Date formatting          |
| `src/lib/utils/readingTime.ts`   | `lib/utils/reading-time.ts`   | Reading time calculation |
| `src/lib/utils/textConverter.ts` | `lib/utils/text-converter.ts` | Text utilities           |
| `src/lib/utils/sortFunctions.ts` | `lib/utils/sort-functions.ts` | Sorting utilities        |
| `src/lib/utils/utmUtils.ts`      | `lib/utils/utm-utils.ts`      | UTM parameter handling   |

---

## Phase 5: AdZep Integration

### 5.1 Script Loading

**AdZep Script URL**: `https://autozep.adzep.io/paid/budgetbeepro.js`

**Implementation**:

```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  const isQuizPage = // detect quiz pages

  return (
    <html>
      <head>
        {!isQuizPage && (
          <Script
            src="https://autozep.adzep.io/paid/budgetbeepro.js"
            strategy="afterInteractive"
            data-cfasync="false"
          />
        )}
      </head>
      <body>
        {children}
        {!isQuizPage && <AdZepActivator />}
      </body>
    </html>
  )
}
```

### 5.2 Page-Specific Ad Placements

**Homepage**:

- `us_budgetbeepro_1` - Hero section or below hero
- `us_budgetbeepro_2` - Mid-page placement

**Blog Posts**:

- `us_budgetbeepro_3` - Below title (via MDX component)
- `us_budgetbeepro_4` - In-content (via MDX component)

**Category Pages**:

- `us_budgetbeepro_1` - Top of page
- `us_budgetbeepro_2` - Between post listings

### 5.3 Exclusion Rules

**Pages WITHOUT AdZep**:

- `/quiz`
- `/qz`
- `/quiz-results`

**Implementation**:

```typescript
// lib/ads/config.ts
export const AD_EXCLUSION_PATHS = ["/quiz", "/qz", "/quiz-results"];

export function shouldLoadAds(pathname: string): boolean {
  return !AD_EXCLUSION_PATHS.some((path) => pathname.startsWith(path));
}
```

---

## Phase 6: Static Assets Migration

### 6.1 Images

**Source**: `budgetbee/public/images/`  
**Target**: `budgetbee-next/public/images/`

**Key Images**:

- Logo: `/images/logo.png`
- Square Logo: `/images/square-logo.png`
- Favicon: `/images/favicon.png`
- OG Image: `/images/og-image.png`
- Blog post images
- Category images
- Author avatars

**Action**: Copy all images and verify paths in code.

### 6.2 Fonts

**Current**: Montserrat loaded via AstroFont  
**Target**: Next.js Google Fonts integration

**Implementation**: Already covered in Typography section.

### 6.3 Other Assets

- `ads.txt` - Copy to `public/ads.txt`
- `site.webmanifest` - Copy to `public/site.webmanifest`
- Robots.txt - Implement via `app/robots.ts`
- Sitemap - Implement via `app/sitemap.ts`

---

## Phase 7: Configuration & Settings

### 7.1 Site Configuration

**Source**: `src/config/config.json`  
**Target**: Create `lib/config.ts`

```typescript
export const siteConfig = {
  title: "BudgetBee | Your Hive for Unbiased Financial Buzz",
  baseUrl: "https://budgetbeepro.com",
  description: "BudgetBee | Your Hive for Unbiased Financial Buzz",
  logo: "/images/logo.png",
  logoWidth: 200,
  logoHeight: 38,
  squareLogo: "/images/square-logo.png",
  favicon: "/images/favicon.png",
  ogImage: "/images/og-image.png",
  tagManagerId: "GTM-MP4CPT97",
  pagination: 4,
  summaryLength: 200,
  navButton: {
    enable: true,
    label: "Get Started",
    link: "/blog",
  },
  footer: {
    copyright: "© Copyright BudgetBee 2025",
  },
};
```

### 7.2 Environment Variables

**Required Variables**:

```bash
# Google Sheets API
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=

# SendGrid
SENDGRID_API_KEY=

# GTM
NEXT_PUBLIC_GTM_ID=GTM-MP4CPT97

# Site URL
NEXT_PUBLIC_SITE_URL=https://budgetbeepro.com
```

### 7.3 Next.js Configuration

**Update `next.config.mjs`**:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.topfinanzas.com"],
    formats: ["image/avif", "image/webp"],
  },
  // MDX support
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Analytics
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
```

---

## Phase 8: SEO & Metadata

### 8.1 Structured Data

**Article Schema** (for blog posts):

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.date,
  dateModified: post.dateModified || post.date,
  author: {
    "@type": "Person",
    name: post.author,
  },
  publisher: {
    "@type": "Organization",
    name: "BudgetBee",
    logo: {
      "@type": "ImageObject",
      url: "https://budgetbeepro.com/images/logo.png",
    },
  },
};
```

### 8.2 Sitemap

**Reference**: Existing sitemap configuration in `astro.config.mjs`

**Implementation**: Use Next.js sitemap generation in `app/sitemap.ts`

**Key URLs**:

- Homepage
- About, Contact
- Blog listings and posts
- Personal Finance listings and posts
- Financial Solutions listings and posts
- Quiz pages
- Credit Card Recommender pages
- Legal pages

### 8.3 Robots.txt

**Implementation**: `app/robots.ts`

```typescript
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://budgetbeepro.com/sitemap.xml",
  };
}
```

---

## Phase 9: Testing & Validation

### 9.1 Visual Testing

**Checklist**:

- [ ] Homepage matches production exactly
- [ ] Header navigation identical
- [ ] Footer layout identical
- [ ] Blog post layout matches
- [ ] Blog listing matches
- [ ] Category pages match
- [ ] Forms (contact, quiz, recommender) match
- [ ] Mobile responsive design matches
- [ ] Typography consistent
- [ ] Colors accurate
- [ ] Spacing/padding identical
- [ ] Button styles match
- [ ] Link styles match

### 9.2 Functional Testing

**Checklist**:

- [ ] All internal links work
- [ ] Navigation menu functions correctly
- [ ] Mobile menu opens/closes
- [ ] Forms submit successfully
- [ ] Contact form sends emails
- [ ] Quiz calculates results
- [ ] Credit Card Recommender saves to Google Sheets
- [ ] Blog post pagination works
- [ ] Category filtering works
- [ ] Search functionality (if applicable)
- [ ] Social sharing buttons work

### 9.3 AdZep Testing

**Checklist**:

- [ ] AdZep script loads on appropriate pages
- [ ] `window.AdZepActivateAds()` called correctly
- [ ] Ad units render on homepage
- [ ] Ad units render on blog posts
- [ ] Ad units render on category pages
- [ ] Ad units DO NOT load on quiz pages
- [ ] No duplicate activations
- [ ] Ad auto-sizer works correctly
- [ ] Ads responsive on mobile
- [ ] No layout shift from ads

### 9.4 Performance Testing

**Metrics to Match/Exceed**:

- [ ] Lighthouse Performance Score ≥ 90
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Total Blocking Time (TBT) < 300ms

**Tools**:

- Google Lighthouse
- WebPageTest
- Chrome DevTools Performance Tab

### 9.5 SEO Testing

**Checklist**:

- [ ] All meta tags present
- [ ] Open Graph tags correct
- [ ] Twitter Card tags correct
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Sitemap generates correctly
- [ ] Robots.txt accessible
- [ ] Canonical URLs set correctly
- [ ] Alt text on all images
- [ ] Heading hierarchy correct

---

## Phase 10: Deployment

### 10.1 Pre-Deployment

**Checklist**:

- [ ] All environment variables configured
- [ ] Production build completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint warnings (critical ones)
- [ ] All tests passing
- [ ] Database/API connections tested
- [ ] Analytics tracking verified
- [ ] AdZep tracking verified

### 10.2 Deployment Steps

1. **Build Production Bundle**:

   ```bash
   npm run build
   ```

2. **Test Production Build Locally**:

   ```bash
   npm run start
   ```

3. **Deploy to Staging**:
   - Deploy to staging environment
   - Full QA testing
   - Stakeholder review

4. **Deploy to Production**:
   - Deploy to production
   - Monitor error logs
   - Monitor analytics
   - Monitor ad performance

### 10.3 Post-Deployment Monitoring

**First 24 Hours**:

- Monitor error logs every 2 hours
- Check analytics data
- Verify AdZep impressions/revenue
- Check Core Web Vitals
- Monitor user feedback

**First Week**:

- Daily error log review
- Daily analytics review
- Performance metrics tracking
- SEO ranking monitoring
- User behavior analysis

---

## Migration Timeline

### Week 1: Foundation

- Day 1-2: Color palette & typography migration
- Day 3-4: Base styles migration
- Day 5: Layout components (Header, Footer)

### Week 2: Components

- Day 1-2: Blog components
- Day 3: MDX shortcode components
- Day 4-5: Interactive components (Quiz, Recommender)

### Week 3: Pages & Content

- Day 1-2: Core pages migration
- Day 3-4: Blog content migration
- Day 5: Category pages

### Week 4: Integration & Polish

- Day 1-2: AdZep integration & testing
- Day 3: API routes & utilities
- Day 4-5: Static assets & configuration

### Week 5: Testing & QA

- Day 1-2: Visual & functional testing
- Day 3: Performance optimization
- Day 4: SEO validation
- Day 5: Final QA & documentation

### Week 6: Deployment

- Day 1-2: Staging deployment & testing
- Day 3: Production deployment
- Day 4-5: Monitoring & bug fixes

---

## Risk Mitigation

### High-Risk Items

1. **AdZep Integration Failure**
   - **Risk**: Ads don't load or activate correctly
   - **Mitigation**: Extensive testing with reference implementations; fallback mechanisms
   - **Contingency**: Keep Astro version running until ads confirmed working

2. **Visual Inconsistencies**
   - **Risk**: Site doesn't match production visually
   - **Mitigation**: Side-by-side comparison testing; pixel-perfect reproduction
   - **Contingency**: Iterative fixes based on stakeholder feedback

3. **Performance Regression**
   - **Risk**: Next.js version slower than Astro
   - **Mitigation**: Performance budgets; optimization strategy
   - **Contingency**: Implement aggressive caching and optimization

4. **SEO Impact**
   - **Risk**: Loss of search rankings during migration
   - **Mitigation**: Maintain URL structure; proper redirects; metadata preservation
   - **Contingency**: Quick rollback plan if rankings drop significantly

### Medium-Risk Items

1. **Content Migration Errors**
   - **Risk**: Missing or broken blog posts
   - **Mitigation**: Automated migration scripts; content validation
   - **Contingency**: Manual content verification and fixes

2. **Form Functionality**
   - **Risk**: Contact/Quiz forms don't work
   - **Mitigation**: Thorough testing; API endpoint validation
   - **Contingency**: Use existing API endpoints from Astro version

3. **Analytics Tracking**
   - **Risk**: GTM or AdZep tracking breaks
   - **Mitigation**: Test in staging; compare with production data
   - **Contingency**: Debug and fix tracking issues post-launch

---

## Success Criteria

### Must-Have (Launch Blockers)

- ✅ 100% visual parity with production site
- ✅ All AdZep ad units loading and activating correctly
- ✅ All pages accessible and rendering correctly
- ✅ All forms functional (contact, quiz, recommender)
- ✅ No critical errors in console
- ✅ GTM tracking working
- ✅ Mobile responsive design working
- ✅ Performance scores within 10% of current site

### Should-Have (Post-Launch Priority)

- ✅ Performance scores exceed current site
- ✅ SEO metadata optimized
- ✅ All content migrated
- ✅ Structured data implemented
- ✅ Social sharing working
- ✅ Newsletter signup working

### Nice-to-Have (Future Enhancements)

- Enhanced animations
- Advanced filtering
- Search functionality improvements
- A/B testing framework
- Enhanced analytics

---

## Rollback Plan

### Triggers for Rollback

1. AdZep ads not loading after 2 hours
2. Traffic drop > 30% within 24 hours
3. Conversion rate drop > 40% within 24 hours
4. Critical functionality broken (forms, navigation)
5. Performance degradation > 50%

### Rollback Process

1. **Immediate**:
   - Switch DNS back to Astro deployment
   - Notify stakeholders
   - Document issues

2. **Within 1 Hour**:
   - Full diagnostic of issues
   - Plan for fixes
   - Update timeline

3. **Post-Rollback**:
   - Fix issues in Next.js version
   - Re-test thoroughly
   - Schedule new deployment

---

## Maintenance Plan

### Weekly

- Review error logs
- Check performance metrics
- Update dependencies (patch versions)
- Content updates

### Monthly

- Dependency updates (minor versions)
- Performance audits
- SEO audits
- Analytics review

### Quarterly

- Major dependency updates
- Security audits
- Feature enhancements
- Stakeholder review

---

## Resources & References

### Documentation

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs/)
- [AdZep Documentation](https://adzep.io/docs)

### Internal References

- BudgetBee Next.js Implementation: `/Users/macbookpro/GitHub/kardtrust/`
- TopFinance UK Repository: (path if available)
- BudgetBee Astro.js: `/Users/macbookpro/GitHub/budgetbee/`

### Contacts

- **Project Lead**: (Name)
- **Development Team**: (Names)
- **Stakeholders**: (Names)
- **AdZep Support**: (Contact)

---

## Appendix

### A. Component Mapping Matrix

| Astro Component        | Next.js Component                        | Status  |
| ---------------------- | ---------------------------------------- | ------- |
| Base.astro             | app/layout.tsx                           | Planned |
| Header.astro           | components/layout/header.tsx             | Planned |
| Footer.astro           | components/layout/footer.tsx             | Planned |
| PostSingle.astro       | components/mdx/blog-layout.tsx           | Planned |
| PostCardEnhanced.astro | components/blog/post-card.tsx            | Planned |
| AdZone.tsx             | components/ads/ad-zone.tsx               | Planned |
| AdZepActivator.tsx     | components/analytics/adzep-activator.tsx | Planned |
| (Add all components)   |                                          |         |

### B. Route Mapping Matrix

| Astro Route      | Next.js Route | Status  |
| ---------------- | ------------- | ------- |
| /index           | /             | Planned |
| /about           | /about-us     | Planned |
| /contact         | /contact-us   | Planned |
| /blog            | /blog         | Planned |
| /blog/[single]   | /blog/[slug]  | Planned |
| (Add all routes) |               |         |

### C. Style Migration Checklist

- [ ] Colors migrated to Tailwind config
- [ ] Typography classes created
- [ ] Base styles integrated
- [ ] Component styles created
- [ ] Utility classes added
- [ ] Mobile optimizations applied
- [ ] Ad-aware design styles included
- [ ] Navigation styles applied
- [ ] Button styles created
- [ ] Form styles created

### D. Content Migration Checklist

- [ ] Blog posts converted to MDX
- [ ] Personal Finance posts converted
- [ ] Financial Solutions posts converted
- [ ] Images migrated and paths updated
- [ ] Author data migrated
- [ ] Category data migrated
- [ ] Tag data migrated
- [ ] Frontmatter validated
- [ ] Internal links verified
- [ ] MDX components tested

---

## Document Control

**Version**: 1.0  
**Created**: November 6, 2025  
**Last Updated**: November 6, 2025  
**Status**: Draft  
**Next Review**: Upon project kickoff

---

**END OF MIGRATION PLAN**
