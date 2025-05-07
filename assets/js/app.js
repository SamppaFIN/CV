/**
 * Main Application Module
 * Initializes all features and handles global functionality
 */

// Self-invoking function to avoid global scope pollution
(function() {
    'use strict';
    
    /**
     * Initialize the application
     */
    function initApp() {
        // Set current year in footer
        setCurrentYear();
        
        // Apply any polyfills needed for older browsers
        applyPolyfills();
        
        // Set up WCAG 2.1 accessibility features
        enhanceAccessibility();
    }
    
    /**
     * Set the current year in the footer copyright text
     */
    function setCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
    
    /**
     * Apply polyfills for older browsers
     */
    function applyPolyfills() {
        // Check for and apply missing browser features if needed
        // This is kept minimalistic since we're targeting modern browsers
        
        // Example: Simple forEach polyfill for older browsers
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }
    }
    
    /**
     * Enhance accessibility features beyond basic markup
     */
    function enhanceAccessibility() {
        // Ensure proper focus management
        manageFocusTrap();
        
        // Add keyboard navigation support
        addKeyboardSupport();
        
        // Apply proper ARIA attributes dynamically as needed
        updateAriaAttributes();
    }
    
    /**
     * Setup focus trap for modal elements
     */
    function manageFocusTrap() {
        // Trap focus in mobile menu when open
        const mobileMenu = document.getElementById('mobileMenu');
        const menuBtn = document.getElementById('menuBtn');
        
        if (mobileMenu && menuBtn) {
            menuBtn.addEventListener('click', () => {
                if (menuBtn.classList.contains('active')) {
                    // Focus the first focusable element in the menu
                    const focusableElements = mobileMenu.querySelectorAll('a, button');
                    if (focusableElements.length > 0) {
                        setTimeout(() => {
                            focusableElements[0].focus();
                        }, 100);
                    }
                }
            });
        }
    }
    
    /**
     * Add enhanced keyboard navigation support
     */
    function addKeyboardSupport() {
        // Close mobile menu with Escape key
        document.addEventListener('keydown', (e) => {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuBtn = document.getElementById('menuBtn');
            
            if (e.key === 'Escape' && mobileMenu && menuBtn.classList.contains('active')) {
                menuBtn.click();
                menuBtn.focus();
            }
        });
        
        // Add arrow key navigation for desktop nav
        const navLinks = document.querySelectorAll('.desktop-nav a');
        navLinks.forEach((link, index) => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' && index < navLinks.length - 1) {
                    e.preventDefault();
                    navLinks[index + 1].focus();
                } else if (e.key === 'ArrowLeft' && index > 0) {
                    e.preventDefault();
                    navLinks[index - 1].focus();
                }
            });
        });
    }
    
    /**
     * Update ARIA attributes for dynamic elements
     */
    function updateAriaAttributes() {
        // Update mobile menu button ARIA-expanded based on its state
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn) {
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-controls', 'mobileMenu');
            
            menuBtn.addEventListener('click', () => {
                const isExpanded = menuBtn.classList.contains('active');
                menuBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
            });
        }
        
        // Make sure all interactive elements have appropriate roles and states
        const interactiveElements = document.querySelectorAll('button, a');
        interactiveElements.forEach(element => {
            if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
                console.warn('Interactive element has no accessible name:', element);
            }
        });
    }
    
    // Initialize app when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', initApp);
    
})();
