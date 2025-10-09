// Mobile Navigation

export function setupMobileNav() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
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
      mobileMenu.classList.add('opacity-0', '-translate-y-10');
      mobileMenu.classList.remove('opacity-100', 'translate-y-0');
      
      // Hide after animation completes
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    } else {
      // Open menu
      mobileMenu.classList.remove('hidden');
      
      // Trigger animation after a small delay to ensure the display change has taken effect
      setTimeout(() => {
        mobileMenu.classList.add('opacity-100', 'translate-y-0');
        mobileMenu.classList.remove('opacity-0', '-translate-y-10');
      }, 10);
    }
  });
  
  // Close menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('opacity-0', '-translate-y-10');
      mobileMenu.classList.remove('opacity-100', 'translate-y-0');
      
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    });
  });
  
  console.log('Mobile navigation setup complete');
} 