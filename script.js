document.addEventListener('DOMContentLoaded', function () {
    // Toggle the dropdown menu
    document.getElementById('dropdown-button').addEventListener('click', function() {
        const menu = document.getElementById('dropdown-menu');
        menu.classList.toggle('hidden');
    });

    // Elements to translate with their default text in English
    const elementsToTranslate = {
        "nav-start": "Start",
        "nav-about": "About",
        "nav-lenguajes": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "holatxt": "Hello, my name is...",
        "im-txt": "I'm a developer",
        "frontend-txt": "Frontend Developer",
        "tituloabout": "About Me",
        "textoaboutme": "I am a web developer with skills in HTML, CSS, JavaScript...",
        "frameworks": "Frameworks",
        "portfolio": "Portfolio",
        "portfolio2": "My Projects",
        "generador": "Generator",
        "landing": "Landing Page",
        "sign": "Sign Up Form",
        "caserita": "Caserita Website",
        "medical": "Medical App",
        "carwash": "Carwash Website",
        "contacto": "Contact Me",
        "cv": "Download CV",
        "dev": "Developed with:"
    };

    // Function to translate text
    const translateText = async (text, targetLanguage) => {
        const response = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: text,
                source: 'en',
                target: targetLanguage,
                format: 'text',
            }),
        });
        const result = await response.json();
        return result.translatedText;
    };

    // Function to translate the entire page
    const translatePage = async (targetLanguage) => {
        for (const [elementId, text] of Object.entries(elementsToTranslate)) {
            const translatedText = await translateText(text, targetLanguage);
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = translatedText;
            }
        }
    };

    // Event listeners for the language buttons
    document.getElementById('translate-en').addEventListener('click', function () {
        translatePage('en'); // Translate to English
    });

    document.getElementById('translate-es').addEventListener('click', function () {
        translatePage('es'); // Translate to Spanish
    });
});
