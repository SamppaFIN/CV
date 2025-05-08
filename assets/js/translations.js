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
        "history.job1.title": "Senior Frontend Developer",
        "history.job1.company": "Tech Innovations Ltd",
        "history.job1.period": "2020 - Present",
        "history.job1.detail1": "Led the frontend development team for multiple high-profile client projects",
        "history.job1.detail2": "Implemented modern UI/UX practices and design systems",
        "history.job1.detail3": "Optimized application performance and accessibility",
        "history.job2.title": "Web Developer",
        "history.job2.company": "Digital Solutions Inc",
        "history.job2.period": "2017 - 2020",
        "history.job2.detail1": "Developed responsive websites for various clients across industries",
        "history.job2.detail2": "Created custom CMS solutions and e-commerce platforms",
        "history.job2.detail3": "Collaborated with design team to implement pixel-perfect interfaces",
        "history.job3.title": "Junior Developer",
        "history.job3.company": "Webcraft Studio",
        "history.job3.period": "2015 - 2017",
        "history.job3.detail1": "Assisted in developing website frontend components",
        "history.job3.detail2": "Implemented responsive designs and cross-browser compatibility",
        "history.job3.detail3": "Participated in code reviews and agile development processes",
        
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
        "history.job1.title": "Senior Frontend-kehittäjä",
        "history.job1.company": "Tech Innovations Oy",
        "history.job1.period": "2020 - Nykyinen",
        "history.job1.detail1": "Johdin frontend-kehitystiimiä useissa merkittävissä asiakasprojekteissa",
        "history.job1.detail2": "Toteutin moderneja UI/UX-käytäntöjä ja suunnittelujärjestelmiä",
        "history.job1.detail3": "Optimoin sovelluksen suorituskykyä ja saavutettavuutta",
        "history.job2.title": "Web-kehittäjä",
        "history.job2.company": "Digital Solutions Oy",
        "history.job2.period": "2017 - 2020",
        "history.job2.detail1": "Kehitin responsiivisia verkkosivustoja eri toimialojen asiakkaille",
        "history.job2.detail2": "Loin räätälöityjä CMS-ratkaisuja ja verkkokauppa-alustoja",
        "history.job2.detail3": "Tein yhteistyötä suunnittelutiimin kanssa toteuttaakseni pikselintarkkoja käyttöliittymiä",
        "history.job3.title": "Junior-kehittäjä",
        "history.job3.company": "Webcraft Studio",
        "history.job3.period": "2015 - 2017",
        "history.job3.detail1": "Avustin verkkosivuston frontend-komponenttien kehittämisessä",
        "history.job3.detail2": "Toteutin responsiivisia suunnitelmia ja selainyhteensopivuutta",
        "history.job3.detail3": "Osallistuin koodikatselmuksiin ja ketteriin kehitysprosesseihin",
        
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
