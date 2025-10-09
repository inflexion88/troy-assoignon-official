// Button Effects - Matrix Explosion

export function setupMatrixExplosion() {
  console.log('Setting up matrix explosion effect...');
  
  // Get all buttons that should have the effect
  const buttons = document.querySelectorAll('a[href="#services"], button[type="submit"]');
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Only apply the explosion effect if it's a link without a real page navigation
      if (button.tagName === 'A' && button.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        // Create explosion
        createMatrixExplosion(e.clientX, e.clientY);
        
        // Navigate to the target after a short delay
        const targetId = button.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    });
  });
  
  function createMatrixExplosion(x, y) {
    const container = document.createElement('div');
    container.className = 'fixed inset-0 pointer-events-none z-[100]';
    document.body.appendChild(container);
    
    const particleCount = 50; // Reduced from 100 to improve performance
    const colors = ['#65E48F', '#ffffff', '#18181b'];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$€¥£฿'.split('');
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // Random character
      const char = characters[Math.floor(Math.random() * characters.length)];
      
      // Random styling
      const size = Math.random() * 20 + 10;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random position and movement
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 300 + 50;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      
      // Set styles
      Object.assign(particle.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        color,
        fontSize: `${size}px`,
        fontFamily: 'monospace',
        opacity: '1',
        zIndex: '200',
        textShadow: '0 0 3px rgba(101, 228, 143, 0.8)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      });
      
      particle.textContent = char;
      container.appendChild(particle);
      
      // Animate the particle
      const startTime = performance.now();
      const duration = Math.random() * 1000 + 1000;
      
      function animateParticle(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = elapsed / duration;
        
        if (progress >= 1) {
          particle.remove();
          return;
        }
        
        const currentX = x + vx * progress;
        const currentY = y + vy * progress + 0.5 * 980 * progress * progress;
        const currentOpacity = 1 - progress;
        
        Object.assign(particle.style, {
          left: `${currentX}px`,
          top: `${currentY}px`,
          opacity: currentOpacity
        });
        
        requestAnimationFrame(animateParticle);
      }
      
      requestAnimationFrame(animateParticle);
    }
    
    // Remove container after all animations are done
    setTimeout(() => {
      container.remove();
    }, 2000);
  }
  
  console.log('Matrix explosion effect initialized');
} 