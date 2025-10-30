// Terminal Initialization
import { PositioningTerminal } from './terminal.js';
import { startMatrixRain } from './matrix-effects.js';

// Make matrix rain available globally
window.startMatrixRain = startMatrixRain;

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing PositioningIQ Terminal...');

  // Create terminal instance
  window.positioningTerminal = new PositioningTerminal();

  console.log('Terminal initialized successfully');
});
