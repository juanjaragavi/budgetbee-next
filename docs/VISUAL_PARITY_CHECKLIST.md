# BudgetBee Visual Parity Checklist

## Purpose

This checklist ensures the Next.js implementation matches the original Astro.js
production site (https://budgetbeepro.com) exactly.

---

## Brand Elements

### Colors ✅

- [x] Primary Yellow/Gold: `#E7B739`
- [x] Secondary Green: `#7ED321`
- [x] Body Background: `#FFFFFF`
- [x] Border Color: `#E9E9E9`
- [x] Light Background: `#F5F5F5`
- [x] Text Default: `#555555`
- [x] Text Dark: `#222222`

### Typography ✅

- [x] Font Family: Montserrat
- [x] Font Weights: 300, 400, 600, 700
- [x] Base Font Size: 16px
- [x] Font Scale: 1.2

---

## Layout Components

### Header

- [ ] Logo displays correctly (200x38px)
- [ ] Logo links to homepage
- [ ] Desktop navigation menu
  - [ ] Blog link
  - [ ] Personal Finance link
  - [ ] Financial Solutions link
  - [ ] About Us link
  - [ ] Contact Us link
- [ ] Mobile hamburger menu
  - [ ] Opens/closes on tap
  - [ ] All menu items accessible
  - [ ] Smooth animation
- [ ] "Get Started" CTA button
  - [ ] Yellow background (`#E7B739`)
  - [ ] White text
  - [ ] Hover effect (darker yellow)
  - [ ] Links to `/blog`
- [ ] Sticky header on scroll
- [ ] Header shadow/border
- [ ] Responsive breakpoints
  - [ ] Mobile (< 768px)
  - [ ] Tablet (768px - 1024px)
  - [ ] Desktop (> 1024px)

### Footer

- [ ] Dark background color matches
- [ ] Multi-column layout
  - [ ] Column 1: About/Description
  - [ ] Column 2: Quick Links
  - [ ] Column 3: Categories
  - [ ] Column 4: Legal/Social
- [ ] Social media icons
  - [ ] Correct size and spacing
  - [ ] Hover effects
  - [ ] Link to social profiles
- [ ] Quick Links section
  - [ ] Blog
  - [ ] Personal Finance
  - [ ] Financial Solutions
  - [ ] About Us
  - [ ] Contact Us
- [ ] Legal Links
  - [ ] Privacy Policy
  - [ ] Terms & Conditions
  - [ ] Cookie Policy
- [ ] Newsletter signup form
  - [ ] Input field styling
  - [ ] Submit button styling
  - [ ] Form functionality
- [ ] Copyright text
  - [ ] Correct text: "© Copyright BudgetBee 2025"
  - [ ] Centered alignment
  - [ ] Proper spacing

---

## Homepage Components

### Hero Section

- [ ] Hero headline matches
- [ ] Subheadline matches
- [ ] CTA button(s)
  - [ ] Yellow primary CTA
  - [ ] Correct text
  - [ ] Proper link
  - [ ] Hover effect
- [ ] Hero image/background
  - [ ] Correct image
  - [ ] Proper sizing
  - [ ] Responsive behavior
- [ ] Spacing and padding match

### Featured Content Section

- [ ] Section title styling
- [ ] Card layout (grid)
  - [ ] Correct number of columns
  - [ ] Proper spacing between cards
  - [ ] Responsive grid
- [ ] Featured post cards
  - [ ] Image displays correctly
  - [ ] Title styling
  - [ ] Excerpt/description
  - [ ] Category badge
  - [ ] Read more link
  - [ ] Hover effects
- [ ] "View All" link
  - [ ] Styling matches
  - [ ] Correct destination

### Categories Highlight

- [ ] Personal Finance section
  - [ ] Section title
  - [ ] Icon/image
  - [ ] Description
  - [ ] CTA button
- [ ] Financial Solutions section
  - [ ] Section title
  - [ ] Icon/image
  - [ ] Description
  - [ ] CTA button

### Trust Indicators / USPs

- [ ] Icons/graphics match
- [ ] Text content matches
- [ ] Layout and spacing
- [ ] Colors consistent

### Newsletter Section

- [ ] Section background color
- [ ] Headline text
- [ ] Subtext
- [ ] Email input field
  - [ ] Placeholder text
  - [ ] Border styling
  - [ ] Focus state
- [ ] Subscribe button
  - [ ] Background color (yellow)
  - [ ] Text color
  - [ ] Hover effect

---

## Blog Components

### Blog Listing Page (`/blog`)

- [ ] Page title styling
- [ ] Blog posts grid
  - [ ] Correct number of columns
  - [ ] Proper spacing
  - [ ] Responsive layout
- [ ] Blog post cards
  - [ ] Featured image
    - [ ] Correct size
    - [ ] Proper crop
  - [ ] Category badge
    - [ ] Background color
    - [ ] Text color
    - [ ] Rounded corners
  - [ ] Post title
    - [ ] Font size
    - [ ] Font weight
    - [ ] Line height
  - [ ] Excerpt
    - [ ] Text length
    - [ ] Styling
  - [ ] Meta information
    - [ ] Date format
    - [ ] Reading time
    - [ ] Author (if shown)
  - [ ] Read more link
    - [ ] Text color
    - [ ] Hover effect
- [ ] Pagination
  - [ ] Page numbers
  - [ ] Previous/Next buttons
  - [ ] Active page styling
  - [ ] Hover states
- [ ] Category filter (if exists)
  - [ ] All categories option
  - [ ] Active filter styling
  - [ ] Filtering functionality

### Blog Post Single Page

- [ ] Article header
  - [ ] Title styling (H1)
  - [ ] Meta information
    - [ ] Date
    - [ ] Author
    - [ ] Reading time
    - [ ] Category
  - [ ] Share buttons
    - [ ] Correct platforms
    - [ ] Icon styling
    - [ ] Functionality
- [ ] Featured image
  - [ ] Full width
  - [ ] Proper aspect ratio
  - [ ] Caption (if exists)
- [ ] AdZep ad unit below title (`us_budgetbeepro_3`)
  - [ ] Proper spacing
  - [ ] Container styling
  - [ ] Ad loads correctly
- [ ] Article content
  - [ ] Typography matches
    - [ ] Paragraph spacing
    - [ ] Heading styles (H2-H6)
    - [ ] List styling
    - [ ] Blockquote styling
  - [ ] Link styling
    - [ ] Color (yellow)
    - [ ] Hover effect
    - [ ] Underline behavior
  - [ ] Images in content
    - [ ] Proper sizing
    - [ ] Captions
    - [ ] Alignment options
  - [ ] MDX components
    - [ ] Accordion
    - [ ] Notice boxes
    - [ ] Tabs
    - [ ] Buttons
    - [ ] Video embeds
- [ ] AdZep in-content ad (`us_budgetbeepro_4`)
  - [ ] Placement position
  - [ ] Spacing
  - [ ] Loads correctly
- [ ] Table of Contents (if exists)
  - [ ] Position (sidebar or inline)
  - [ ] Active section highlighting
  - [ ] Smooth scrolling
  - [ ] Sticky behavior
- [ ] Author bio
  - [ ] Author image
  - [ ] Name styling
  - [ ] Bio text
  - [ ] Social links
- [ ] Similar/Related posts
  - [ ] Section title
  - [ ] Post cards layout
  - [ ] Card styling
  - [ ] Links work correctly
- [ ] Comments section (if exists)

---

## Category Pages

### Personal Finance (`/personal-finance`)

- [ ] Category header
  - [ ] Title
  - [ ] Description
  - [ ] Background/hero image
- [ ] Posts grid matches blog listing
- [ ] Subcategory filters (if exists)
  - [ ] Credit Cards
  - [ ] Loans
  - [ ] Budgeting
  - [ ] Etc.
- [ ] Pagination
- [ ] AdZep ad units
  - [ ] Top of page (`us_budgetbeepro_1`)
  - [ ] Between posts (`us_budgetbeepro_2`)

### Financial Solutions (`/financial-solutions`)

- [ ] Same checks as Personal Finance
- [ ] Content specific to this category

---

## Interactive Pages

### Quiz Page (`/quiz`)

- [ ] **CRITICAL**: No AdZep ads load
- [ ] Quiz title and description
- [ ] Step indicator
  - [ ] Visual progress bar
  - [ ] Step numbers
- [ ] Question display
  - [ ] Question text styling
  - [ ] Answer options
    - [ ] Radio buttons or cards
    - [ ] Selected state
    - [ ] Hover effects
- [ ] Navigation buttons
  - [ ] Previous button (if applicable)
  - [ ] Next button
  - [ ] Submit button (final step)
  - [ ] Button styling matches brand
- [ ] Form validation
  - [ ] Required field errors
  - [ ] Error message styling
- [ ] Minimal footer (not full footer)
  - [ ] Only essential links
  - [ ] Copyright

### Quiz Results (`/quiz-results`)

- [ ] Results display
  - [ ] Score/outcome
  - [ ] Recommendations
  - [ ] Styling matches brand
- [ ] Call to action
  - [ ] Next steps
  - [ ] Buttons styled correctly
- [ ] No ads (confirm)

### Credit Card Recommender (P1, P2, P3)

- [ ] Form steps
  - [ ] Step 1 styling
  - [ ] Step 2 styling
  - [ ] Step 3 styling
- [ ] Progress indicator
- [ ] Form fields
  - [ ] Input styling
  - [ ] Dropdown styling
  - [ ] Checkbox/radio styling
- [ ] Navigation between steps
- [ ] Form persistence (data saved between steps)
- [ ] Submission
  - [ ] Success message
  - [ ] Error handling
- [ ] AdZep ads (if applicable)

---

## Other Pages

### About Us (`/about-us`)

- [ ] Page title
- [ ] Content sections
  - [ ] Mission statement
  - [ ] Team section (if exists)
  - [ ] Company history
- [ ] Images
  - [ ] Team photos
  - [ ] Office photos
- [ ] Typography and spacing
- [ ] CTA sections

### Contact Us (`/contact-us`)

- [ ] Page title
- [ ] Contact form
  - [ ] Name field
  - [ ] Email field
  - [ ] Message textarea
  - [ ] Subject field (if exists)
  - [ ] Submit button
    - [ ] Yellow background
    - [ ] White text
    - [ ] Hover effect
  - [ ] Form validation
    - [ ] Required field indicators
    - [ ] Error messages
    - [ ] Success message
- [ ] Contact information
  - [ ] Email address
  - [ ] Phone (if exists)
  - [ ] Address (if exists)
- [ ] Social media links

### Privacy Policy, Terms, Cookie Policy

- [ ] Page titles
- [ ] Content formatting
  - [ ] Headings hierarchy
  - [ ] Paragraph spacing
  - [ ] List styling
- [ ] Last updated date
- [ ] Legal text formatting

---

## AdZep Integration

### Script Loading

- [ ] AdZep script loads on appropriate pages
- [ ] Script URL correct: `https://autozep.adzep.io/paid/budgetbeepro.js`
- [ ] `data-cfasync="false"` attribute present
- [ ] Script loads with `afterInteractive` strategy

### Ad Units

- [ ] `us_budgetbeepro_1` container exists
- [ ] `us_budgetbeepro_2` container exists
- [ ] `us_budgetbeepro_3` container exists (blog posts)
- [ ] `us_budgetbeepro_4` container exists (blog content)

### Ad Activation

- [ ] `window.AdZepActivateAds()` called correctly
- [ ] Activation happens on page load
- [ ] Activation happens on navigation
- [ ] No duplicate activations
- [ ] Cooldown period respected

### Ad Exclusions

- [ ] NO ads on `/quiz`
- [ ] NO ads on `/qz`
- [ ] NO ads on `/quiz-results`
- [ ] Script doesn't load on excluded pages

### Ad Auto-Sizer

- [ ] Ad containers resize properly
- [ ] No layout shifts
- [ ] Ads responsive on mobile
- [ ] Container overflow handled

### Error Handling

- [ ] Ad blocker doesn't break site
- [ ] CORS errors suppressed (expected)
- [ ] Network errors handled gracefully
- [ ] Console logging (in dev mode)

---

## Responsive Design

### Mobile (< 768px)

- [ ] Header
  - [ ] Hamburger menu visible
  - [ ] Logo sized appropriately
  - [ ] Menu items accessible
- [ ] Footer
  - [ ] Columns stack vertically
  - [ ] All links accessible
  - [ ] Newsletter form usable
- [ ] Content
  - [ ] Typography scales down
  - [ ] Images resize properly
  - [ ] No horizontal scroll
  - [ ] Touch targets adequate size
- [ ] Forms
  - [ ] Input fields full width
  - [ ] Buttons properly sized
  - [ ] Easy to tap/fill
- [ ] Ads
  - [ ] Resize for mobile
  - [ ] Don't break layout
  - [ ] Proper spacing

### Tablet (768px - 1024px)

- [ ] Layout adapts properly
- [ ] Grid columns adjust
- [ ] Typography intermediate sizes
- [ ] Navigation accessible

### Desktop (> 1024px)

- [ ] Full layout displays
- [ ] Proper use of white space
- [ ] Max-width containers
- [ ] All features accessible

---

## Performance

### Core Web Vitals

- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

### Loading Performance

- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Speed Index < 3.4s

### Optimization

- [ ] Images optimized (WebP format)
- [ ] Images lazy loaded (below fold)
- [ ] Fonts loaded efficiently
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] No render-blocking resources

### Lighthouse Scores

- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 90
- [ ] Best Practices ≥ 90
- [ ] SEO ≥ 90

---

## SEO

### Meta Tags

- [ ] Title tag present and accurate
- [ ] Meta description present
- [ ] Keywords meta tag (optional)
- [ ] Canonical URL set
- [ ] Robots meta (appropriate)

### Open Graph

- [ ] OG title
- [ ] OG description
- [ ] OG image
- [ ] OG URL
- [ ] OG type
- [ ] OG site_name

### Twitter Card

- [ ] Twitter card type
- [ ] Twitter title
- [ ] Twitter description
- [ ] Twitter image

### Structured Data

- [ ] Article schema (blog posts)
- [ ] Organization schema
- [ ] Website schema
- [ ] Breadcrumb schema (if exists)

### Technical SEO

- [ ] Sitemap exists and correct
- [ ] Robots.txt present
- [ ] 404 page exists
- [ ] Internal links work
- [ ] No broken links
- [ ] URL structure consistent
- [ ] HTTPS enabled

---

## Functionality

### Navigation

- [ ] All menu links work
- [ ] Logo links to homepage
- [ ] Breadcrumbs work (if exists)
- [ ] Back button works
- [ ] Browser history tracking

### Forms

- [ ] Contact form submits
- [ ] Quiz form works
- [ ] Recommender form works
- [ ] Newsletter signup works
- [ ] Validation works
- [ ] Error messages display
- [ ] Success messages display
- [ ] Email notifications sent (if applicable)

### Search (if exists)

- [ ] Search box functional
- [ ] Results display correctly
- [ ] No results message
- [ ] Filters work

### Filtering

- [ ] Category filters work
- [ ] Tag filters work (if exists)
- [ ] Date filters work (if exists)
- [ ] Clear filters option

### Pagination

- [ ] Next/Previous work
- [ ] Page numbers work
- [ ] Active page highlighted
- [ ] URL updates with page number

---

## Browser Compatibility

### Desktop Browsers

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers

- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Firefox (Android)

---

## Accessibility

### Keyboard Navigation

- [ ] Tab order logical
- [ ] Skip to main content link
- [ ] Focus indicators visible
- [ ] All interactive elements keyboard accessible

### Screen Readers

- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Semantic HTML structure
- [ ] Headings hierarchy correct

### Color Contrast

- [ ] Text meets WCAG AA (4.5:1 for normal, 3:1 for large)
- [ ] Yellow on white sufficient contrast (or avoided)
- [ ] Green on white sufficient contrast
- [ ] Interactive elements have adequate contrast

### Forms

- [ ] Labels associated with inputs
- [ ] Error messages accessible
- [ ] Required fields indicated
- [ ] Help text provided

---

## Analytics

### Google Tag Manager

- [ ] GTM container loaded
- [ ] GTM ID correct: `GTM-MP4CPT97`
- [ ] NoScript fallback present
- [ ] Tags firing correctly

### Custom Events (if applicable)

- [ ] Page views tracked
- [ ] Form submissions tracked
- [ ] Link clicks tracked
- [ ] AdZep events tracked

---

## Security

### HTTPS

- [ ] Site served over HTTPS
- [ ] No mixed content warnings
- [ ] SSL certificate valid

### Forms

- [ ] CSRF protection
- [ ] Input sanitization
- [ ] Rate limiting (if applicable)

### API Routes

- [ ] Proper error handling
- [ ] No sensitive data exposed
- [ ] CORS configured correctly

---

## Edge Cases

### Error States

- [ ] 404 page displays correctly
- [ ] 500 error page (if custom)
- [ ] Network error handling
- [ ] Ad blocker doesn't break site

### Empty States

- [ ] No search results message
- [ ] No blog posts message (shouldn't happen)
- [ ] Empty category message

### Long Content

- [ ] Very long blog posts
- [ ] Many pagination pages
- [ ] Lots of comments (if exists)

### Ad Blockers

- [ ] Site functions without ads
- [ ] No JavaScript errors
- [ ] Content still accessible
- [ ] Graceful degradation

---

## Final Checks

### Before Launch

- [ ] All images have alt text
- [ ] All forms tested and working
- [ ] All links tested (internal and external)
- [ ] Mobile testing on real devices
- [ ] Cross-browser testing complete
- [ ] Performance benchmarks met
- [ ] SEO audit passed
- [ ] Accessibility audit passed
- [ ] Analytics verified
- [ ] AdZep revenue tracking verified

### Post-Launch Monitoring (First 24 Hours)

- [ ] Check error logs hourly
- [ ] Monitor analytics data
- [ ] Verify AdZep impressions/revenue
- [ ] Check Core Web Vitals in Search Console
- [ ] Monitor user feedback
- [ ] Check for broken links reported
- [ ] Verify forms receiving submissions

---

## Notes

### Known Differences (Acceptable)

Document any intentional differences from production:

-
-
-

### Issues to Fix

## Document any issues found:

-
-

### Questions for Stakeholders

-
-
- ***

  **Last Updated**: November 6, 2025  
  **Production Reference**: https://budgetbeepro.com  
  **Status**: Ready for component-by-component migration
