/**
 * Theme Switcher Module
 * Handles toggling between light and dark themes
 * Saves user preference to localStorage
 */

// Self-invoking function to avoid global scope pollution
(function() {
    'use strict';
    
    // DOM Elements
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Theme options
    const THEMES = {
        LIGHT: 'light',
        DARK: 'dark'
    };
    
    // Theme icons
    const ICONS = {
        LIGHT: '<i class="fas fa-moon"></i>',  // Moon icon for switching to dark mode
        DARK: '<i class="fas fa-sun"></i>'     // Sun icon for switching to light mode
    };
    
    /**
     * Initialize theme based on:
     * 1. User's previously saved preference
     * 2. System preference
     * 3. Default to light theme if neither is available
     */
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // If user has dark mode preference at OS level
            setTheme(THEMES.DARK);
        } else {
            // Default to light theme
            setTheme(THEMES.LIGHT);
        }
    }
    
    /**
     * Set the active theme and update UI accordingly
     * @param {string} theme - The theme to set ('light' or 'dark')
     */
    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        
        // Update toggle button icon
        if (theme === THEMES.DARK) {
            themeToggleBtn.innerHTML = ICONS.DARK;
        } else {
            themeToggleBtn.innerHTML = ICONS.LIGHT;
        }
        
        // Save preference to localStorage
        localStorage.setItem('theme', theme);
    }
    
    /**
     * Toggle between light and dark themes
     */
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        
        setTheme(newTheme);
    }
    
    // Event Listeners
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    // Initialize theme on page load
    document.addEventListener('DOMContentLoaded', initTheme);
    
    // Handle system preference changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            const newTheme = e.matches ? THEMES.DARK : THEMES.LIGHT;
            setTheme(newTheme);
        });
    }
    
    // Export functions for potential use in other modules
    window.themeManager = {
        setTheme,
        toggleTheme
    };
})();
