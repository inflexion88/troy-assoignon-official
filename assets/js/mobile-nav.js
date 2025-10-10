// Simple Mobile Navigation - Rebuilt from First Principles

export function setupMobileNav() {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (!button || !menu) return;

  // Toggle menu
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isOpen);
    menu.classList.toggle('hidden');

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });

  // Close when clicking outside
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      button.setAttribute('aria-expanded', 'false');
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
}
