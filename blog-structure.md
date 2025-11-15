# Blog Post Structure Reference - V2 Editorial Layout

**Reference File:** `blog/positioning-expert-vs-brand-strategist-v2.html`

This document defines the canonical blog post structure for all blog pages. Use this as the template for creating new blog posts or updating existing ones.

---

## Overview

The V2 editorial layout features:
- **Fixed TOC on left side** (position: fixed, never moves)
- **Wider centered content** (max-width: 1100px)
- **Larger fonts** (19px base for older audiences)
- **Scroll tracking** (TOC highlights current section)
- **Clean, single-sidebar design** (no cluttered left/right sidebars)
- **Responsive** (hides TOC below 1200px)

---

## HTML Structure

### 1. Head Section (Lines 1-429)

**Key Elements:**
- Google Analytics (gtag.js)
- Meta tags (SEO, Open Graph, Twitter Cards)
- Canonical URL
- Stylesheet link: `<link rel="stylesheet" href="/src/style.css" />`
- Inline `<style>` block with blog-specific CSS (see CSS section)
- Schema.org JSON-LD (Organization + Article)

**Important:** Update per post:
- `<title>` tag
- Meta descriptions
- Canonical URL
- Open Graph tags
- Schema.org article data (headline, datePublished, etc.)

---

### 2. Header Navigation (Lines 472-564)

Standard site navigation - remains the same for all blog posts.

**Structure:**
```html
<header id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 md:py-6 bg-black/80 backdrop-blur-md shadow-md">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <!-- Logo -->
    <!-- Desktop nav with "Back to Home" button and Services dropdown -->
    <!-- Mobile menu button -->
  </div>
  <!-- Mobile menu overlay -->
</header>
```

**Important:** Use responsive padding `py-4 md:py-6` (not just `py-4`) to prevent crunched navigation.

**No changes needed** - copy as-is from reference file.

---

### 3. Fixed TOC Sidebar (Lines 591-599)

**Position:** Fixed on left side, appears before main content in HTML but positioned via CSS.

```html
<aside class="toc-sidebar">
  <div class="toc-title">On this page</div>
  <a href="#section-id-1" class="toc-link">Section Title 1</a>
  <a href="#section-id-2" class="toc-link">Section Title 2</a>
  <!-- ... more links ... -->
</aside>
```

**Important:**
- Each `href` must match an `id` on an H2 heading in the content
- Only include major sections (H2 headings)
- Keep link text concise (under 50 characters)

---

### 4. Main Content Container (Lines 600-850)

```html
<div class="editorial-container">
  <article class="editorial-article">

    <!-- Author Byline -->
    <div class="author-byline">
      <div class="flex items-center gap-4">
        <div class="author-avatar">
          <span>TA</span>
        </div>
        <div>
          <div class="author-name">Troy Assoignon</div>
          <div class="author-meta">October 30, 2025 • 10 min read</div>
        </div>
      </div>
    </div>

    <!-- Article Title -->
    <h1>Blog Post Title Here</h1>

    <!-- Article Content -->
    <h2 id="section-id">Section Title</h2>
    <p>Content here...</p>

    <!-- CTA Box -->
    <div class="cta-box">
      <h3>CTA Headline</h3>
      <p>CTA description</p>
      <a href="/services/positioning-diagnostics.html">CTA Button Text</a>
    </div>

    <!-- Author Bio Box -->
    <div class="author-bio-box">
      <div class="flex gap-4 items-start">
        <div class="w-16 h-16 rounded-full bg-luxury-800 flex items-center justify-center flex-shrink-0">
          <span class="text-accent-green font-bold text-2xl">TA</span>
        </div>
        <div>
          <h3>About Troy Assoignon</h3>
          <p>Bio text...</p>
          <div class="flex gap-4">
            <a href="/#about">Learn more about Troy</a>
            <a href="https://linkedin.com/in/troyassoignon" target="_blank">Connect on LinkedIn</a>
          </div>
        </div>
      </div>
    </div>

  </article>
</div>
```

**Content Guidelines:**
- Use semantic HTML: H2 for major sections, H3 for subsections
- Add `id` attributes to all H2 headings (for TOC linking)
- Keep paragraphs focused (3-5 sentences max)
- Use lists for enumerated points
- Include ONE CTA box per post (after main content)
- Include author bio at bottom

---

### 5. Related Posts Section (Lines 851-889)

**Full-width section outside main container:**

```html
<section class="related-posts-section">
  <div class="related-posts-container">
    <h3>Related Articles</h3>
    <div class="related-posts-grid">
      <a href="/blog/post-1.html" class="related-post-card">
        <h4>Post Title</h4>
        <p>Post description</p>
      </a>
      <!-- 3-4 related posts total -->
    </div>
  </div>
</section>
```

**Guidelines:**
- Include 3-4 related posts
- Choose thematically related content
- Keep titles under 60 characters
- Descriptions: 1-2 sentences

---

### 6. Footer (Lines 890-930)

Standard site footer - remains the same for all blog posts.

**No changes needed** - copy as-is from reference file.

---

### 7. JavaScript (Lines 931-943)

Two scripts required:

```html
<script src="/src/main.js"></script>

<!-- TOC Scroll Tracking -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = Array.from(document.querySelectorAll('h2[id]'));

    function setActiveLink() {
      const scrollPosition = window.scrollY + 200;
      let currentSection = null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - 100) {
          currentSection = section.getAttribute('id');
          break;
        }
      }

      if (!currentSection && sections.length > 0) {
        currentSection = sections[0].getAttribute('id');
      }

      tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#' + currentSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    setTimeout(setActiveLink, 100);

    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          setActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    });

    tocLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 120;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          setTimeout(setActiveLink, 100);
        }
      });
    });
  });
</script>
```

**Copy exactly as-is** - do not modify scroll tracking logic.

---

## CSS Styles (Inline in `<style>` block)

### Critical Styles

**Body & Container:**
```css
html {
  scroll-behavior: smooth;
}

body {
  background: rgb(15, 15, 20);
  color: rgb(200, 200, 210);
}

.editorial-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 9rem 2rem 4rem 2rem;
  position: relative;
}
```

**Typography:**
```css
.editorial-article {
  font-size: 1.1875rem;  /* 19px base */
  line-height: 1.8;
  color: rgb(200, 200, 210);
}

.editorial-article h1 {
  font-size: 3rem;  /* 48px */
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  color: rgb(255, 255, 255);
  font-family: 'SF Pro Display', 'Inter', sans-serif;
  letter-spacing: -0.02em;
}

.editorial-article h2 {
  font-size: 2.125rem;  /* 34px */
  font-weight: 600;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  color: rgb(255, 255, 255);
  font-family: 'SF Pro Display', 'Inter', sans-serif;
  letter-spacing: -0.01em;
}

.editorial-article h3 {
  font-size: 1.625rem;  /* 26px */
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: rgb(255, 255, 255);
  font-family: 'SF Pro Display', 'Inter', sans-serif;
}

.editorial-article p {
  margin-bottom: 1.75rem;
  font-size: 1.1875rem;  /* 19px - explicit sizing */
}

.editorial-article li {
  margin-bottom: 0.75rem;
  font-size: 1.1875rem;  /* 19px - explicit sizing */
}
```

**Fixed TOC Sidebar:**
```css
.toc-sidebar {
  position: fixed;
  left: 2rem;
  top: 7rem;
  width: 280px;
  max-height: calc(100vh - 10rem);
  overflow-y: auto;
  padding: 1.5rem;
  background: rgba(25, 25, 30, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(50, 50, 60, 0.3);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.toc-link {
  display: block;
  padding: 0.5rem 0;
  color: rgb(185, 185, 190);
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s;
  border-left: 2px solid transparent;
  padding-left: 0.75rem;
  margin-left: -0.75rem;
}

.toc-link:hover {
  color: rgb(101, 228, 143);
  border-left-color: rgb(101, 228, 143);
}

.toc-link.active {
  color: rgb(101, 228, 143);
  border-left-color: rgb(101, 228, 143);
  font-weight: 500;
}
```

**Responsive Breakpoints:**
```css
@media (max-width: 1400px) {
  .toc-sidebar {
    width: 240px;
  }
  .editorial-container {
    max-width: 900px;
  }
}

@media (max-width: 1200px) {
  .toc-sidebar {
    display: none;  /* Hide TOC on smaller screens */
  }
  .editorial-container {
    max-width: 800px;
  }
}

@media (max-width: 768px) {
  .editorial-container {
    padding: 4rem 1.5rem 3rem 1.5rem;
  }
  .editorial-article {
    font-size: 1.125rem;  /* 18px on mobile */
  }
  .editorial-article p,
  .editorial-article li {
    font-size: 1.125rem;
  }
}
```

**Full CSS** - Copy lines 43-417 from `blog/positioning-expert-vs-brand-strategist-v2.html`

---

## Checklist for Updating Blog Posts

### Pre-Update
- [ ] Backup original blog post file
- [ ] Identify all H2 section headings (these become TOC items)
- [ ] Verify meta tags are unique per post
- [ ] Check for existing CTA boxes (consolidate to one)

### During Update
- [ ] Copy entire `<style>` block from V2 (lines 43-417)
- [ ] Update header navigation (if changed)
- [ ] Build TOC links based on H2 headings
- [ ] Add `id` attributes to all H2 headings
- [ ] Wrap content in `.editorial-container` → `.editorial-article`
- [ ] Add author byline at top
- [ ] Add author bio box at bottom
- [ ] Update related posts section (3-4 relevant posts)
- [ ] Copy scroll tracking JavaScript exactly

### Post-Update
- [ ] Add to vite.config.js `input` object
- [ ] Run `npm run build`
- [ ] Test locally at localhost:5173
- [ ] Verify TOC links work
- [ ] Check scroll tracking highlights correctly
- [ ] Test responsive behavior (mobile, tablet, desktop)
- [ ] Deploy to Vercel
- [ ] Verify live URL

---

## Common Pitfalls

1. **Forgetting to add IDs to H2 headings** - TOC links won't work
2. **Mismatched TOC hrefs and H2 IDs** - Links go nowhere
3. **Not updating vite.config.js** - File won't build
4. **Duplicate CSS** - Check for old blog CSS conflicting with new
5. **Wrong font sizes** - Must use 1.1875rem (19px) for body text
6. **TOC on wrong side** - Must be `left: 2rem` not `right: 2rem`
7. **Missing scroll tracking script** - TOC won't highlight on scroll
8. **Incorrect schema.org dates** - Update datePublished/dateModified

---

## File Naming Convention

- **Original:** `blog/post-name.html`
- **Keep original during testing**
- **After verification, replace original**

---

## Vite Config Entry Template

Add to `vite.config.js` line ~51-70 (blog post pages section):

```javascript
'blog/post-name': resolve(__dirname, 'blog/post-name.html'),
```

Alphabetically ordered with other blog posts.

---

## Related Posts Selection Guidelines

Choose 3-4 related posts based on:
1. **Topical relevance** - Same subject area
2. **Complementary content** - Expands on related concepts
3. **User journey** - Logical next steps
4. **Recency** - Prefer newer content when relevant

Example for positioning post:
- Strategic Positioning Framework (methodology)
- Positioning ROI & Profit Margins (business case)
- When to Hire a Positioning Expert (decision guide)
- Positioning Diagnostics (actionable next step)

---

## Test URLs After Update

- **Local:** `http://localhost:5173/blog/post-name`
- **Vercel Preview:** Provided after deployment
- **Production:** `https://troyassoignon.com/blog/post-name`

---

## Reference Files

- **Master template:** `blog/positioning-expert-vs-brand-strategist-v2.html`
- **Vite config:** `vite.config.js` (lines 33-83)
- **This document:** `blog-structure.md`

---

**Last Updated:** November 6, 2025
**Version:** 2.0 (Editorial Layout with Left TOC)
