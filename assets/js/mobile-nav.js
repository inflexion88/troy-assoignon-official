// Mobile Navigation - Robust Implementation with Body Scroll Lock

export function setupMobileNav() {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (!button || !menu) return;

  const openMenu = () => {
    button.setAttribute('aria-expanded', 'true');
    menu.classList.remove('opacity-0', 'pointer-events-none');
    menu.classList.add('opacity-100', 'pointer-events-auto');
    // Lock body scroll
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    menu.classList.remove('opacity-100', 'pointer-events-auto');
    menu.classList.add('opacity-0', 'pointer-events-none');
    // Unlock body scroll
    document.body.classList.remove('overflow-hidden');
  };

  // Toggle menu
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking backdrop
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}
