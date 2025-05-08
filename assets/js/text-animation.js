/**
 * Text Animation Module
 * Creates an animation effect that randomly changes the case and color of letters in text
 */
(function() {
    'use strict';
    
    // Initialize the text animation when the DOM is loaded
    document.addEventListener('DOMContentLoaded', initTextAnimation);
    
    /**
     * Initialize the text animation on elements with the 'animated-text' class
     */
    function initTextAnimation() {
        const elements = document.querySelectorAll('.animated-text');
        
        elements.forEach(element => {
            const text = element.textContent;
            element.textContent = ''; // Clear the element
            
            // Create individual spans for each character
            for (const char of text) {
                const span = document.createElement('span');
                span.textContent = char;
                span.classList.add('animated-char');
                element.appendChild(span);
            }
            
            // Start the animation
            animateText(element);
        });
    }
    
    /**
     * Animate the text by randomly changing case and color of characters
     * @param {HTMLElement} element - The element containing the animated characters
     */
    function animateText(element) {
        const chars = element.querySelectorAll('.animated-char');
        
        // Animation colors - sunny beach inspired palette
        const colors = [
            'var(--highlight)',           // Gold
            '#FF9E2C',                    // Sunset orange
            '#4FB0C6',                    // Ocean blue
            '#2E86AB',                    // Deep sea blue
            '#F4D35E'                     // Sand yellow
        ];
        
        // Apply random changes periodically
        setInterval(() => {
            // Select a random number of characters to change (1-3)
            const numToChange = Math.floor(Math.random() * 3) + 1;
            
            for (let i = 0; i < numToChange; i++) {
                // Select a random character
                const randomIndex = Math.floor(Math.random() * chars.length);
                const charSpan = chars[randomIndex];
                
                // Randomly decide to change case or color or both
                const changeType = Math.floor(Math.random() * 3);
                
                // Change case
                if (changeType === 0 || changeType === 2) {
                    const currentChar = charSpan.textContent;
                    charSpan.textContent = 
                        currentChar === currentChar.toUpperCase() 
                            ? currentChar.toLowerCase() 
                            : currentChar.toUpperCase();
                }
                
                // Change color
                if (changeType === 1 || changeType === 2) {
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    charSpan.style.color = randomColor;
                    
                    // Add a subtle transition for smooth color change
                    charSpan.style.transition = 'color 0.5s ease';
                    
                    // Reset color after a short delay
                    setTimeout(() => {
                        charSpan.style.color = '';
                    }, 2000);
                }
            }
        }, 200); // Change every 200ms for a dynamic but not too distracting effect
    }
    
})();