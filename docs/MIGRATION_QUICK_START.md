# BudgetBee Migration Quick Start Guide

## What's Been Done ✅

### Phase 1: Foundation (COMPLETED)

#### 1. Color Palette Migration ✅

- **Updated** `tailwind.config.js` with BudgetBee brand colors:
  - Primary: `#E7B739` (Yellow/Gold)
  - Secondary: `#7ED321` (Green)
  - Text colors: `#555` (default), `#222` (dark)
- **Removed** BudgetBee red/blue theme
- **Added** proper color variants (light, dark, accent)

#### 2. Typography Migration ✅

- **Replaced** Inter font with Montserrat (BudgetBee brand font)
- **Updated** `app/layout.tsx` to import and use Montserrat
- **Configured** font weights: 300, 400, 600, 700
- **Updated** `tailwind.config.js` with font-family config

#### 3. Style System Migration ✅

- **Updated** `app/globals.css` with BudgetBee typography scales:
  - H1-H6 heading styles matching Astro implementation
  - Responsive typography (mobile/desktop breakpoints)
  - Body text, links, lists styles
  - Card, badge, and navigation styles
- **Maintained** Tailwind `@apply` directives for consistency

#### 4. Configuration Setup ✅

- **Created** `lib/config/site-config.ts` with:
  - Site metadata and branding
  - AdZep configuration
  - Color and font definitions
  - Helper functions for ad loading logic
  - Quiz page exclusion rules

#### 5. Documentation ✅

- **Created** `docs/ASTRO_TO_NEXTJS_MIGRATION_PLAN.md` - Comprehensive migration
  plan
- **Created** this Quick Start Guide

---

## What's Next 🚀

### Immediate Next Steps (Priority Order)

#### 1. Static Assets Migration (HIGH PRIORITY)

**Time Estimate**: 1-2 hours

```bash
# Copy images from original BudgetBee
cp -r /Users/macbookpro/GitHub/budgetbee/public/images/* /Users/macbookpro/GitHub/budgetbee-next/public/images/

# Verify critical assets:
# - /images/logo.png
# - /images/square-logo.png
# - /images/favicon.png
# - /images/og-image.png
```

**Validation**:

- [ ] Logo displays correctly
- [ ] Favicon appears in browser tab
- [ ] OG image works in social share previews

#### 2. Header Component Migration (HIGH PRIORITY)

**Time Estimate**: 3-4 hours

**Source**:
`/Users/macbookpro/GitHub/budgetbee/src/layouts/partials/Header.astro`  
**Target**: `components/layout/header.tsx`

**Key Features to Implement**:

- Logo with BudgetBee branding
- Desktop navigation menu
- Mobile hamburger menu
- "Get Started" CTA button (yellow/green styling)
- Sticky header on scroll
- Category dropdown menus

**Code Snippet to Start**:

```tsx
// components/layout/header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/config/site-config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={siteConfig.site.logo}
              alt={siteConfig.site.logoText}
              width={siteConfig.site.logoWidth}
              height={siteConfig.site.logoHeight}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/personal-finance" className="nav-link">
              Personal Finance
            </Link>
            <Link href="/financial-solutions" className="nav-link">
              Financial Solutions
            </Link>
            <Link href="/about-us" className="nav-link">
              About
            </Link>
            <Link href="/contact-us" className="nav-link">
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href={siteConfig.navButton.link}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {siteConfig.navButton.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* Add hamburger icon */}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">{/* Mobile navigation items */}</div>
        )}
      </div>
    </header>
  );
}
```

**Integration**:

```tsx
// app/layout.tsx
import Header from "@/components/layout/header";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
```

#### 3. Footer Component Migration (HIGH PRIORITY)

**Time Estimate**: 2-3 hours

**Source**:
`/Users/macbookpro/GitHub/budgetbee/src/layouts/partials/Footer.astro`  
**Target**: `components/layout/footer.tsx`

**Key Features**:

- Multi-column layout
- Social media links
- Quick links (Blog, Personal Finance, Financial Solutions)
- Legal links (Privacy, Terms, Cookies)
- Newsletter signup
- Copyright notice

#### 4. AdZep Integration (CRITICAL)

**Time Estimate**: 4-5 hours

**Files to Create/Update**:

- `components/ads/ad-zone.tsx` - Ad container component
- `components/analytics/adzep-activator.tsx` - Ad activation logic
- Update `app/layout.tsx` - Load AdZep script

**AdZep Script Loading**:

```tsx
// app/layout.tsx
import Script from "next/script";
import { siteConfig, shouldLoadAds } from "@/lib/config/site-config";

export default function RootLayout({ children }) {
  // Detect if current page should load ads
  // This will need pathname from usePathname() in a client component

  return (
    <html>
      <head>
        <Script
          src={siteConfig.adZep.scriptUrl}
          strategy="afterInteractive"
          data-cfasync="false"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Ad Zone Component**:

```tsx
// components/ads/ad-zone.tsx
import { getAdUnitId } from "@/lib/config/site-config";

interface AdZoneProps {
  unit: "unit1" | "unit2" | "unit3" | "unit4";
  className?: string;
}

export default function AdZone({ unit, className = "" }: AdZoneProps) {
  const id = getAdUnitId(unit);

  return (
    <div
      id={id}
      className={`ad-zone flex justify-center items-center min-h-[100px] ${className}`}
    />
  );
}
```

**AdZep Activator** (copy from original BudgetBee with adaptations):

```tsx
// components/analytics/adzep-activator.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { shouldLoadAds } from "@/lib/config/site-config";

export default function AdZepActivator() {
  const pathname = usePathname();
  const activatedRef = useRef(false);

  useEffect(() => {
    if (!shouldLoadAds(pathname)) {
      console.log("[AdZep] Skipping ad activation on:", pathname);
      return;
    }

    if (activatedRef.current) return;
    activatedRef.current = true;

    const activateAds = async () => {
      if (typeof window.AdZepActivateAds === "function") {
        try {
          window.AdZepActivateAds();
          console.log("[AdZep] Ads activated successfully");
        } catch (error) {
          console.error("[AdZep] Activation error:", error);
        }
      }
    };

    // Wait for script to load
    const checkAndActivate = setInterval(() => {
      if (typeof window.AdZepActivateAds === "function") {
        activateAds();
        clearInterval(checkAndActivate);
      }
    }, 100);

    return () => clearInterval(checkAndActivate);
  }, [pathname]);

  return null;
}

// Type declaration
declare global {
  interface Window {
    AdZepActivateAds?: () => void;
  }
}
```

#### 5. Homepage Migration (HIGH PRIORITY)

**Time Estimate**: 4-6 hours

**Source**: `/Users/macbookpro/GitHub/budgetbee/src/pages/index.astro`  
**Target**: `app/page.tsx`

**Key Sections**:

- Hero section with headline and CTA
- Featured blog posts
- Category highlights (Personal Finance, Financial Solutions)
- Trust indicators / USPs
- Newsletter signup
- AdZep ad placements

#### 6. Blog System Migration (MEDIUM PRIORITY)

**Time Estimate**: 6-8 hours

**Tasks**:

1. Create blog listing page: `app/blog/page.tsx`
2. Create blog post template: `app/blog/[slug]/page.tsx`
3. Convert Astro content collections to MDX files
4. Create MDX components for blog content
5. Implement pagination
6. Add category filtering

**MDX Components Needed**:

- `components/mdx/accordion.tsx`
- `components/mdx/button.tsx`
- `components/mdx/notice.tsx`
- `components/mdx/tabs.tsx`
- `components/mdx/video.tsx`
- `components/mdx/youtube.tsx`
- `components/mdx/ad-zone.tsx` (for in-content ads)

---

## Development Workflow

### 1. Start Development Server

```bash
cd /Users/macbookpro/GitHub/budgetbee-next
npm run dev
```

Server runs on: `http://localhost:3007`

### 2. Reference Original BudgetBee

Original Astro site files: `/Users/macbookpro/GitHub/budgetbee/`

Use this to compare:

- Styles and layouts
- Component structure
- Content organization
- AdZep placement

### 3. Test as You Go

**Visual Testing**:

- Compare side-by-side with production site: `https://budgetbeepro.com`
- Check colors match exactly
- Verify typography scales
- Test responsive breakpoints

**Functional Testing**:

- Test navigation
- Verify links work
- Check forms submit
- Ensure ads load (when implemented)

### 4. Commit Regularly

```bash
# Use the automated git workflow
bash ./scripts/git-workflow.sh
```

---

## Component Migration Priority Matrix

### MUST HAVE (Week 1-2)

- [x] Colors and typography ✅
- [x] Site configuration ✅
- [ ] Header component
- [ ] Footer component
- [ ] Homepage
- [ ] AdZep integration
- [ ] Static assets

### SHOULD HAVE (Week 3-4)

- [ ] Blog listing page
- [ ] Blog post template
- [ ] Category pages (Personal Finance, Financial Solutions)
- [ ] Contact page
- [ ] About page
- [ ] API routes (contact form, quiz)

### NICE TO HAVE (Week 5-6)

- [ ] Quiz pages
- [ ] Credit Card Recommender (already exists, may need styling updates)
- [ ] Search functionality
- [ ] Newsletter integration
- [ ] Performance optimizations

---

## Common Patterns to Follow

### 1. Color Usage

```tsx
// Primary (Yellow/Gold) - Main CTAs and brand elements
className = "bg-primary hover:bg-primary-dark text-white";

// Secondary (Green) - Secondary CTAs and accents
className = "bg-secondary hover:bg-secondary-dark text-white";

// Text colors
className = "text-text"; // Default #555
className = "text-text-dark"; // Headings #222
```

### 2. Typography Classes

```tsx
// Headings
<h1 className="text-h1">Large Heading</h1>
<h2 className="text-h2">Section Heading</h2>
<h3 className="text-h3">Subsection Heading</h3>

// Body text
<p className="text-body">Regular paragraph text</p>

// Links
<a className="text-link">Clickable Link</a>
```

### 3. Component Structure

```tsx
// components/[category]/[component-name].tsx
"use client"; // Only if using hooks/interactivity

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site-config";

interface ComponentProps {
  // Props definition
}

export default function ComponentName({ prop }: ComponentProps) {
  return <div className="container">{/* Component content */}</div>;
}
```

### 4. Image Optimization

```tsx
import Image from "next/image";

<Image
  src="https://media.topfinanzas.com/images/budgetbee/example.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={false} // true only for above-fold images
  className="rounded-lg"
/>;
```

---

## Testing Checklist

### Visual Parity ✓

- [ ] Colors match production exactly
- [ ] Font family is Montserrat
- [ ] Typography scales match (mobile + desktop)
- [ ] Spacing and layout identical
- [ ] Buttons styled correctly (yellow/green)
- [ ] Links styled correctly
- [ ] Footer layout matches
- [ ] Header matches with logo

### Functional Testing ✓

- [ ] All internal links work
- [ ] Navigation menu functions
- [ ] Mobile menu opens/closes
- [ ] Forms submit correctly
- [ ] AdZep script loads
- [ ] AdZep ads activate
- [ ] No console errors

### Performance ✓

- [ ] Lighthouse score ≥ 90
- [ ] Images optimized (WebP)
- [ ] Fonts load efficiently
- [ ] No layout shifts
- [ ] Fast page loads

---

## Troubleshooting

### Colors Not Showing

1. Check `tailwind.config.js` has BudgetBee colors
2. Verify CSS classes use correct color names
3. Rebuild: `npm run build` then `npm run dev`

### Fonts Not Loading

1. Check `app/layout.tsx` imports Montserrat
2. Verify font variable in body className
3. Check `tailwind.config.js` fontFamily config

### AdZep Not Working

1. Check script URL is correct in config
2. Verify activator component is mounted
3. Check quiz pages are excluded
4. Look for console errors

### Build Errors

1. Check TypeScript errors: `npm run build`
2. Fix import paths (use `@/` alias)
3. Verify all required props passed to components

---

## Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Docs](https://mdxjs.com/)

### Internal References

- Original BudgetBee: `/Users/macbookpro/GitHub/budgetbee/`
- Migration Plan: `docs/ASTRO_TO_NEXTJS_MIGRATION_PLAN.md`
- Site Config: `lib/config/site-config.ts`

### Production Site

- Live Site: <https://budgetbeepro.com>
- Use for visual comparison and content reference

---

## Getting Help

### Before Asking

1. Check the migration plan document
2. Review original Astro component
3. Look at BudgetBee implementation for patterns
4. Check console for errors

### Questions to Ask

- What is the expected visual output?
- What does the Astro version do?
- Are there any specific BudgetBee requirements?
- How does this affect AdZep integration?

---

## Progress Tracking

Update this section as you complete tasks:

### Completed ✅

- [x] Color palette migration
- [x] Typography migration
- [x] Site configuration
- [x] Global styles update
- [x] Font integration

### In Progress 🚧

- [ ] Header component
- [ ] Footer component
- [ ] Static assets
- [ ] AdZep integration

### Not Started 📋

- [ ] Homepage
- [ ] Blog system
- [ ] Category pages
- [ ] Legal pages
- [ ] Forms and API routes

---

## Next Developer Session

**Suggested Focus**: Header Component Migration

**Steps**:

1. Review `/Users/macbookpro/GitHub/budgetbee/src/layouts/partials/Header.astro`
2. Create `components/layout/header.tsx`
3. Implement desktop navigation
4. Add mobile menu
5. Style with BudgetBee colors
6. Integrate into `app/layout.tsx`
7. Test on localhost:3007

**Expected Time**: 3-4 hours

---

**Last Updated**: November 6, 2025  
**Migration Status**: Foundation Complete (Phase 1 ✅)  
**Next Phase**: Layout Components (Phase 2)
