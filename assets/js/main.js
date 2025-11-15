// Ensure Tailwind + custom styles are compiled by Vite/PostCSS
import '../css/style.css';

// Import JavaScript modules - all modules are in the same directory
import { setupResultsSection } from './results-section.js';
import { setupMatrixBackground } from './matrix-background.js';
import { setupMobileNav } from './mobile-nav.js';
import { setupDropdown } from './dropdown.js';
import { setupMatrixExplosion } from './button-effects.js';
import { setupMatrixRain } from './matrix-rain.js';
import { setupTransformationMatrix } from './transformation-matrix.js';
import { debugLog, warnLog } from './logger.js';

// Phase 2 Fix: Throttle utility for scroll performance on Xiaomi Poco
const throttle = (func, delay) => {
  let lastCall = 0;
  let timeoutId = null;
  return function(...args) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        func.apply(this, args);
      }, delay - timeSinceLastCall);
    }
  };
};

const runAfterIdle = (callback, timeout = 200) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, timeout);
  }
};

const observeOnce = (element, callback, options) => {
  if (!element) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        obs.disconnect();
        callback();
      }
    });
  }, options || { rootMargin: '150px 0px' });
  observer.observe(element);
};

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  debugLog('app', 'DOMContentLoaded fired');

  const heroSection = document.querySelector('.hero-section');

  if (heroSection) {
    debugLog('hero', 'Hero section detected, scheduling hero effects');
    runAfterIdle(() => {
      debugLog('hero', 'Initialising hero background and results');
      setupMatrixBackground();

      if (document.getElementById('results-container')) {
        setupResultsSection();
        debugLog('hero', 'Results section initialised');
      }

    }, 120);

    const loadingInterface = document.getElementById('loading-interface');
    if (loadingInterface) {
      runAfterIdle(() => handleLoadingSequence(), 300);
    }
  }

  const transformationSection = document.getElementById('transformation');
  observeOnce(transformationSection, () => {
    debugLog('matrix', 'Transformation section entered viewport');
    runAfterIdle(() => {
      debugLog('matrix', 'Initialising transformation effects');
      if (typeof setupMatrixRain === 'function') {
        setupMatrixRain();
      }
      if (typeof setupTransformationMatrix === 'function') {
        setupTransformationMatrix();
      }
    }, 120);
  });
  if (typeof setupMobileNav !== 'undefined') {
    setupMobileNav();
  }

  if (typeof setupDropdown !== 'undefined') {
    setupDropdown();
  }

  if (typeof setupMatrixExplosion !== 'undefined') {
    runAfterIdle(() => setupMatrixExplosion(), 150);
  }

  initNavbarScroll();
  applyLuxuryButtonEffects();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  initParallaxEffect();
  updateCopyrightYear();
  initEventHandling();
  initThemeNavFix();

});

// Initialize Mobile Menu
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuButton && mobileMenu) {
    // Phase 3 Fix: Close menu function for WCAG keyboard navigation
    const closeMenu = () => {
      mobileMenu.classList.remove('opacity-100', 'translate-x-0', 'pointer-events-auto');
      mobileMenu.classList.add('opacity-0', 'translate-x-full', 'pointer-events-none');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    };

    // Phase 3 Fix: Open menu function for WCAG keyboard navigation
    const openMenu = () => {
      mobileMenu.classList.remove('opacity-0', 'translate-x-full', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'translate-x-0', 'pointer-events-auto');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      menuButton.setAttribute('aria-expanded', 'true');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('opacity-100');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Phase 3 Fix: Escape key to close menu (WCAG keyboard navigation)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('opacity-100')) {
        closeMenu();
        menuButton.focus();
      }
    });

    // Close mobile menu when clicking on a nav item
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });
  }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (!href) return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
      });
    });
  });
}

// Handle navbar scroll behavior
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    // Ensure navbar is above matrix background
    navbar.style.zIndex = '1000';

    // Phase 2 Fix: Throttle navbar scroll to 100ms for Xiaomi Poco performance
    const handleNavbarScroll = throttle(() => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'shadow-md');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'shadow-md');
        navbar.classList.add('bg-transparent');
      }
    }, 100);

    window.addEventListener('scroll', handleNavbarScroll);

    // Trigger the scroll handler once to set initial state
    if (window.scrollY > 50) {
      navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'shadow-md');
      navbar.classList.remove('bg-transparent');
    }
  }
}

// Contact form submission handling
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const contactFormContainer = document.getElementById('contact-form-container');
  const submitText = document.getElementById('submit-text');
  const loadingIndicator = document.getElementById('loading-indicator');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      submitText.classList.add('hidden');
      loadingIndicator.classList.remove('hidden');
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Simulate form submission with a timeout
      setTimeout(() => {
        // Hide the form and show success message
        contactFormContainer.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Reset the form for future submissions
        contactForm.reset();
        submitText.classList.remove('hidden');
        loadingIndicator.classList.add('hidden');
        
        // Log the form data (in a real application, you would send this to a server)
      }, 1500);
      
      // In a real application, you would send the data to your server here
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   contactFormContainer.classList.add('hidden');
      //   successMessage.classList.remove('hidden');
      //   contactForm.reset();
      // })
      // .catch(error => {
      //   console.error('Error:', error);
      //   // Handle error state
      // })
      // .finally(() => {
      //   submitText.classList.remove('hidden');
      //   loadingIndicator.classList.add('hidden');
      // });
    });
  }
}

// Parallax effect for the image
function initParallaxEffect() {
  const parallaxContainer = document.getElementById('parallax-container');
  const parallaxImage = document.getElementById('parallax-image');

  // Phase 2 Fix: Throttle parallax scroll to 16ms (~60fps) for Xiaomi Poco performance
  if (parallaxContainer && parallaxImage) {
    const handleParallaxScroll = throttle(() => {
      const scrollY = window.scrollY;
      const containerTop = parallaxContainer.getBoundingClientRect().top + scrollY;
      const containerHeight = parallaxContainer.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if the container is in the viewport
      if (
        scrollY + windowHeight > containerTop &&
        scrollY < containerTop + containerHeight
      ) {
        // Calculate how much to translate the image based on scroll position
        const offset = (scrollY + windowHeight - containerTop) / (containerHeight + windowHeight);
        const translateY = Math.min(20, offset * 40); // Max 20px movement

        // Apply parallax effect
        parallaxImage.style.transform = `translateY(-${translateY}px)`;
      }
    }, 16);

    window.addEventListener('scroll', handleParallaxScroll);
  }

  // About image scroll effect
  const aboutImage = document.getElementById('about-image');
  if (aboutImage) {
    // Phase 2 Fix: Throttle about image scroll to 16ms (~60fps) for Xiaomi Poco performance
    const handleAboutImageScroll = throttle(() => {
      const rect = aboutImage.getBoundingClientRect();
      const scrollPercent = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);

      aboutImage.style.transform = `scale(${1 + scrollPercent * 0.05})`;
      aboutImage.style.filter = `brightness(${0.8 + scrollPercent * 0.2})`;
    }, 16);

    window.addEventListener('scroll', handleAboutImageScroll);
  }
}

// Update copyright year
function updateCopyrightYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Initialize service modals - Removed this entire function since we're using separate pages
// ... existing code ... 

// Fix event handling issues for navigation and content
function initEventHandling() {
  // Ensure all nav elements can be clicked
  document.querySelectorAll('#navbar a, #navbar button, .back-button').forEach(element => {
    // Make sure events aren't being blocked - redundant but helpful
    element.style.pointerEvents = 'auto';
    
    // Add a click handler to debug/ensure clicks work
    element.addEventListener('click', function(e) {
      // For links with href attributes, let them function normally
      if (this.getAttribute('href') && !this.classList.contains('services-link-with-dropdown')) {
        // Log for debugging if needed
        // console.log('Navigation click:', this.getAttribute('href'));
      }
    });
  });
  
  // Fix for service pages - make sure content doesn't block navigation
  if (document.querySelector('main')) {
    const mainContent = document.querySelector('main');
    
    // Ensure content clicks don't bubble up and block nav clicks
    mainContent.addEventListener('click', function(e) {
      // Only stop propagation for clicks directly on the main element
      // not for its children (like links within the content)
      if (e.target === this) {
        e.stopPropagation();
      }
    });
  }
  
  // Back button special handling
  document.querySelectorAll('.back-button').forEach(backBtn => {
    backBtn.addEventListener('click', function(e) {
      // Ensure it can navigate back
      e.stopPropagation();
      // Log for debugging if needed
      // console.log('Back button clicked');
    });
  });
}

// Fix navigation issues related to theme changes
function initThemeNavFix() {
  // Listen for theme changes and adjust navigation behavior accordingly
  const html = document.documentElement;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        // Always run navigation fix on any class change for safety
        fixNavigationDuringThemeChange();
      }
    });
  });
  
  // Start observing
  observer.observe(html, { 
    attributes: true, 
    attributeFilter: ['class'],
    attributeOldValue: true
  });
  
  // Fix navigation during theme changes
  function fixNavigationDuringThemeChange() {
    // Ensure navbar stays on top and clickable
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.style.zIndex = '9999';
      navbar.style.position = 'fixed';
      navbar.style.pointerEvents = 'auto';
      navbar.style.width = '100%';
      navbar.style.visibility = 'visible';
      navbar.style.opacity = '1';
      
      // Ensure all navigation elements can be clicked
      document.querySelectorAll('#navbar a, #navbar button, .back-button').forEach(el => {
        // Ensure element is visible and clickable
        el.style.pointerEvents = 'auto';
        el.style.zIndex = '10001';
        el.style.position = 'relative';
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      });
      
      // Specifically target back button
      document.querySelectorAll('.back-button').forEach(btn => {
        btn.style.zIndex = '10002';
        btn.style.visibility = 'visible';
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        btn.style.display = 'inline-flex';
      });
    }
    
    // Prevent service content from blocking navigation
    const main = document.querySelector('main');
    if (main) {
      main.style.zIndex = '1';
      main.style.position = 'relative';
      main.style.paddingTop = '8rem';
    }
    
    // Force dropdown to be above main content but below navigation items
    const dropdown = document.getElementById('services-dropdown');
    if (dropdown) {
      if (!dropdown.classList.contains('pointer-events-none')) {
        dropdown.style.pointerEvents = 'auto';
        dropdown.style.zIndex = '9998';
      }
    }
  }
  
  // Run once on page load to ensure proper initial state
  fixNavigationDuringThemeChange();
  
  // Also run whenever page is loaded or resized
  window.addEventListener('load', fixNavigationDuringThemeChange);
  window.addEventListener('resize', fixNavigationDuringThemeChange);
}

// Apply luxury glass effects to buttons
function applyLuxuryButtonEffects() {
  // Select all primary buttons and CTAs
  const buttons = document.querySelectorAll('.button-primary, a[href^="#services"], a[href^="#contact"], button[type="submit"]');
  
  buttons.forEach(button => {
    // Don't modify buttons that already have the luxury effect
    if (button.classList.contains('luxury-glass-effect')) return;
    
    // Preserve original text and icon
    const originalContent = button.innerHTML;
    
    // Add luxury glass effect classes
    button.classList.add('luxury-glass-effect');
    
    // Remove existing background and border classes
    button.classList.remove('bg-accent-green/20', 'bg-accent-green/30');
    
    // Add enhanced glass effect styles with better contrast
    button.classList.add(
      'relative',
      'overflow-hidden',
      'border',
      'border-accent-green/30',
      'transition-all',
      'duration-300',
      'shadow-[0_4px_20px_rgba(101,228,143,0.15)]',
      'hover:border-accent-green/50',
      'hover:shadow-[0_8px_25px_rgba(101,228,143,0.25)]',
      'active:scale-[0.98]'
    );
    
    // Add a gradient background instead of just black
    const gradientBg = document.createElement('div');
    gradientBg.className = 'absolute inset-0 bg-gradient-to-br from-accent-green/20 to-black/40 backdrop-blur-md';
    
    // Add subtle top highlight
    const highlight = document.createElement('div');
    highlight.className = 'absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent-green/40 to-transparent';
    
    // Add subtle glow effect on hover
    const glow = document.createElement('div');
    glow.className = 'absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-accent-green/10 rounded-xl';
    
    // Make sure the content has proper z-index and styling
    let contentWrapper = document.createElement('div');
    contentWrapper.className = 'relative z-10 flex items-center justify-center';
    contentWrapper.innerHTML = originalContent;
    
    // If this is a primary CTA button, add arrow icon if it doesn't have one
    if (button.getAttribute('href') === '#services' && !button.querySelector('svg')) {
      contentWrapper.innerHTML = `
        ${button.textContent}
        <svg class="w-5 h-5 ml-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    }
    
    // Clear button's inner HTML
    button.innerHTML = '';
    
    // Add elements in the right order
    button.appendChild(gradientBg);
    button.appendChild(highlight);
    button.appendChild(glow);
    button.appendChild(contentWrapper);
  });
  
}

// Loading Interface Handler
function handleLoadingSequence() {
  
  const loadingInterface = document.getElementById('loading-interface');
  const heroContent = document.querySelector('.hero-section');
  const terminalOutput = document.getElementById('terminal-output');
  const namePrompt = document.getElementById('name-prompt');
  const nameInputContainer = document.getElementById('name-input-container');
  const emailInputContainer = document.getElementById('email-input-container');
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const loadingBarContainer = document.getElementById('loading-bar-container');
  const pillChoiceContainer = document.getElementById('pill-choice-container');
  const terminalContent = document.querySelector('.terminal-content');

  // Debug element existence
  const elements = {
    loadingInterface,
    heroContent,
    terminalOutput,
    namePrompt,
    nameInputContainer,
    emailInputContainer,
    nameInput,
    emailInput,
    loadingBarContainer,
    pillChoiceContainer,
    terminalContent
  };

  const missingElements = Object.entries(elements)
    .filter(([, element]) => !element)
    .map(([name]) => name);

  if (missingElements.length) {
    warnLog('loader', 'Skipping loading sequence; missing elements: ' + missingElements.join(', '));
    return;
  }

  // Initially hide hero content and other containers
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(20px)';
  emailInputContainer.style.display = 'none';
  loadingBarContainer.style.display = 'none';
  pillChoiceContainer.style.display = 'none';

  // Show initial name prompt with debug logging
  setTimeout(() => {
    namePrompt.textContent = 'What is your name?_';
    nameInputContainer.style.display = 'flex';
    nameInput.focus();
  }, 1000);

  // Handle name input with debug logging
  nameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
      const name = this.value.trim();
      nameInputContainer.style.display = 'none';
      
      try {
        startMatrixSequence(name);
      } catch (error) {
        console.error('Error starting matrix sequence:', error);
      }
    }
  });

  // Handle email input with debug logging
  emailInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
      const email = this.value.trim();
      emailInputContainer.style.display = 'none';
      
      try {
        // Clear terminal with flicker effect
        terminalContent.classList.add('terminal-clear');
        
        setTimeout(() => {
          terminalOutput.innerHTML = '';
          terminalContent.classList.remove('terminal-clear');
          
          // Show loading sequence
          const systemMsg = document.createElement('div');
          systemMsg.className = 'line system-msg';
          systemMsg.textContent = 'SYSTEM: LOADING SEQUENCE INITIATED';
          terminalOutput.appendChild(systemMsg);
          
          setTimeout(() => {
            // Show and animate loading bar
            loadingBarContainer.style.display = 'block';
            startLoadingAnimation();
          }, 500);
        }, 300);
      } catch (error) {
        console.error('Error in email input handler:', error);
      }
    }
  });
}

// Enhanced loading bar animation with debug logging
function startLoadingAnimation() {
  
  const loadingBar = document.querySelector('.pixel-segments');
  const percentage = document.getElementById('loading-percentage');
  
  if (!loadingBar || !percentage) {
    console.error('Loading bar elements not found');
    return;
  }
  
  let progress = 0;
  
  // Clear any existing interval
  if (window.loadingInterval) {
    clearInterval(window.loadingInterval);
  }
  
  // Create new loading interval
  window.loadingInterval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(window.loadingInterval);
      showPillChoice();
      return;
    }
    
    progress += 1;
    
    try {
      // Update loading bar width
      loadingBar.style.width = `${progress}%`;
      
      // Update percentage text with animation
      percentage.textContent = `System Loading: ${progress}%`;
      percentage.style.opacity = progress % 10 === 0 ? '1' : '0.7';
      
      if (progress % 10 === 0) {
        percentage.style.textShadow = '0 0 10px rgba(101,228,143,0.8)';
        setTimeout(() => {
          percentage.style.textShadow = '0 0 10px rgba(101,228,143,0.3)';
        }, 100);
      }
    } catch (error) {
      console.error('Error updating loading bar:', error);
    }
  }, 30);
  
}

// Enhanced pill choice display with debug logging
function showPillChoice() {
  
  const terminalContent = document.querySelector('.terminal-content');
  const terminalOutput = document.getElementById('terminal-output');
  const loadingBarContainer = document.getElementById('loading-bar-container');
  const pillChoiceContainer = document.getElementById('pill-choice-container');

  if (!terminalContent || !terminalOutput || !loadingBarContainer || !pillChoiceContainer) {
    console.error('Required elements for pill choice not found');
    return;
  }

  setTimeout(() => {
    terminalContent.classList.add('terminal-clear');
    
    setTimeout(() => {
      loadingBarContainer.style.display = 'none';
      terminalOutput.innerHTML = '';
      terminalContent.classList.remove('terminal-clear');
      
      const pillMessages = [
        "SYSTEM: CHOICE PROTOCOL ACTIVATED",
        "",
        "Will you take the Red pill? or the Blue pill?",
        "",
        "Blue pill - The story ends here...",
        "Red pill - See how deep the rabbit hole goes..."
      ];
      
      let messageIndex = 0;
      
      function typePillMessage() {
        if (messageIndex < pillMessages.length) {
          const line = document.createElement('div');
          line.className = messageIndex === 0 ? 'line system-msg' : 'line';
          line.textContent = pillMessages[messageIndex];
          terminalOutput.appendChild(line);
          messageIndex++;
          setTimeout(typePillMessage, 800);
        } else {
          setTimeout(() => {
            pillChoiceContainer.style.display = 'block';
          }, 500);
        }
      }
      
      typePillMessage();
    }, 300);
  }, 500);
}

// Add chaotic fade animation
const style = document.createElement('style');
style.textContent = `
  @keyframes chaoticFade {
    0% { opacity: 1; transform: scale(1); filter: brightness(1); }
    20% { opacity: 0.8; transform: scale(1.02) skew(2deg); filter: brightness(1.2); }
    40% { opacity: 0.6; transform: scale(0.98) skew(-3deg); filter: brightness(0.8); }
    60% { opacity: 0.4; transform: scale(1.01) skew(1deg); filter: brightness(1.1); }
    80% { opacity: 0.2; transform: scale(0.99) skew(-1deg); filter: brightness(0.9); }
    100% { opacity: 0; transform: scale(1); filter: brightness(1); }
  }
`;
document.head.appendChild(style);

// Export the startMatrixSequence function and make it available globally
export function startMatrixSequence(name) {
  // Create Matrix effects
  const bgMatrixRain = document.createElement('div');
  bgMatrixRain.className = 'background-matrix-rain';
  document.body.appendChild(bgMatrixRain);
  
  const matrixBg = document.createElement('div');
  matrixBg.className = 'name-matrix-rain';
  document.body.appendChild(matrixBg);
  
  let isSequenceRunning = true;
  
  // Background Matrix rain effect
  function createBackgroundColumn() {
    if (!isSequenceRunning) return;
    
    const column = document.createElement('div');
    column.className = 'background-matrix-column';
    
    let columnText = '';
    const matrixChars = '01';
    const repeats = Math.floor(Math.random() * 15) + 10;
    for (let i = 0; i < repeats; i++) {
      columnText += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length)) + '\n';
    }
    column.textContent = columnText;
    
    column.style.left = `${Math.random() * window.innerWidth}px`;
    column.style.animationDuration = `${Math.random() * 4 + 8}s`;
    
    column.addEventListener('animationend', () => {
      column.remove();
      if (bgMatrixRain.parentNode && isSequenceRunning) {
        createBackgroundColumn();
      }
    });
    
    bgMatrixRain.appendChild(column);
  }
  
  // Name Matrix rain effect
  function createNameColumn() {
    if (!isSequenceRunning) return;
    
    const column = document.createElement('div');
    column.className = 'name-matrix-column';
    
    const fullName = name.toUpperCase();
    column.textContent = fullName + '\n' + fullName;
    
    const columnWidth = 20;
    const totalColumns = Math.floor(window.innerWidth / (columnWidth * 2));
    const columnIndex = Math.floor(Math.random() * totalColumns);
    const xPosition = (columnIndex * columnWidth * 2) + Math.random() * columnWidth;
    column.style.left = `${xPosition}px`;
    
    column.style.animationDuration = `${Math.random() * 2 + 6}s`;
    
    column.addEventListener('animationend', () => {
      column.remove();
      if (matrixBg.parentNode && isSequenceRunning) {
        createNameColumn();
      }
    });
    
    matrixBg.appendChild(column);
  }
  
  // Initialize effects
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createBackgroundColumn(), Math.random() * 3000);
  }
  
  const totalInitialColumns = Math.floor(window.innerWidth / 40);
  for (let i = 0; i < totalInitialColumns; i++) {
    setTimeout(() => createNameColumn(), i * 500);
  }
  
  // Get terminal elements
  const terminalOutput = document.getElementById('terminal-output');
  const loadingBarContainer = document.getElementById('loading-bar-container');
  const loadingBar = document.getElementById('loading-bar');
  const loadingPercentage = document.getElementById('loading-percentage');
  const pillChoiceContainer = document.getElementById('pill-choice-container');
  
  // Matrix messages with proper timing
  const messages = [
    `Hello, ${name}...`,
    "We've been waiting for you...",
    "You know the answer is out there....",
    "We know why you're here...",
    `The answer is looking for you, ${name}`,
    "Loading intelligence data...",
    "Analyzing market position...",
    "Calculating competitive advantage...",
    "Preparing strategic insights...",
    "Almost there..."
  ];
  
  // Show messages with typing effect
  let currentMessage = 0;
  let currentChar = 0;
  
  function typeMessage() {
    if (currentMessage >= messages.length) {
      // Show loading bar after messages
      loadingBarContainer.style.display = 'block';
      let progress = 0;
      
      const loadingInterval = setInterval(() => {
        progress += 1;
        loadingBar.style.width = `${progress}%`;
        loadingPercentage.textContent = `${progress}%`;
        
        if (progress >= 100) {
          clearInterval(loadingInterval);
          loadingBarContainer.style.display = 'none';
          // Show pill choice
          pillChoiceContainer.style.display = 'block';
          
          // Handle pill choice
          const pillButtons = document.querySelectorAll('.pill-button');
          pillButtons.forEach(button => {
            button.addEventListener('click', function() {
              const choice = this.dataset.choice;
              isSequenceRunning = false;
              // Handle the choice here
            });
          });
        }
      }, 50);
      return;
    }
    
    if (currentChar < messages[currentMessage].length) {
      const messageElement = document.createElement('div');
      messageElement.className = 'line';
      messageElement.textContent = messages[currentMessage].substring(0, currentChar + 1);
      terminalOutput.appendChild(messageElement);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      currentChar++;
      setTimeout(typeMessage, 50);
    } else {
      currentMessage++;
      currentChar = 0;
      setTimeout(typeMessage, 1000);
    }
  }
  
  // Start typing messages
  typeMessage();
}

// Make the function available globally
window.startMatrixSequence = startMatrixSequence; 







