// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base public path (update for production if deploying to a subdirectory)
  base: '/',
  
  // Serve files from public directory
  publicDir: 'public',
  
  // Development server settings
  server: {
    port: 5173,
    open: true,
    // Ensure static files are served correctly
    fs: {
      strict: false,
      allow: ['..']
    },
    watch: {
      ignored: ['**/ARCHIVE-*', '**/ARCHIVED-*', '**/CLEAN-BACKUP-*', '**/dist/**']
    }
  },
  
  // Build options
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure CSS is properly extracted and bundled
    cssCodeSplit: false, // This prevents CSS from being split into multiple files
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
        workshop: resolve(__dirname, 'workshop.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        'perma-patch': resolve(__dirname, 'perma-patch.html'),
        // Service pages
        'services/fractional-cmo-caio': resolve(__dirname, 'services/fractional-cmo-caio.html'),
        'services/fractional-cmo-cpo': resolve(__dirname, 'services/fractional-cmo-cpo.html'),
        'services/strategic-brand-positioning': resolve(__dirname, 'services/strategic-brand-positioning.html'),
        'services/authority-thought-leadership': resolve(__dirname, 'services/authority-thought-leadership.html'),
        'services/investor-ready-positioning': resolve(__dirname, 'services/investor-ready-positioning.html'),
        'services/premium-pricing-offers': resolve(__dirname, 'services/premium-pricing-offers.html'),
        'services/positioning-diagnostics': resolve(__dirname, 'services/positioning-diagnostics.html'),
        positioningiq: resolve(__dirname, 'public/positioningiq.html'),
        // Blog post pages
        'blog/what-is-positioning-expert-2025-guide': resolve(__dirname, 'blog/what-is-positioning-expert-2025-guide.html'),
        'blog/positioning-expert-vs-brand-strategist': resolve(__dirname, 'blog/positioning-expert-vs-brand-strategist.html'),
        'blog/strategic-positioning-framework-deep-dive': resolve(__dirname, 'blog/strategic-positioning-framework-deep-dive.html'),
        'blog/when-to-hire-positioning-expert': resolve(__dirname, 'blog/when-to-hire-positioning-expert.html'),
        'blog/positioning-roi-profit-margins': resolve(__dirname, 'blog/positioning-roi-profit-margins.html'),
        'blog/positioning-diagnostics-revenue-analysis': resolve(__dirname, 'blog/positioning-diagnostics-revenue-analysis.html'),
        'blog/investor-ready-positioning-capital-raising': resolve(__dirname, 'blog/investor-ready-positioning-capital-raising.html'),
        'blog/positioning-vs-branding-differences': resolve(__dirname, 'blog/positioning-vs-branding-differences.html'),
        'blog/common-positioning-mistakes': resolve(__dirname, 'blog/common-positioning-mistakes.html'),
        'blog/how-to-choose-positioning-consultant': resolve(__dirname, 'blog/how-to-choose-positioning-consultant.html'),
        'blog/positioning-audit-checklist': resolve(__dirname, 'blog/positioning-audit-checklist.html'),
        'blog/90-day-positioning-implementation-framework': resolve(__dirname, 'blog/90-day-positioning-implementation-framework.html'),
        'blog/positioning-vs-messaging-difference': resolve(__dirname, 'blog/positioning-vs-messaging-difference.html'),
        'blog/positioning-vs-marketing-strategy': resolve(__dirname, 'blog/positioning-vs-marketing-strategy.html'),
        'blog/in-house-vs-expert-positioning': resolve(__dirname, 'blog/in-house-vs-expert-positioning.html'),
        'blog/strategic-vs-tactical-positioning': resolve(__dirname, 'blog/strategic-vs-tactical-positioning.html'),
        'blog/positioning-sprint-vs-system': resolve(__dirname, 'blog/positioning-sprint-vs-system.html'),
        'blog/category-creation-vs-leadership': resolve(__dirname, 'blog/category-creation-vs-leadership.html'),
        'blog/fractional-cmo-ai-marketing-teams-smes': resolve(__dirname, 'blog/fractional-cmo-ai-marketing-teams-smes.html'),
        // Lead magnet pages
        'lead-magnets/positioning-diagnostic-checklist': resolve(__dirname, 'lead-magnets/positioning-diagnostic-checklist.html'),
        'lead-magnets/positioning-framework-guide': resolve(__dirname, 'lead-magnets/positioning-framework-guide.html'),
        'lead-magnets/investor-positioning-checklist': resolve(__dirname, 'lead-magnets/investor-positioning-checklist.html'),
        // Resource/Giveaway pages (HTML deliverables replacing PDFs)
        'resources/positioning-diagnostic': resolve(__dirname, 'resources/positioning-diagnostic.html'),
        'resources/positioning-framework': resolve(__dirname, 'resources/positioning-framework.html'),
        'resources/investor-positioning': resolve(__dirname, 'resources/investor-positioning.html'),
        // Thank you pages
        'thank-you-diagnostic': resolve(__dirname, 'thank-you-diagnostic.html'),
        'thank-you-framework': resolve(__dirname, 'thank-you-framework.html'),
        'thank-you-investor': resolve(__dirname, 'thank-you-investor.html')
      },
      output: {
        // Keep the existing folder structure from public
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'assets/css/[name][extname]';
          return 'assets/[name][extname]';
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
        dir: 'dist'
      }
    },
    // Copy public assets as-is without hashing
    copyPublicDir: true
  },
  
  // CSS optimization
  css: {
    // Ensure PostCSS processes all CSS
    postcss: true,
    // Ensure CSS modules work properly
    modules: {
      scopeBehavior: 'local'
    }
  }
}) 


