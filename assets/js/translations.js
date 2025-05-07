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
        "name": "John Doe",
        
        // Hero Section
        "hero.name": "John Doe",
        "hero.slogan": "Innovative Web Developer & Designer",
        "hero.description": "Creating elegant, responsive and interactive web experiences",
        "hero.cta": "Get In Touch",
        
        // Sidebar Section
        "sidebar.personalInfo": "Personal Information",
        "sidebar.birthdate": "January 1, 1990",
        "sidebar.location": "Helsinki, Finland",
        "sidebar.email": "john.doe@example.com",
        "sidebar.phone": "+358 12 345 6789",
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
        "about.description": "I am a passionate web developer with over 5 years of experience creating beautiful, responsive and user-friendly websites. My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.",
        "about.description2": "With a background in both front-end and back-end development, I enjoy taking on complex challenges and turning them into elegant solutions. I'm constantly learning and exploring new technologies to stay at the forefront of web development.",
        
        // Skills Section
        "skills.title": "Skills",
        "skills.frontend": "Frontend Development",
        "skills.backend": "Backend Development",
        "skills.tools": "Tools & Technologies",
        
        // Portfolio Section
        "portfolio.title": "Portfolio",
        "portfolio.viewProject": "View Project",
        "portfolio.project1.title": "E-commerce Platform",
        "portfolio.project1.description": "A full-featured e-commerce solution with responsive design, payment integration and inventory management.",
        "portfolio.project2.title": "Travel Blog",
        "portfolio.project2.description": "A modern travel blog with interactive maps, photo galleries and multilingual support.",
        "portfolio.project3.title": "Task Management App",
        "portfolio.project3.description": "A productivity application with drag-and-drop interface, notifications and collaborative features.",
        
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
        "footer.email": "john.doe@example.com",
        "footer.phone": "+358 12 345 6789",
        "footer.website": "www.johndoe.com",
        "footer.techStackTitle": "This Site's Tech Stack",
        "footer.techStackDescription": "Built with HTML5, CSS3, and Vanilla JavaScript. Features include glassmorphism design, responsive layout, theme switching, and bilingual support (EN/FI).",
        "footer.copyright": "John Doe. All rights reserved."
    },
    fi: {
        // Navigation
        "nav.about": "Tietoa",
        "nav.skills": "Taidot",
        "nav.portfolio": "Portfolio",
        "nav.history": "Kokemus",
        "nav.contact": "Yhteystiedot",
        
        // Names
        "name": "John Doe",
        
        // Hero Section
        "hero.name": "John Doe",
        "hero.slogan": "Innovatiivinen Web-kehittäjä & Suunnittelija",
        "hero.description": "Luon tyylikkäitä, responsiivisia ja interaktiivisia verkkoelämyksiä",
        "hero.cta": "Ota Yhteyttä",
        
        // Sidebar Section
        "sidebar.personalInfo": "Henkilötiedot",
        "sidebar.birthdate": "1. tammikuuta 1990",
        "sidebar.location": "Helsinki, Suomi",
        "sidebar.email": "john.doe@example.com",
        "sidebar.phone": "+358 12 345 6789",
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
        "about.description": "Olen intohimoinen web-kehittäjä, jolla on yli 5 vuoden kokemus kauniiden, responsiivisten ja käyttäjäystävällisten verkkosivustojen luomisesta. Lähestymistapani yhdistää teknisen asiantuntemuksen luovaan ongelmanratkaisuun poikkeuksellisten digitaalisten kokemusten tuottamiseksi.",
        "about.description2": "Taustani sekä front-end- että back-end-kehityksessä auttaa minua ottamaan vastaan monimutkaisia haasteita ja muuttamaan ne tyylikkäiksi ratkaisuiksi. Opiskelen ja tutkin jatkuvasti uusia teknologioita pysyäkseni web-kehityksen eturintamassa.",
        
        // Skills Section
        "skills.title": "Taidot",
        "skills.frontend": "Frontend-kehitys",
        "skills.backend": "Backend-kehitys",
        "skills.tools": "Työkalut & Teknologiat",
        
        // Portfolio Section
        "portfolio.title": "Portfolio",
        "portfolio.viewProject": "Katso Projekti",
        "portfolio.project1.title": "Verkkokauppa-alusta",
        "portfolio.project1.description": "Täysiominaisuuksinen verkkokaupparatkaisu responsiivisella suunnittelulla, maksujärjestelmäintegraatioilla ja varastonhallinnalla.",
        "portfolio.project2.title": "Matkablogi",
        "portfolio.project2.description": "Moderni matkablogi interaktiivisilla kartoilla, kuvagallerioilla ja monikielisellä tuella.",
        "portfolio.project3.title": "Tehtävienhallintasovellus",
        "portfolio.project3.description": "Tuottavuussovellus, jossa on vedä ja pudota -käyttöliittymä, ilmoitukset ja yhteistyöominaisuudet.",
        
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
        "footer.email": "john.doe@example.com",
        "footer.phone": "+358 12 345 6789",
        "footer.website": "www.johndoe.com",
        "footer.techStackTitle": "Tämän Sivuston Teknologiat",
        "footer.techStackDescription": "Rakennettu HTML5:llä, CSS3:lla ja Vanilla JavaScriptillä. Ominaisuuksiin kuuluvat lasimorfismi-suunnittelu, responsiivinen asettelu, teeman vaihto ja kaksikielinen tuki (EN/FI).",
        "footer.copyright": "John Doe. Kaikki oikeudet pidätetään."
    }
};

// Export translations for use in other modules
window.translations = translations;
