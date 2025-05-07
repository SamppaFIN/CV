/**
 * Language Switcher Module
 * Handles switching between English and Finnish localization
 * Updates all translatable elements and saves user preference
 */

// Self-invoking function to avoid global scope pollution
(function() {
    'use strict';
    
    // DOM Elements
    const languageToggleBtn = document.getElementById('langToggle');
    
    // Language options
    const LANGUAGES = {
        ENGLISH: 'en',
        FINNISH: 'fi'
    };
    
    // Button labels for each language
    const LABELS = {
        ENGLISH: 'EN',
        FINNISH: 'FI'
    };
    
    // Current active language
    let currentLanguage = LANGUAGES.ENGLISH;
    
    /**
     * Initialize language based on:
     * 1. User's previously saved preference
     * 2. Browser language
     * 3. Default to English if neither matches supported languages
     */
    function initLanguage() {
        const savedLanguage = localStorage.getItem('language');
        
        if (savedLanguage && (savedLanguage === LANGUAGES.ENGLISH || savedLanguage === LANGUAGES.FINNISH)) {
            setLanguage(savedLanguage);
        } else {
            // Check browser language
            const browserLang = navigator.language || navigator.userLanguage;
            
            if (browserLang && browserLang.startsWith('fi')) {
                setLanguage(LANGUAGES.FINNISH);
            } else {
                // Default to English
                setLanguage(LANGUAGES.ENGLISH);
            }
        }
    }
    
    /**
     * Set the active language and update UI accordingly
     * @param {string} lang - The language code to set ('en' or 'fi')
     */
    function setLanguage(lang) {
        if (!window.translations || !window.translations[lang]) {
            console.error('Translations not available for language:', lang);
            return;
        }
        
        currentLanguage = lang;
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Update all translatable elements
        updateTranslations();
        
        // Update toggle button label
        if (lang === LANGUAGES.FINNISH) {
            languageToggleBtn.innerHTML = `<span>${LABELS.FINNISH}</span>`;
        } else {
            languageToggleBtn.innerHTML = `<span>${LABELS.ENGLISH}</span>`;
        }
        
        // Save preference to localStorage
        localStorage.setItem('language', lang);
    }
    
    /**
     * Toggle between English and Finnish languages
     */
    function toggleLanguage() {
        const newLanguage = currentLanguage === LANGUAGES.ENGLISH ? LANGUAGES.FINNISH : LANGUAGES.ENGLISH;
        setLanguage(newLanguage);
    }
    
    /**
     * Update all DOM elements with translations
     */
    function updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            
            if (window.translations[currentLanguage][key]) {
                element.textContent = window.translations[currentLanguage][key];
            } else {
                console.warn(`Translation key not found: ${key}`);
            }
        });
    }
    
    // Event Listeners
    languageToggleBtn.addEventListener('click', toggleLanguage);
    
    // Initialize language on page load
    document.addEventListener('DOMContentLoaded', initLanguage);
    
    // Export functions for potential use in other modules
    window.languageManager = {
        setLanguage,
        toggleLanguage,
        getCurrentLanguage: () => currentLanguage
    };
})();
