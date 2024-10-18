document.addEventListener('DOMContentLoaded', function () {
    // Declaramos los elementos que vamos a usar
    const navstartElement = document.getElementById('nav-start');
    const navaboutElement = document.getElementById('nav-about');
    const navlenguajesElement = document.getElementById('nav-lenguajes');
    const navprojectsElement = document.getElementById('nav-projects');
    const navcontactElement = document.getElementById('nav-contact');
    const holaElement = document.getElementById('hola-txt');
    const imElement = document.getElementById('im-txt');
    const frontendElement = document.getElementById('frontend-txt');
    const tituloaboutElement = document.getElementById('tituloabout');
    const textoaboutmeElement = document.getElementById('textoaboutme');
    const frameworksElement = document.getElementById('frameworks');
    const portfolioElement = document.getElementById('portfolio');
    const portfolio2Element = document.getElementById('portfolio2');
    const generadorElement = document.getElementById('generador');
    const devElements = document.getElementsByClassName('dev'); // Colección de elementos con clase 'dev'
    const landingElement = document.getElementById('landing');
    const signElement = document.getElementById('sign');
    const caseritaElement = document.getElementById('caserita');
    const medicalElement = document.getElementById('medical');
    const carwashElement = document.getElementById('carwash');
    const contactoElement = document.getElementById('contacto');
    const cvElement = document.getElementById('cv');

    document.getElementById('dropdown-button').addEventListener('click', function() {
        const menu = document.getElementById('dropdown-menu');
        menu.classList.toggle('hidden');
    });

    // Cargar idioma desde localStorage si está disponible, por defecto 'en'
    let currentLanguage = localStorage.getItem('language') || 'en';

    // Función para cambiar el idioma según el país seleccionado
    const changeLanguageBasedOnCountry = (country) => {
        let language = 'en'; // Por defecto es inglés
        if (country === 'mexico') {
            language = 'es'; // Cambia a español si es México
        }
        loadContent(language);
        localStorage.setItem('language', language); // Guarda la preferencia en localStorage
    };

    // Evento de clic en los enlaces del dropdown
    document.getElementById('dropdown-menu').addEventListener('click', function (event) {
        if (event.target.closest('a')) {
            const country = event.target.closest('a').getAttribute('href').substring(1); // Obtiene el país del href
            changeLanguageBasedOnCountry(country);
        }
    });

    // Función para cargar el contenido
    const loadContent = (language) => {
        fetch('content.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la red.');
                }
                return response.json();
            })
            .then(data => {
                // Actualizar el contenido con el idioma seleccionado
                navstartElement.textContent = data[language]['nav-start'];
                navaboutElement.textContent = data[language]['nav-about'];
                navlenguajesElement.textContent = data[language]['nav-lenguajes'];
                navprojectsElement.textContent = data[language]['nav-projects'];
                navcontactElement.textContent = data[language]['nav-contact'];
                holaElement.textContent = data[language]['holatxt'];
                imElement.textContent = data[language]['im-txt'];
                frontendElement.textContent = data[language]['frontend-txt'];
                tituloaboutElement.textContent = data[language]['tituloabout'];
                textoaboutmeElement.textContent = data[language]['textoaboutme'];
                frameworksElement.textContent = data[language]['frameworks'];
                portfolioElement.textContent = data[language]['portfolio'];
                portfolio2Element.textContent = data[language]['portfolio2'];
                generadorElement.textContent = data[language]['generador'];
                landingElement.textContent = data[language]['landing'];
                signElement.textContent = data[language]['sign'];
                caseritaElement.textContent = data[language]['caserita'];
                medicalElement.textContent = data[language]['medical'];
                carwashElement.textContent = data[language]['carwash'];
                contactoElement.textContent = data[language]['contacto'];
                cvElement.textContent = data[language]['cv'];

                // Actualizar todos los elementos con clase 'dev'
                Array.from(devElements).forEach(el => {
                    el.textContent = data[language]['dev'];
                });
            })
            .catch(error => console.log(error));
    };

    // Cargar contenido inicial basado en el idioma actual
    loadContent(currentLanguage);
});
