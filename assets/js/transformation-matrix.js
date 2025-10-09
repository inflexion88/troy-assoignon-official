// Matrix Effect for Transformation Section
export function setupTransformationMatrix() {
  console.log('Setting up transformation matrix effect...');
  
  const transformationSection = document.getElementById('transformation');
  if (!transformationSection) return;
  
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.className = 'absolute inset-0';
  canvas.style.opacity = '0.07';
  
  // Find the matrix-rain-background div and insert the canvas
  const matrixContainer = transformationSection.querySelector('.matrix-rain-background');
  if (!matrixContainer) return;
  
  matrixContainer.appendChild(canvas);
  
  // Set dimensions
  const resizeCanvas = () => {
    canvas.width = transformationSection.offsetWidth;
    canvas.height = transformationSection.offsetHeight;
  };
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Matrix effect setup
  const ctx = canvas.getContext('2d');
  
  // Characters for matrix rain - same as hero section
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$€¥£฿'.split('');
  
  // Column setup
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  
  // Drops positions
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }
  
  // Draw the matrix effect
  function draw() {
    // Black background with opacity
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#65E48F'; // Accent green
    ctx.font = `${fontSize}px monospace`;
    
    // Draw characters
    for (let i = 0; i < drops.length; i++) {
      // Random character
      const char = chars[Math.floor(Math.random() * chars.length)];
      
      // Draw character
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      
      // Move drop and reset when it reaches the bottom
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
        drops[i] = 0;
      }
      
      // Move drop down
      drops[i]++;
    }
  }
  
  // Animation loop
  const matrixInterval = setInterval(draw, 40);
  
  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(matrixInterval);
  });
  
  console.log('Transformation matrix effect initialized');
  return {
    destroy: () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
    }
  };
} 
