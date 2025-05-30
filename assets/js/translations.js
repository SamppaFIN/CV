/**
 * Translations Module
 * Handles multilingual support for the portfolio website.
 * Contains translations for all text content in English and Finnish.
 */

const translations = {
    en: {
        // Navigation
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.portfolio": "Portfolio",
        "nav.history": "Experience",
        "nav.contact": "Contact",
        
        // Names
        "name": "Sami Räisänen",
        
        // Hero Section
        "hero.name": "Sami Räisänen",
        "hero.slogan": "Forest Coder, AI bot army commander",
        "hero.description": "Let's tackle your IT problems with AI",
        "hero.cta": "Get In Touch",
        
        // Sidebar Section
        "sidebar.personalInfo": "Personal Information",
        "sidebar.location": "Tampere, Finland",
        "sidebar.email": "infiniteinsamity@proton.me",
        "sidebar.phone": "Contact me on WhatsApp",
        "sidebar.languages": "Languages",
        "sidebar.english": "English",
        "sidebar.finnish": "Finnish",
        "sidebar.hobbies": "Hobbies & Interests",
        "sidebar.hiking": "Hiking",
        "sidebar.coding": "Coding",
        "sidebar.music": "Listening music",
        "sidebar.billiards": "Billiards",
        
        // About Section
        "about.title": "About Me",
        "about.description": "With 30 years of coding experience, I've witnessed the evolution of technology from 8-bit computers to today's cloud-based, AI-powered systems.",
        "about.description2": "If you've ever struggled with an unusable program, experienced a crash during a critical save, or stared confused at an incomprehensible error message - I might have been somewhat to blame. My apologies... or not really! Those were my learning years! Now I have an army of Guru bots helping me create software exactly as I've always envisioned.",
        
        // Skills Section
        "skills.title": "Skills",
        "skills.frontend": "Frontend Development",
        "skills.backend": "Backend Development",
        "skills.tools": "Tools & Technologies",
        
        // Portfolio Section
        "portfolio.title": "Portfolio",
        "portfolio.viewProject": "View Project",
        "portfolio.project1.title": "Portfolio Website",
        "portfolio.project1.description": "My portfolio website at infiniteinsamity.com, which lists all the projects I've experimented with in the past few months.",
        "portfolio.project2.title": "Angelic Voices",
        "portfolio.project2.description": "A hobby project exploring frequency theories accross history, culture, music and more",
        "portfolio.project3.title": "Merge Master",
        "portfolio.project3.description": "A game created in one hour with my 8-year-old son in few hours",
        
        // History Section
        "history.title": "Experience & Tech Stack",
        "history.job1.title": "Senior Developer",
        "history.job1.company": "Solita",
        "history.job1.period": "2014 - 2025",
        "history.job1.details": [
            "Väylävirasto - Traffic Management System",
            "Motoral - Automotive Solutions",
            "RamiRent - Equipment Management",
            "Kesko - Retail Solutions"
        ],
        "history.job2.title": "Developer",
        "history.job2.company": "TeamUp",
        "history.job2.period": "2012 - 2014",
        "history.job2.details": [
            "Lead Developer for Social Media Service Platform"
        ],
        "history.job3.title": "Developer",
        "history.job3.company": "Flander/Symbio",
        "history.job3.period": "2008 - 2012",
        "history.job3.details": [
            "Sandvik Automine UI Development"
        ],
        "history.job4.title": "Developer",
        "history.job4.company": "E-Bros",
        "history.job4.period": "2000 - 2008",
        "history.job4.details": [
            "CRM System Development for GNT"
        ],
        
        // Footer
        "footer.contactTitle": "Contact Information",
        "footer.email": "infiniteinsamity@proton.me",
        "footer.phone": "Contact me on WhatsApp",
        "footer.website": "infiniteinsamity.com",
        "footer.techStackTitle": "This Site's Tech Stack",
        "footer.techStackDescription": "Built with HTML5, CSS3, and Vanilla JavaScript. Features include glassmorphism design, responsive layout, theme switching, and bilingual support (EN/FI).",
        "footer.copyright": "Sami Räisänen. All rights reserved.",
        "footer.techStackAI": "AI Stack",
        "footer.techStackAIDescription": "OpenAI, Cursor, Replit, Perplexity, Gemini"
    },
    fi: {
        // Navigation
        "nav.about": "Tietoa",
        "nav.skills": "Taidot",
        "nav.portfolio": "Portfolio",
        "nav.history": "Kokemus",
        "nav.contact": "Yhteystiedot",
        
        // Names
        "name": "Sami Räisänen",
        
        // Hero Section
        "hero.name": "Sami Räisänen",
        "hero.slogan": "Metsäkoodari, botti armeijan komentaja",
        "hero.description": "Taklataan IT ongelmasi AI:n avulla",
        "hero.cta": "Ota Yhteyttä",
        
        // Sidebar Section
        "sidebar.personalInfo": "Henkilötiedot",
        "sidebar.location": "Tampere, Finland",
        "sidebar.email": "infiniteinsamity@proton.me",
        "sidebar.phone": "Ota yhteyttä WhatsAppilla",
        "sidebar.languages": "Kielet",
        "sidebar.english": "Englanti",
        "sidebar.finnish": "Suomi",
        "sidebar.hobbies": "Harrastukset & Kiinnostukset",
        "sidebar.hiking": "Vaellus",
        "sidebar.coding": "Koodaus",
        "sidebar.music": "Musiikin kuuntelu",
        "sidebar.billiards": "Biljardi",
        
        // About Section
        "about.title": "Tietoa Minusta",
        "about.description": "30 vuoden koodauskokemuksella olen todistanut teknologian kehitystä 8-bittisten tietokoneiden ajoista nykypäivän pilviperustaisiin, tekoälyllä toimiviin järjestelmiin.",
        "about.description2": "Jos olet koskaan kamppaillut käyttökelvottoman ohjelman kanssa, kokenut kaatumisen kriittisen tallennuksen aikana tai tuijottanut ymmälläsi käsittämätöntä virheilmoitusta – saatoin olla jossain määrin syypää siihen. Pahoitteluni... tai ei oikeastaan! Ne olivat oppivuosiani! Nyt minulla on käytössäni armeijallinen Guru-botteja, jotka auttavat luomaan ohjelmistoja juuri niin kuin olen aina kuvitellut.",
        
        // Skills Section
        "skills.title": "Taidot",
        "skills.frontend": "Frontend-kehitys",
        "skills.backend": "Backend-kehitys",
        "skills.tools": "Työkalut & Teknologiat",
        
        // Portfolio Section
        "portfolio.title": "Portfolio",
        "portfolio.viewProject": "Katso Projekti",
        "portfolio.project1.title": "Portfolio Sivusto",
        "portfolio.project1.description": "Portfolio sivuni infiniteinsamity.com, listaa projektini mitä olen parissa kuukaudessa testaillut.",
        "portfolio.project2.title": "Angelic Voices",
        "portfolio.project2.description": "Harraste projekti tutkimaan frekvenssiteorioita",
        "portfolio.project3.title": "Merge Master",
        "portfolio.project3.description": "Peli minkä loimme yhdessä 8-vuotiaan poikani kanssa tunnissa",
        
        // History Section
        "history.title": "Kokemus & Teknologiat",
        "history.job1.title": "Senior Kehittäjä",
        "history.job1.company": "Solita",
        "history.job1.period": "2014 - 2025",
        "history.job1.details": [
            "Väylävirasto - Liikenteenhallintajärjestelmä",
            "Motoral - Autoalan ratkaisut",
            "RamiRent - Kalustonhallinta",
            "Kesko - Vähittäiskaupan ratkaisut"
        ],
        "history.job2.title": "Kehittäjä",
        "history.job2.company": "TeamUp",
        "history.job2.period": "2012 - 2014",
        "history.job2.details": [
            "Pääkehittäjä sosiaalisen median palvelualustalle"
        ],
        "history.job3.title": "Kehittäjä",
        "history.job3.company": "Flander/Symbio",
        "history.job3.period": "2008 - 2012",
        "history.job3.details": [
            "Sandvik Automine käyttöliittymäkehitys"
        ],
        "history.job4.title": "Kehittäjä",
        "history.job4.company": "E-Bros",
        "history.job4.period": "2000 - 2008",
        "history.job4.details": [
            "GNT:n asiakkuudenhallintajärjestelmän kehitys"
        ],
        
        // Footer
        "footer.contactTitle": "Yhteystiedot",
        "footer.email": "infiniteinsamity@proton.me",
        "footer.phone": "Ota yhteyttä WhatsAppilla",
        "footer.website": "infiniteinsamity.com",
        "footer.techStackTitle": "Tämän Sivuston Teknologiat",
        "footer.techStackDescription": "Rakennettu HTML5:llä, CSS3:lla ja Vanilla JavaScriptillä. Ominaisuuksiin kuuluvat lasimorfismi-suunnittelu, responsiivinen asettelu, teeman vaihto ja kaksikielinen tuki (EN/FI).",
        "footer.copyright": "Sami Räisänen. Kaikki oikeudet pidätetään.",
        "footer.techStackAI": "AI Stack",
        "footer.techStackAIDescription": "OpenAI, Cursor, Replit, Perplexity, Gemini"
    }
};

// Export translations for use in other modules
window.translations = translations;
