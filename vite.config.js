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
        blog: resolve(__dirname, 'blog.html'),
        workshop: resolve(__dirname, 'workshop.html'),
        contact: resolve(__dirname, 'contact.html'),
        // Service pages
        'services/fractional-cmo-caio': resolve(__dirname, 'services/fractional-cmo-caio.html'),
        'services/fractional-cmo-cpo': resolve(__dirname, 'services/fractional-cmo-cpo.html'),
        'services/strategic-brand-positioning': resolve(__dirname, 'services/strategic-brand-positioning.html'),
        'services/authority-thought-leadership': resolve(__dirname, 'services/authority-thought-leadership.html'),
        'services/investor-ready-positioning': resolve(__dirname, 'services/investor-ready-positioning.html'),
        'services/premium-pricing-offers': resolve(__dirname, 'services/premium-pricing-offers.html'),
        'services/positioning-diagnostics': resolve(__dirname, 'services/positioning-diagnostics.html'),
        positioningiq: resolve(__dirname, 'public/positioningiq.html')
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


