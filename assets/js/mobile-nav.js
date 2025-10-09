// Mobile Navigation

export function setupMobileNav() {
  const mobileMenuButton = document.querySelector('#mobile-menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');
  const menuIcon = document.querySelector('#menu-icon');
  const closeIcon = document.querySelector('#close-icon');

  if (!mobileMenuButton || !mobileMenu) {
    console.warn('Mobile menu elements not found');
    return;
  }

  console.log('Mobile menu elements found, setting up...');

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