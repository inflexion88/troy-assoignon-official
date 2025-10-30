// Matrix Rain Effects for PositioningIQ Terminal
// Creates falling binary rain and user name rain effect

export function startMatrixRain(name) {
  // Create Matrix rain containers
  const bgMatrixRain = document.createElement('div');
  bgMatrixRain.className = 'background-matrix-rain';
  document.body.appendChild(bgMatrixRain);

  const nameMatrixRain = document.createElement('div');
  nameMatrixRain.className = 'name-matrix-rain';
  document.body.appendChild(nameMatrixRain);

  let isRainRunning = true;

  // Background Matrix rain effect (binary digits)
  function createBackgroundColumn() {
    if (!isRainRunning) return;

    const column = document.createElement('div');
    column.className = 'background-matrix-column';

    // Create random binary column
    let columnText = '';
    const matrixChars = '01';
    const repeats = Math.floor(Math.random() * 15) + 10; // 10-25 characters
    for (let i = 0; i < repeats; i++) {
      columnText += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length)) + '\n';
    }
    column.textContent = columnText;

    // Random horizontal position
    column.style.left = `${Math.random() * window.innerWidth}px`;

    // Random fall speed (8-12 seconds)
    column.style.animationDuration = `${Math.random() * 4 + 8}s`;

    // Recreate column when animation ends
    column.addEventListener('animationend', () => {
      column.remove();
      if (bgMatrixRain.parentNode && isRainRunning) {
        createBackgroundColumn();
      }
    });

    bgMatrixRain.appendChild(column);
  }

  // Name Matrix rain effect (user's name)
  function createNameColumn() {
    if (!isRainRunning) return;

    const column = document.createElement('div');
    column.className = 'name-matrix-column';

    // Display name in uppercase, doubled for visual effect
    const fullName = name.toUpperCase();
    column.textContent = fullName + '\n' + fullName;

    // Position using grid-based distribution for better spacing
    const columnWidth = 20;
    const totalColumns = Math.floor(window.innerWidth / (columnWidth * 2));
    const columnIndex = Math.floor(Math.random() * totalColumns);
    const xPosition = (columnIndex * columnWidth * 2) + Math.random() * columnWidth;
    column.style.left = `${xPosition}px`;

    // Slower fall speed (6-8 seconds)
    column.style.animationDuration = `${Math.random() * 2 + 6}s`;

    // Recreate column when animation ends
    column.addEventListener('animationend', () => {
      column.remove();
      if (nameMatrixRain.parentNode && isRainRunning) {
        createNameColumn();
      }
    });

    nameMatrixRain.appendChild(column);
  }

  // Initialize background rain (20 columns spawned over 3 seconds)
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createBackgroundColumn(), Math.random() * 3000);
  }

  // Initialize name rain (columns based on screen width)
  const totalInitialColumns = Math.floor(window.innerWidth / 40);
  for (let i = 0; i < totalInitialColumns; i++) {
    setTimeout(() => createNameColumn(), i * 500);
  }

  // Return function to stop the rain if needed
  return {
    stop: () => {
      isRainRunning = false;
      // Optionally remove containers after stopping
      setTimeout(() => {
        if (bgMatrixRain.parentNode) bgMatrixRain.remove();
        if (nameMatrixRain.parentNode) nameMatrixRain.remove();
      }, 10000); // Let existing columns finish
    }
  };
}

// Make available globally for compatibility
if (typeof window !== 'undefined') {
  window.startMatrixRain = startMatrixRain;
}
