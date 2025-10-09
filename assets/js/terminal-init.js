// Terminal.js has been moved to old-files, so commenting out this import
// import { startMatrixSequence, createMatrixEffects, handlePillChoice } from './terminal.js';

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Terminal initializing...'); // Debug log
  console.warn('Terminal functions are disabled - terminal.js has been archived');

  // Get terminal elements
  const terminalOutput = document.getElementById('terminal-output');
  const namePrompt = document.getElementById('name-prompt');
  const nameInputContainer = document.getElementById('name-input-container');
  const nameInput = document.getElementById('name-input');

  // Show a message that this feature is disabled
  if (namePrompt) {
    namePrompt.textContent = 'Terminal feature is currently disabled';
  }
}); 
