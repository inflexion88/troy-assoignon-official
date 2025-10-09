// Matrix-style counter animation
export function setupMatrixCounter(element, finalValue, duration = 2000) {
  const startTime = performance.now();
  const isCurrency = finalValue.includes('$');
  const isMillion = finalValue.includes('M');
  const isK = finalValue.includes('k');
  
  // Extract numeric value
  let numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
  if (isMillion) numericValue *= 1000000;
  if (isK) numericValue *= 1000;
  
  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    // Generate random number within range
    const currentValue = numericValue * easeOut;
    let displayValue;
    
    if (isMillion) {
      displayValue = `$${(currentValue / 1000000).toFixed(1)}M`;
    } else if (isK) {
      displayValue = `$${(currentValue / 1000).toFixed(1)}k`;
    } else {
      displayValue = `$${Math.round(currentValue).toLocaleString()}`;
    }
    
    // Add Matrix-style glitch effect
    if (Math.random() < 0.1) { // 10% chance of glitch
      const glitchChars = '0123456789$Mk';
      const glitchLength = Math.floor(Math.random() * 3) + 1;
      let glitchText = '';
      for (let i = 0; i < glitchLength; i++) {
        glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }
      element.textContent = glitchText;
    } else {
      element.textContent = displayValue;
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Ensure final value is displayed
      element.textContent = finalValue;
    }
  }
  
  requestAnimationFrame(animate);
} 