// Unified Dropdown Menu Handler with Event Delegation
// Handles all dropdowns (generic, services, workshop) with a single system

export function setupDropdown() {
  let activeDropdown = null;

  // Event delegation for dropdown triggers (hover)
  // Using capture phase to handle events early
  document.addEventListener('mouseenter', (e) => {
    // Check if hovering over a dropdown trigger or its parent group
    const group = e.target.closest('.relative.group');
    if (!group) return;

    // Find the dropdown within this group
    const dropdown = group.querySelector('.dropdown-menu');
    if (!dropdown) return;

    // Close previously active dropdown if different
    if (activeDropdown && activeDropdown !== dropdown) {
      activeDropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
      activeDropdown.classList.remove('opacity-100', 'translate-y-0');
    }

    // Open this dropdown
    dropdown.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
    dropdown.classList.add('opacity-100', 'translate-y-0');
    activeDropdown = dropdown;
  }, true); // Capture phase

  // Handle mouse leave to close dropdown
  document.addEventListener('mouseleave', (e) => {
    const group = e.target.closest('.relative.group');
    if (!group) return;

    const dropdown = group.querySelector('.dropdown-menu');
    if (dropdown && dropdown === activeDropdown) {
      dropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
      dropdown.classList.remove('opacity-100', 'translate-y-0');
      activeDropdown = null;
    }
  }, true); // Capture phase

  // Close any active dropdown when clicking outside
  document.addEventListener('click', (e) => {
    // Don't close if clicking within a dropdown or its trigger
    if (e.target.closest('.relative.group')) return;

    if (activeDropdown) {
      activeDropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
      activeDropdown.classList.remove('opacity-100', 'translate-y-0');
      activeDropdown = null;
    }
  });

  // Prevent navigation when clicking Services button on desktop
  const servicesButtons = document.querySelectorAll('.relative.group > button.nav-item');
  servicesButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Prevent form submission for buttons
      e.preventDefault();

      // Toggle dropdown on click as alternative to hover
      const group = button.closest('.relative.group');
      const dropdown = group?.querySelector('.dropdown-menu');

      if (dropdown) {
        const isVisible = dropdown.classList.contains('opacity-100');

        if (isVisible) {
          dropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
          dropdown.classList.remove('opacity-100', 'translate-y-0');
          activeDropdown = null;
        } else {
          // Close any other active dropdown
          if (activeDropdown && activeDropdown !== dropdown) {
            activeDropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
            activeDropdown.classList.remove('opacity-100', 'translate-y-0');
          }

          dropdown.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
          dropdown.classList.add('opacity-100', 'translate-y-0');
          activeDropdown = dropdown;
        }
      }
    });
  });

  // Handle generic dropdowns with data-dropdown-toggle attribute (if any exist)
  const dropdownTriggers = document.querySelectorAll('[data-dropdown-toggle]');

  dropdownTriggers.forEach(trigger => {
    const dropdownId = trigger.getAttribute('data-dropdown-toggle');
    const dropdown = document.getElementById(dropdownId);

    if (!dropdown) return;

    // Set initial state
    dropdown.classList.add('hidden', 'opacity-0', 'transition-all', 'duration-300');

    // Toggle dropdown on click
    trigger.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      const isVisible = !dropdown.classList.contains('hidden');

      // Close other active dropdown
      if (activeDropdown && activeDropdown !== dropdown) {
        activeDropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
        activeDropdown.classList.remove('opacity-100', 'translate-y-0');
      }

      // Toggle current dropdown
      if (isVisible) {
        dropdown.classList.add('hidden', 'opacity-0');
        dropdown.classList.remove('opacity-100');
        activeDropdown = null;
      } else {
        dropdown.classList.remove('hidden');
        dropdown.classList.add('opacity-100');
        dropdown.classList.remove('opacity-0');
        activeDropdown = dropdown;
      }
    });
  });

  console.log('Unified dropdown system initialized');
}
