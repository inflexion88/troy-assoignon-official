# Design Baseline - LOCKED SPECIFICATIONS
**Created**: 2025-01-09
**Purpose**: Preserve design integrity during mobile optimization
**Status**: 🔒 LOCKED - Any changes must maintain these specifications

---

## Critical Rule
**NO VISUAL CHANGES ALLOWED** - All fixes must be additive (padding, invisible spacing) or performance-only (throttling, optimization)

---

## Hero Section Specifications

### Eyebrow Tag (Line 36-37)
```html
<div class="inline-block relative mb-8 sm:mb-10 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-luxury-900/70 backdrop-blur-lg border border-luxury-700/30 mt-12 sm:mt-[50px] max-w-[95vw]">
  <span class="text-luxury-200 text-xs sm:text-sm tracking-wide sm:tracking-wider text-center block leading-tight">
```

**Locked Measurements**:
- Mobile (<640px):
  - Font: 12px (text-xs)
  - Letter-spacing: 0.025em (tracking-wide)
  - Bottom margin: 32px (mb-8)
  - Padding: 12px horizontal (px-3), 6px vertical (py-1.5)

- Desktop (≥640px):
  - Font: 14px (text-sm)
  - Letter-spacing: 0.05em (tracking-wider)
  - Bottom margin: 40px (mb-10 / sm:mb-10)
  - Padding: 20px horizontal (px-5 / sm:px-5), 8px vertical (py-2 / sm:py-2)

### H1 - "Positioning|Expert" (Line 42-43)
```html
<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 relative leading-tight tracking-tight sm:tracking-normal">
```

**Locked Measurements**:
- Mobile (<640px): 36px (text-4xl), tracking-tight
- sm (≥640px): 48px (text-5xl), tracking-normal
- md (≥768px): 60px (text-6xl)
- lg (≥1024px): 72px (text-7xl)
- xl (≥1280px): 72px (text-7xl)
- Line height: leading-tight (1.25)
- Bottom margin: 24px (mb-6)

### H2 - Subheading (Line 59-60)
```html
<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-8 text-white leading-tight sm:leading-normal">
  The Wrong Position Could Cost<br class="block sm:hidden"> <span class="sm:inline">You Millions in Lost Deals</span>
</h2>
```

**Locked Measurements**:
- Mobile (<640px): 24px (text-2xl), leading-tight (1.25), BREAKS after "Cost"
- sm (≥640px): 30px (text-3xl), leading-normal (1.5), NO BREAK (single line)
- md (≥768px): 36px (text-4xl)
- lg (≥1024px): 48px (text-5xl)
- xl (≥1280px): 60px (text-6xl)
- Bottom margin: 32px (mb-8)

### McKinsey Paragraph (Line 63-64)
```html
<p class="text-sm sm:text-lg md:text-xl lg:text-[22px] xl:text-[26px] text-luxury-300 max-w-3xl lg:max-w-4xl mx-auto mb-8 leading-normal sm:leading-relaxed">
```

**Locked Measurements**:
- Mobile (<640px): 14px (text-sm) ⚠️ **TO BE CHANGED TO 16px for WCAG**
- sm (≥640px): 18px (text-lg)
- md (≥768px): 20px (text-xl)
- lg (≥1024px): 22px (text-[22px])
- xl (≥1280px): 26px (text-[26px])
- Max-width mobile/md: 768px (max-w-3xl)
- Max-width lg+: 896px (max-w-4xl / lg:max-w-4xl)
- Line height: leading-normal (1.5) on mobile, leading-relaxed (1.625) on sm+
- Bottom margin: 32px (mb-8)

### CTA Button (Line 67-69)
```html
<a href="/contact.html" class="relative inline-flex items-center justify-center overflow-hidden group px-6 sm:px-8 py-3 sm:py-4 bg-accent-green/20 backdrop-blur-md transition-all duration-500 rounded-2xl hover:bg-accent-green/30 hover:scale-[1.02] hover:-translate-y-0.5">
  <span class="relative z-10 text-accent-green font-medium text-base sm:text-lg">
```

**Locked Measurements**:
- Mobile: padding 24px horizontal (px-6), 12px vertical (py-3)
- Desktop: padding 32px horizontal (px-8 / sm:px-8), 16px vertical (py-4 / sm:py-4)
- Font: 16px mobile (text-base), 18px desktop (text-lg / sm:text-lg)
- Border radius: 16px (rounded-2xl)

---

## Tailwind Breakpoints (DO NOT MODIFY)
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## Color Palette (DO NOT MODIFY)
- Primary text: white (#FFFFFF)
- Secondary text: luxury-300 (#B9B9BE)
- Accent: accent-green (RGB from CSS variables)
- Background: luxury-950 (#111117)

---

## Spacing System (DO NOT MODIFY)
```
1rem = 16px
- mb-6 = 24px
- mb-8 = 32px
- mb-10 = 40px
- px-3 = 12px
- px-4 = 16px
- px-5 = 20px
- px-6 = 24px
- px-8 = 32px
- py-1.5 = 6px
- py-2 = 8px
- py-3 = 12px
- py-4 = 16px
```

---

## Allowed Changes

### ✅ SAFE (Invisible to User)
1. **Add padding for touch targets** - Use `p-2.5`, `min-h-[44px]`, `min-w-[44px]`
2. **Throttle JavaScript** - Performance optimization only
3. **Font smoothing** - Rendering quality improvement
4. **ARIA attributes** - Accessibility metadata
5. **Viewport meta adjustments** - Device compatibility

### ⚠️ REQUIRES APPROVAL (Minimal Visual Impact)
1. **Change text-sm to text-base** - McKinsey paragraph ONLY (WCAG requirement)
2. **Add flex/items-center** - If needed to vertically center text in new touch targets

### ❌ FORBIDDEN (Breaks Design)
1. Changing any font sizes (except McKinsey paragraph text-sm→text-base)
2. Changing any spacing (margins, padding) that affects visual layout
3. Changing line heights (except where already responsive)
4. Changing max-widths
5. Changing breakpoints
6. Adding/removing line breaks
7. Changing letter-spacing/tracking

---

## Testing Matrix

### Must Pass On:
1. ✅ Desktop 1920×1080 (Chrome)
2. ✅ MacBook Pro 1440×900 (Safari)
3. ✅ iPhone 14 390×844 (Safari iOS)
4. ✅ **Xiaomi Poco X3 411×915 (Chrome Android)** ← Primary target
5. ✅ Samsung Galaxy S21 360×800 (Samsung Internet)
6. ✅ iPad Air 820×1180 (Safari iPadOS)

### Visual Regression Check:
- [ ] Eyebrow spacing matches baseline
- [ ] H1 size and position match baseline
- [ ] H2 breaks correctly (mobile=break, desktop=no break)
- [ ] McKinsey paragraph width matches baseline
- [ ] All elements aligned to center
- [ ] Button size and padding match baseline

---

## Version History

### v1.0 - 2025-01-09
- Initial baseline capture
- All current specifications locked
- Pre-Xiaomi Poco optimization

### v1.1 - Pending
- Xiaomi Poco fixes (invisible changes only)
- WCAG touch target compliance (additive padding)
- McKinsey paragraph 14px→16px (approved change)

---

**Last Updated**: 2025-01-09 01:35 AM
**Next Review**: After Phase 2-3 implementation
