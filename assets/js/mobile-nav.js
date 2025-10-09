// Mobile Navigation

export function setupMobileNav() {
  console.log('setupMobileNav called');
  console.log('Looking for #mobile-menu-button...');

  const mobileMenuButton = document.querySelector('#mobile-menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');
  const menuIcon = document.querySelector('#menu-icon');
  const closeIcon = document.querySelector('#close-icon');

  console.log('Button found:', !!mobileMenuButton, mobileMenuButton);
  console.log('Menu found:', !!mobileMenu, mobileMenu);
  console.log('Menu icon found:', !!menuIcon);
  console.log('Close icon found:', !!closeIcon);

  if (!mobileMenuButton || !mobileMenu) {
    console.warn('Mobile menu elements not found - will retry');
    // Retry after a short delay
    setTimeout(() => {
      const retryButton = document.querySelector('#mobile-menu-button');
      const retryMenu = document.querySelector('#mobile-menu');
      if (retryButton && retryMenu) {
        console.log('Retry successful, setting up now...');
        setupMobileNavActual(retryButton, retryMenu,
          document.querySelector('#menu-icon'),
          document.querySelector('#close-icon'));
      } else {
        console.error('Retry failed - elements still not found');
      }
    }, 100);
    return;
  }

  console.log('Mobile menu elements found, setting up...');

  // Visibility check
  const rect = mobileMenuButton.getBoundingClientRect();
  const styles = window.getComputedStyle(mobileMenuButton);
  console.log('Button position:', {
    top: rect.top,
    left: rect.left,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height,
    display: styles.display,
    visibility: styles.visibility,
    opacity: styles.opacity,
    zIndex: styles.zIndex
  });
  console.log('Viewport size:', {
    width: window.innerWidth,
    height: window.innerHeight
  });

  setupMobileNavActual(mobileMenuButton, mobileMenu, menuIcon, closeIcon);
}

function setupMobileNavActual(mobileMenuButton, mobileMenu, menuIcon, closeIcon) {

  // Toggle menu visibility
  mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      // Close menu
      mobileMenu.classList.add('opacity-0', 'translate-x-full', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'translate-x-0');

      // Toggle icons using inline styles
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    } else {
      // Open menu
      mobileMenu.classList.remove('opacity-0', 'translate-x-full', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'translate-x-0');

      // Toggle icons using inline styles
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      }
    }
  });

  // Close menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('opacity-0', 'translate-x-full', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'translate-x-0');

      // Toggle icons back using inline styles
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  });

  console.log('Mobile navigation setup complete');
} 