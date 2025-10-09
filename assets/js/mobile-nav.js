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

  // Toggle menu visibility
  mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      // Close menu
      mobileMenu.classList.add('opacity-0', 'translate-x-full', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'translate-x-0');

      // Toggle icons
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    } else {
      // Open menu
      mobileMenu.classList.remove('opacity-0', 'translate-x-full', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'translate-x-0');

      // Toggle icons
      if (menuIcon && closeIcon) {
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
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

      // Toggle icons back
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  });
  
  console.log('Mobile navigation setup complete');
} 