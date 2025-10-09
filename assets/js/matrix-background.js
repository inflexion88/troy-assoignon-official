import { debugLog } from './logger.js';

// Matrix Background Effect
export function setupMatrixBackground() {
  debugLog('matrix-background', 'Initialising matrix background effect');

  const heroSection = document.querySelector('.hero-section');
  const matrixContainer = document.getElementById('matrix-background-container');

  if (!heroSection || !matrixContainer) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'absolute inset-0 z-0';
  canvas.style.pointerEvents = 'none';
  canvas.style.opacity = '0.07';

  matrixContainer.appendChild(canvas);
  debugLog('matrix-background', 'Canvas appended to matrix container');

  const ctx = canvas.getContext('2d');
  const fontSize = 16;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%';
  let drops = [];

  const resetDrops = () => {
    const maxColumns = Math.max(Math.floor(canvas.width / fontSize), 1);
    drops = Array.from({ length: maxColumns }, () => Math.random() * -100);
    debugLog('matrix-background', `Configured ${maxColumns} columns for matrix background`);
  };

  const resizeCanvas = () => {
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;
    debugLog('matrix-background', `Canvas resized to ${canvas.width}x${canvas.height}`);
    resetDrops();
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#65E48F';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = characters.charAt(Math.floor(Math.random() * characters.length));
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  };

  const matrixInterval = setInterval(draw, 60);
  debugLog('matrix-background', 'Matrix background effect running');

  window.addEventListener('beforeunload', () => {
    clearInterval(matrixInterval);
  });

  return {
    destroy: () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
    },
  };
}


