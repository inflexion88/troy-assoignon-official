import { debugLog } from './logger.js';

// Matrix Rain Effect for Transformation Section
export function setupMatrixRain() {
  const transformationSection = document.getElementById('transformation');
  if (!transformationSection) return;

  const backgroundContainer = transformationSection.querySelector('.matrix-rain-background');
  const foregroundContainer = transformationSection.querySelector('.matrix-rain-foreground');

  if (!backgroundContainer || !foregroundContainer) {
    return;
  }

  const createColumn = (container, isForeground = false) => {
    const column = document.createElement('div');
    column.className = 'matrix-rain-column';

    const characters = isForeground ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' : '01';
    const repeatCount = isForeground ? Math.floor(Math.random() * 3) + 1 : Math.floor(Math.random() * 8) + 6;
    column.textContent = Array.from({ length: repeatCount }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('\n');

    column.style.left = (Math.random() * 100).toFixed(2) + '%';
    const duration = isForeground ? 4 + Math.random() * 2 : 3 + Math.random() * 1.5;
    column.style.animationDuration = duration + 's';

    column.addEventListener('animationend', () => {
      column.remove();
      createColumn(container, isForeground);
    });

    container.appendChild(column);
  };

  const backgroundColumns = Math.min(Math.floor(window.innerWidth / 28), 36);
  const foregroundColumns = Math.min(Math.floor(window.innerWidth / 38), 20);

  debugLog('matrix', `Initialising rain with ${backgroundColumns} background and ${foregroundColumns} foreground columns`);

  for (let i = 0; i < backgroundColumns; i++) {
    setTimeout(() => createColumn(backgroundContainer), i * 120);
  }

  for (let i = 0; i < foregroundColumns; i++) {
    setTimeout(() => createColumn(foregroundContainer, true), i * 180);
  }
}
