import { setupMatrixCounter } from './matrix-counter.js';

export function setupResultsSection() {
  console.log('Setting up results section...');
  
  const resultsData = [
    {
      value: '$50M',
      title: 'Real Estate Invest',
      description: 'Texas real estate strategy 330 homes sold, $50M sales',
      icon: `<svg class="w-6 h-6 text-accent-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" fill="currentColor"/>
            </svg>`
    },
    {
      value: '$7.6M',
      title: 'Software & SaSS',
      description: 'Software growth strategy, $7.6M in profit achieved.',
      icon: `<svg class="w-6 h-6 text-accent-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
            </svg>`
    },
    {
      value: '$4.5M',
      title: 'Real Estate Fund',
      description: 'Designed assets for $4.5M REI fund raise in 6 months.',
      icon: `<svg class="w-6 h-6 text-accent-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" fill="currentColor"/>
            </svg>`
    },
    {
      value: '$619k',
      title: 'Humanitarian Aid',
      description: 'Raised $619K, evacuated 2,750 women and children.',
      icon: `<svg class="w-6 h-6 text-accent-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
            </svg>`
    }
  ];

  // Create results section HTML
  const resultsHTML = `
    <div class="relative z-10 max-w-[90%] md:max-w-[80%] mx-auto flex flex-col items-center md:block">
      <!-- Results Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        ${resultsData.map((result, index) => `
          <div class="relative group opacity-0 animate-fade-in w-full md:w-auto mx-auto md:mx-0" style="animation-delay: ${index * 100}ms; animation-fill-mode: forwards;">
            <div class="flex items-center h-full p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-luxury-800/10 transition-all duration-300 hover:border-accent-green/20 hover:bg-black/40 max-w-md md:max-w-none mx-auto md:mx-0">
              <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-black/40 backdrop-blur-sm mr-3">
                ${result.icon}
              </div>
              <div>
                <div class="text-2xl font-display font-bold text-accent-green mb-0.5 matrix-counter" data-value="${result.value}">$0</div>
                <div class="flex flex-col">
                  <h3 class="text-sm font-display font-medium text-white">${result.title}</h3>
                  <p class="text-xs text-luxury-400 leading-tight mt-0.5">${result.description}</p>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Find the results container in the hero section
  const resultsContainer = document.getElementById('results-container');
  
  if (resultsContainer) {
    // Make sure we apply the z-index to the container as well
    resultsContainer.classList.add('relative', 'z-10');
    resultsContainer.innerHTML = resultsHTML;
    console.log('Results inserted into hero section container');
  } else {
    console.warn('Could not find results container in hero section');
    
    // Fallback - look for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const fallbackContainer = document.createElement('div');
      fallbackContainer.className = 'container mx-auto px-4 sm:px-6 relative z-10';
      fallbackContainer.innerHTML = resultsHTML;
      heroSection.appendChild(fallbackContainer);
      console.log('Fallback: Appended results directly to hero section');
    } else {
      console.error('Could not find hero section');
    }
  }

  // Initialize counters
  console.log('Initializing counters...');
  const counters = document.querySelectorAll('.matrix-counter');
  console.log('Found counters:', counters.length);
  
  counters.forEach(counter => {
    const finalValue = counter.dataset.value;
    setupMatrixCounter(counter, finalValue);
  });

  console.log('Results section setup complete.');
} 