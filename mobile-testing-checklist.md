# Mobile Testing Checklist - Xiaomi Poco Optimization
**Version**: v1.1
**Created**: 2025-01-09
**Purpose**: Verify all Phase 2 & 3 optimizations on target devices

---

## ✅ Phase 2 Fixes - Xiaomi Poco Performance

### 1. Viewport Meta Tag
- [ ] **Test**: Open site on Xiaomi Poco
- [ ] **Expected**: Page scales correctly, no aggressive zooming
- [ ] **Expected**: Pinch-to-zoom works (user-scalable=yes)
- [ ] **Expected**: No text or UI elements cut off by notch (viewport-fit=cover)
- **Status**: ___________

### 2. Font Rendering (Android/High-DPI)
- [ ] **Test**: View all text elements on Xiaomi Poco (1080×2400px display)
- [ ] **Expected**: Text appears crisp and sharp, not blurry
- [ ] **Expected**: No text rendering artifacts or pixelation
- [ ] **Compare**: Text quality matches or exceeds desktop Safari
- **Status**: ___________

### 3. Scroll Performance
- [ ] **Test**: Scroll rapidly up/down through entire page
- [ ] **Expected**: Smooth 60fps scrolling, no jank or stutter
- [ ] **Expected**: Navbar transitions smoothly from transparent → opaque
- [ ] **Expected**: Parallax images move smoothly without lag
- [ ] **Test Tool**: Use Chrome DevTools Performance tab (if accessible)
- **Status**: ___________

### 4. Touch Target Utilities (Available in Tailwind)
- [ ] **Test**: Verify Tailwind classes are available
- [ ] **Run**: Check that `min-h-touch` and `min-w-touch` classes compile
- [ ] **Expected**: No build errors related to touch utilities
- **Status**: ___________

---

## ✅ Phase 3 Fixes - WCAG 2.2 Compliance

### 5. McKinsey Paragraph Font Size
- [ ] **Test on Mobile (<640px)**: View McKinsey paragraph
- [ ] **Expected**: Text is 16px (text-base), clearly readable
- [ ] **Previous**: Was 14px (text-sm) - too small for WCAG
- [ ] **Test on Desktop (≥640px)**: Should remain 18px (text-lg)
- **Location**: index.html:64
- **Status**: ___________

### 6. Mobile Menu ARIA Attributes
- [ ] **Test**: Open mobile menu (hamburger icon)
- [ ] **Expected**: Menu button has `aria-expanded="true"` when open
- [ ] **Expected**: Menu button has `aria-expanded="false"` when closed
- [ ] **Test with Screen Reader**: Button announces state correctly
- [ ] **Expected**: `aria-controls="mobile-menu"` links to menu element
- **Location**: index.html:145-150
- **Status**: ___________

### 7. Keyboard Navigation
- [ ] **Test**: Open mobile menu with mouse/touch
- [ ] **Test**: Press **Escape key**
- [ ] **Expected**: Menu closes immediately
- [ ] **Expected**: Focus returns to hamburger button
- [ ] **Expected**: Body scrolling re-enabled after close
- **Location**: main.js:167-172
- **Status**: ___________

---

## 🔒 Design Baseline Verification (Against design-baseline.md)

### Eyebrow Tag Specifications
- [ ] **Mobile (<640px)**: 12px font (text-xs), 32px bottom margin (mb-8)
- [ ] **Mobile**: Letter-spacing tracking-wide (0.025em)
- [ ] **Desktop (≥640px)**: 14px font (text-sm), 40px bottom margin (sm:mb-10)
- [ ] **Desktop**: Letter-spacing tracking-wider (0.05em)
- **Status**: ___________

### H1 "Positioning|Expert" Specifications
- [ ] **Mobile (<640px)**: 36px font (text-4xl)
- [ ] **Mobile**: tracking-tight (-0.025em)
- [ ] **sm (≥640px)**: 48px font (text-5xl), tracking-normal (0em)
- [ ] **lg (≥1024px)**: 72px font (text-7xl)
- [ ] **All breakpoints**: 24px bottom margin (mb-6)
- **Status**: ___________

### H2 Subheading Specifications
- [ ] **Mobile (<640px)**: 24px font (text-2xl), leading-tight (1.25)
- [ ] **Mobile**: Line breaks after "Cost" ← CRITICAL
- [ ] **Desktop (≥640px)**: 30px font (text-3xl), leading-normal (1.5)
- [ ] **Desktop**: Single line, NO line break ← CRITICAL
- [ ] **lg (≥1024px)**: 48px font (text-5xl)
- [ ] **xl (≥1280px)**: 60px font (text-6xl)
- **Status**: ___________

### McKinsey Paragraph Specifications (UPDATED)
- [ ] **Mobile (<640px)**: ✅ NOW 16px (text-base) - WCAG compliant
- [ ] **Mobile**: Max-width 768px (max-w-3xl), leading-normal (1.5)
- [ ] **sm (≥640px)**: 18px font (text-lg), leading-relaxed (1.625)
- [ ] **lg (≥1024px)**: 22px font, max-width 896px (lg:max-w-4xl)
- [ ] **xl (≥1280px)**: 26px font
- **Status**: ___________

### CTA Button Specifications
- [ ] **Mobile**: 24px horizontal padding (px-6), 12px vertical (py-3)
- [ ] **Mobile**: 16px font (text-base)
- [ ] **Desktop**: 32px horizontal padding (sm:px-8), 16px vertical (sm:py-4)
- [ ] **Desktop**: 18px font (sm:text-lg)
- [ ] **All**: 16px border radius (rounded-2xl)
- [ ] **Hover**: Scale 1.02, translate-y -0.5, bg-accent-green/30
- **Status**: ___________

---

## 📱 Device Testing Matrix

### Primary Target: Xiaomi Poco X3 (411×915 CSS pixels)
- [ ] **Test**: Full page scroll from hero to footer
- [ ] **Test**: Mobile menu open/close (tap + Escape key)
- [ ] **Test**: All text readable without zooming
- [ ] **Test**: Touch targets easy to tap (no mis-taps)
- [ ] **Test**: Page loads in <3 seconds on 4G
- **Status**: ___________

### Secondary: iPhone 14 (390×844)
- [ ] **Test**: Hero section layout matches design baseline
- [ ] **Test**: H2 line breaking correct (breaks after "Cost")
- [ ] **Test**: Mobile menu smooth animation
- **Status**: ___________

### Secondary: Samsung Galaxy S21 (360×800)
- [ ] **Test**: Narrowest mobile viewport (360px)
- [ ] **Test**: No horizontal scrolling
- [ ] **Test**: Eyebrow text wraps properly (max-w-[95vw])
- **Status**: ___________

### Tablet: iPad Air (820×1180)
- [ ] **Test**: Desktop layout activates at 768px+ (md breakpoint)
- [ ] **Test**: H2 displays as single line (no break)
- [ ] **Test**: Hamburger menu hidden, desktop nav visible
- **Status**: ___________

### Desktop: 1920×1080 (Chrome)
- [ ] **Test**: All hero elements match design baseline specs
- [ ] **Test**: H1 displays at 72px (text-7xl)
- [ ] **Test**: McKinsey paragraph at 26px (xl:text-[26px])
- [ ] **Test**: No mobile-specific styles bleeding through
- **Status**: ___________

---

## 🧪 Performance Benchmarks (Chrome DevTools)

### Core Web Vitals (Xiaomi Poco 4G)
- [ ] **LCP (Largest Contentful Paint)**: <2.5s (Good), <4s (Needs Improvement)
- [ ] **FID (First Input Delay)**: <100ms (Good), <300ms (Needs Improvement)
- [ ] **CLS (Cumulative Layout Shift)**: <0.1 (Good), <0.25 (Needs Improvement)
- **Measured**: ___________

### Lighthouse Mobile Score
- [ ] **Performance**: Target ≥85/100
- [ ] **Accessibility**: Target ≥95/100
- [ ] **Best Practices**: Target ≥90/100
- [ ] **SEO**: Target ≥95/100
- **Measured**: ___________

### Scroll Jank Test
- [ ] **Test**: Record performance while scrolling rapidly
- [ ] **Expected**: Green bar in Performance timeline (60fps)
- [ ] **Expected**: No red/orange spikes during scroll
- [ ] **Expected**: Navbar and parallax throttled (16ms/100ms intervals)
- **Status**: ___________

---

## 🔍 Visual Regression Checks

### ✅ What Should Look IDENTICAL to Before
- [ ] Eyebrow spacing relative to H1 (mb-8 sm:mb-10)
- [ ] H1 size at all breakpoints (text-4xl → text-7xl)
- [ ] H2 breaking behavior (mobile breaks, desktop doesn't)
- [ ] Button size and visual styling (padding, border-radius)
- [ ] All max-widths (max-w-3xl, lg:max-w-4xl, etc.)
- [ ] Color scheme (accent-green, luxury-300, luxury-950)
- [ ] All animations and transitions

### ⚠️ What Should Look SLIGHTLY DIFFERENT (Approved Changes)
- [ ] McKinsey paragraph: Slightly larger on mobile (16px vs 14px)
- [ ] *This is the ONLY visible change - everything else is performance/accessibility*

---

## 🚫 Things That Should NOT Have Changed

### ❌ Font Sizes (Except McKinsey Mobile)
- [ ] Eyebrow remains text-xs (mobile) / text-sm (desktop)
- [ ] H1 remains text-4xl (mobile) → text-7xl (lg)
- [ ] H2 remains text-2xl (mobile) → text-6xl (xl)
- [ ] CTA button remains text-base (mobile) / text-lg (desktop)

### ❌ Spacing (Margins, Padding)
- [ ] All mb-* classes unchanged (mb-6, mb-8, mb-10)
- [ ] All px-* and py-* classes unchanged on hero elements
- [ ] max-w-3xl and lg:max-w-4xl unchanged

### ❌ Line Heights
- [ ] H1 remains leading-tight (1.25)
- [ ] H2 remains leading-tight (mobile) / leading-normal (desktop)
- [ ] McKinsey remains leading-normal (mobile) / leading-relaxed (desktop)

### ❌ Breakpoints
- [ ] sm: 640px (not changed)
- [ ] md: 768px (not changed)
- [ ] lg: 1024px (not changed)
- [ ] xl: 1280px (not changed)

### ❌ Line Breaking
- [ ] H2 still breaks after "Cost" on mobile (<640px)
- [ ] H2 still single line on desktop (≥640px)
- [ ] No other line breaks added or removed

---

## 📊 Testing Results Summary

### Phase 2 Fixes (4/4 implemented)
- [ ] ✅ Enhanced viewport meta tag
- [ ] ✅ Android font smoothing CSS
- [ ] ✅ Throttled scroll listeners (navbar 100ms, parallax 16ms)
- [ ] ✅ Touch-friendly Tailwind utilities (min-h-touch, min-w-touch, safe-area-*)

### Phase 3 Fixes (4/4 implemented)
- [ ] ✅ McKinsey paragraph 14px→16px (WCAG 2.2 body text minimum)
- [ ] ✅ ARIA attributes (aria-expanded, aria-controls)
- [ ] ✅ Keyboard navigation (Escape key closes menu)
- [ ] ✅ Dynamic ARIA state management

### Design Baseline Compliance
- [ ] ✅ All locked specifications preserved
- [ ] ✅ Only approved change made (McKinsey font size)
- [ ] ✅ No forbidden changes (spacing, breakpoints, other font sizes)

---

## 🚀 Deployment Checklist

### Pre-Deploy
- [ ] All tests above marked as passed ✅
- [ ] Build completes without errors (`npm run build`)
- [ ] No console errors in browser DevTools
- [ ] No 404 errors for assets (images, fonts, CSS, JS)

### Deploy to Vercel
- [ ] `git add .`
- [ ] `git commit -m "Phase 2-3: Xiaomi Poco optimization + WCAG compliance"`
- [ ] `git push origin main`
- [ ] Verify Vercel auto-deploys latest commit
- [ ] Test live site: https://troyassoignon.com

### Post-Deploy Verification
- [ ] Live site loads correctly on Xiaomi Poco
- [ ] All Phase 2 & 3 fixes work on production
- [ ] DNS still resolves correctly (troyassoignon.com)
- [ ] SSL certificate valid (https:// works)

---

## 📝 Notes & Issues

**Testing Environment**:
- Device: ___________
- Browser: ___________
- OS Version: ___________
- Date Tested: ___________

**Issues Found**:
1. ___________
2. ___________
3. ___________

**User Feedback**:
- ___________

---

**Next Review**: After user testing on Xiaomi Poco device
**Contact**: Report issues to GitHub or project owner
