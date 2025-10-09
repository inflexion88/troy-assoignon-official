// Dropdown Menu Handler

export function setupDropdown() {
  // Handle generic dropdowns with data-dropdown-toggle attribute
  const dropdownTriggers = document.querySelectorAll('[data-dropdown-toggle]');
  
  dropdownTriggers.forEach(trigger => {
    const dropdownId = trigger.getAttribute('data-dropdown-toggle');
    const dropdown = document.getElementById(dropdownId);
    
    if (!dropdown) return;
    
    // Set initial state
    dropdown.classList.add('hidden', 'opacity-0', 'transition-all', 'duration-300', 'transform', 'origin-top-right', 'scale-95');
    
    // Toggle dropdown
    trigger.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      
      const isVisible = !dropdown.classList.contains('hidden');
      
      // Close all other dropdowns
      document.querySelectorAll('[data-dropdown]').forEach(otherDropdown => {
        if (otherDropdown.id !== dropdownId) {
          otherDropdown.classList.add('hidden', 'opacity-0', 'scale-95');
          otherDropdown.classList.remove('opacity-100', 'scale-100');
        }
      });
      
      // Toggle current dropdown
      if (isVisible) {
        dropdown.classList.add('opacity-0', 'scale-95');
        dropdown.classList.remove('opacity-100', 'scale-100');
        
        setTimeout(() => {
          dropdown.classList.add('hidden');
        }, 200);
      } else {
        dropdown.classList.remove('hidden');
        
        setTimeout(() => {
          dropdown.classList.add('opacity-100', 'scale-100');
          dropdown.classList.remove('opacity-0', 'scale-95');
        }, 10);
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', event => {
      if (!dropdown.contains(event.target) && !trigger.contains(event.target)) {
        dropdown.classList.add('opacity-0', 'scale-95');
        dropdown.classList.remove('opacity-100', 'scale-100');
        
        setTimeout(() => {
          dropdown.classList.add('hidden');
        }, 200);
      }
    });
  });
  
  // Handle the services dropdown specifically (it doesn't have data-dropdown-toggle)
  setupServicesDropdown();
  
  console.log('Dropdown menus initialized');
}

// Separate function to handle services dropdown across all pages
function setupServicesDropdown() {
  // Find all services dropdown triggers across all pages
  const servicesDropdownTriggers = document.querySelectorAll('.nav-item.flex.items-center, a[href="#services"].nav-item.flex, a[href="/#services"].nav-item.flex');
  const servicesDropdown = document.getElementById('services-dropdown');
  
  if (servicesDropdown) {
    // Make sure the dropdown is visible by default for debugging
    console.log('Services dropdown found:', servicesDropdown);
    
    // For each potential services trigger
    servicesDropdownTriggers.forEach(trigger => {
      // Set the trigger as type="button" to prevent navigation
      if (trigger.tagName === 'A') {
        // Store original href
        const originalHref = trigger.getAttribute('href');
        
        // For "Services" in navbar, make it just show dropdown without navigating
        if (trigger.textContent.trim().includes('Services') && 
            (trigger.classList.contains('nav-item') || trigger.classList.contains('items-center'))) {
          
          // For the main navbar "Services" link, override click to prevent navigation 
          // but still show dropdown on hover
          trigger.addEventListener('click', (e) => {
            if (window.innerWidth >= 768) {
              // On desktop, prevent navigation and just show dropdown
              e.preventDefault();
            } else {
              // On mobile, we'll allow navigation to services section
              // Don't prevent default
            }
          });
        }
      }
      
      // Handle hover events for desktop
      const parentContainer = trigger.closest('.relative.group');
      if (parentContainer) {
        // Use mouseenter on the parent container
        parentContainer.addEventListener('mouseenter', () => {
          servicesDropdown.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
          servicesDropdown.classList.add('opacity-100', 'translate-y-0');
        });
        
        // Use mouseleave on the parent container
        parentContainer.addEventListener('mouseleave', () => {
          servicesDropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
          servicesDropdown.classList.remove('opacity-100', 'translate-y-0');
        });
      }
    });
    
    // Make sure dropdown links work properly
    const dropdownLinks = servicesDropdown.querySelectorAll('a');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Allow the link to work normally
        e.stopPropagation();
      });
    });
  } else {
    console.warn('Services dropdown not found');
  }
  
  // Also handle any other page-specific dropdowns
  setupWorkshopDropdown();
}

// Handle workshop page specific dropdown if it exists
function setupWorkshopDropdown() {
  const workshopDropdownTrigger = document.querySelector('.workshop-dropdown-trigger');
  const workshopDropdown = document.getElementById('workshop-dropdown');
  
  if (workshopDropdownTrigger && workshopDropdown) {
    // Similar pattern as services dropdown
    workshopDropdownTrigger.addEventListener('mouseenter', () => {
      workshopDropdown.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
      workshopDropdown.classList.add('opacity-100', 'translate-y-0');
    });
    
    const dropdownContainer = workshopDropdownTrigger.closest('.relative.group');
    if (dropdownContainer) {
      dropdownContainer.addEventListener('mouseleave', () => {
        workshopDropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
        workshopDropdown.classList.remove('opacity-100', 'translate-y-0');
      });
    }
    
    // Click support
    workshopDropdownTrigger.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
      }
      
      const isVisible = !workshopDropdown.classList.contains('pointer-events-none');
      
      if (isVisible) {
        workshopDropdown.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
        workshopDropdown.classList.remove('opacity-100', 'translate-y-0');
      } else {
        workshopDropdown.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
        workshopDropdown.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }
} 