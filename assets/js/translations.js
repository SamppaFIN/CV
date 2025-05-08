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
        "sidebar.birthdate": "January 1, 1990",
        "sidebar.location": "Tampere, Finland",
        "sidebar.email": "infiniteinsamity@proton.me",
        "sidebar.phone": "+358 40 6871036",
        "sidebar.languages": "Languages",
        "sidebar.english": "English",
        "sidebar.finnish": "Finnish",
        "sidebar.swedish": "Swedish",
        "sidebar.hobbies": "Hobbies & Interests",
        "sidebar.hiking": "Hiking",
        "sidebar.reading": "Reading",
        "sidebar.coding": "Coding",
        "sidebar.chess": "Chess",
        
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
        "portfolio.project1.description": "My portfolio website at www.infiniteinsamity.com, which lists all the projects I've experimented with in the past few months.",
        "portfolio.project2.title": "Angelic Voices",
        "portfolio.project2.description": "A hobby project exploring frequency theories at https://angelic-waves-raisanensami.replit.app/",
        "portfolio.project3.title": "Merge Master",
        "portfolio.project3.description": "A game created in one hour with my 8-year-old son at https://merge-master-raisanensami.replit.app/",
        
        // History Section
        "history.title": "Work Experience",
        "history.job1.title": "Senior Developer",
        "history.job1.company": "Solita",
        "history.job1.period": "Recent",
        "history.job1.detail1": "Delivered solutions for multiple high-profile clients including Kesko, UPM, and Finntrafic",
        "history.job1.detail2": "Utilized AI tools to enhance development workflows and productivity",
        "history.job1.detail3": "Implemented complex systems with a focus on performance and usability",
        "history.job2.title": "Developer",
        "history.job2.company": "TeamUp, Symbio",
        "history.job2.period": "Previous",
        "history.job2.detail1": "Worked with clients like Patria, Neste Oil, and Sandvik",
        "history.job2.detail2": "Developed custom solutions across various technology stacks",
        "history.job2.detail3": "Collaborated with interdisciplinary teams to deliver complete solutions",
        "history.job3.title": "Developer",
        "history.job3.company": "Flander, E-Beos, University",
        "history.job3.period": "Earlier Career",
        "history.job3.detail1": "Worked with clients including GNT, Fujitsu, and Heikinheimo",
        "history.job3.detail2": "Implemented solutions for Motoral and Saarioinen",
        "history.job3.detail3": "Built foundation of technical expertise across multiple platforms",
        
        // Footer
        "footer.contactTitle": "Contact Information",
        "footer.email": "infiniteinsamity@proton.me",
        "footer.phone": "+358 40 6871036",
        "footer.website": "www.infiniteinsamity.com",
        "footer.techStackTitle": "This Site's Tech Stack",
        "footer.techStackDescription": "Built with HTML5, CSS3, and Vanilla JavaScript. Features include glassmorphism design, responsive layout, theme switching, and bilingual support (EN/FI).",
        "footer.copyright": "Sami Räisänen. All rights reserved."
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
        "sidebar.birthdate": "1. tammikuuta 1990",
        "sidebar.location": "Tampere, Suomi",
        "sidebar.email": "infiniteinsamity@proton.me",
        "sidebar.phone": "+358 40 6871036",
        "sidebar.languages": "Kielet",
        "sidebar.english": "Englanti",
        "sidebar.finnish": "Suomi",
        "sidebar.swedish": "Ruotsi",
        "sidebar.hobbies": "Harrastukset & Kiinnostukset",
        "sidebar.hiking": "Vaellus",
        "sidebar.reading": "Lukeminen",
        "sidebar.coding": "Koodaus",
        "sidebar.chess": "Shakki",
        
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
        "portfolio.project1.description": "Portfolio sivuni www.infiniteinsamity.com, listaa projektini mitä olen parissa kuukaudessa testaillut.",
        "portfolio.project2.title": "Angelic Voices",
        "portfolio.project2.description": "Harraste projekti tutkimaan frekvenssiteorioita: https://angelic-waves-raisanensami.replit.app/",
        "portfolio.project3.title": "Merge Master",
        "portfolio.project3.description": "Peli minkä loimme yhdessä 8-vuotiaan poikani kanssa tunnissa: https://merge-master-raisanensami.replit.app/",
        
        // History Section
        "history.title": "Työkokemus",
        "history.job1.title": "Senior Kehittäjä",
        "history.job1.company": "Solita",
        "history.job1.period": "Viimeisimmät",
        "history.job1.detail1": "Toimittanut ratkaisuja useille merkittäville asiakkaille kuten Kesko, UPM ja Finntrafic",
        "history.job1.detail2": "Hyödyntänyt tekoälytyökaluja kehitystyön ja tuottavuuden parantamiseksi",
        "history.job1.detail3": "Toteuttanut monimutkaisia järjestelmiä keskittyen suorituskykyyn ja käytettävyyteen",
        "history.job2.title": "Kehittäjä",
        "history.job2.company": "TeamUp, Symbio",
        "history.job2.period": "Aiemmat",
        "history.job2.detail1": "Työskennellyt asiakkaiden kuten Patria, Neste Oil ja Sandvik kanssa",
        "history.job2.detail2": "Kehittänyt räätälöityjä ratkaisuja eri teknologia-alustoilla",
        "history.job2.detail3": "Tehnyt yhteistyötä monialaisten tiimien kanssa kokonaisratkaisujen toimittamiseksi",
        "history.job3.title": "Kehittäjä",
        "history.job3.company": "Flander, E-Beos, Yliopisto",
        "history.job3.period": "Aiempi ura",
        "history.job3.detail1": "Työskennellyt asiakkaiden kuten GNT, Fujitsu ja Heikinheimo kanssa",
        "history.job3.detail2": "Toteuttanut ratkaisuja Motoralille ja Saarioisille",
        "history.job3.detail3": "Rakentanut teknisen osaamisen perustaa useilla alustoilla",
        
        // Footer
        "footer.contactTitle": "Yhteystiedot",
        "footer.email": "infiniteinsamity@proton.me",
        "footer.phone": "+358 40 6871036",
        "footer.website": "www.infiniteinsamity.com",
        "footer.techStackTitle": "Tämän Sivuston Teknologiat",
        "footer.techStackDescription": "Rakennettu HTML5:llä, CSS3:lla ja Vanilla JavaScriptillä. Ominaisuuksiin kuuluvat lasimorfismi-suunnittelu, responsiivinen asettelu, teeman vaihto ja kaksikielinen tuki (EN/FI).",
        "footer.copyright": "Sami Räisänen. Kaikki oikeudet pidätetään."
    }
};

// Export translations for use in other modules
window.translations = translations;
