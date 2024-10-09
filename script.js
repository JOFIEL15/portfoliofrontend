document.addEventListener('DOMContentLoaded', function () {
    // Elementos de navegación y contenido
    const navstartElement = document.getElementById('nav-start');
    const navaboutElement = document.getElementById('nav-about');
    const navlenguajesElement = document.getElementById('nav-lenguajes');
    const navprojectsElement = document.getElementById('nav-projects');
    const navcontactElement = document.getElementById('nav-contact');
    const holaElement = document.getElementById('hola-txt');
    const imElement = document.getElementById('im-txt');
    const frontendElement = document.getElementById('frontend-txt');
    const toggleBtn = document.getElementById('toggle-btn');
    const tituloaboutElement = document.getElementById('tituloabout');
    const textoaboutmeElement = document.getElementById('textoaboutme');
    const frameworksElement = document.getElementById('frameworks');
    const portfolioElement = document.getElementById('portfolio');
    const portfolio2Element = document.getElementById('portfolio2');
    const generadorElement = document.getElementById('generador');
    const devElements = document.getElementsByClassName('dev'); // Colección de elementos con clase 'dev'
    const landingElement=document.getElementById('landing');
    const signElement=document.getElementById('sign');
    const caseritaElement=document.getElementById('caserita');
    const medicalElement=document.getElementById('medical');
    const carwashElement=document.getElementById('carwash');
    const contactoElement=document.getElementById('contacto');




    // Cargar idioma desde localStorage si está disponible, por defecto 'en'
    let currentLanguage = localStorage.getItem('language') || 'en';
    toggleBtn.checked = currentLanguage === 'es';

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
                landingElement.textContent=data[language]['landing'];
                signElement.textContent=data[language]['sign'];
                caseritaElement.textContent=data[language]['caserita'];
                medicalElement.textContent=data[language]['medical'];
                carwashElement.textContent=data[language]['carwash'];
                contactoElement.textContent=data[language]['contacto'];




                // Actualizar todos los elementos con clase 'dev'
                Array.from(devElements).forEach(el => {
                    el.textContent = data[language]['dev'];
                });
            })
            .catch(error => console.log(error));
    };

    // Evento de cambio en el botón de alternancia
    toggleBtn.addEventListener('change', () => {
        currentLanguage = toggleBtn.checked ? 'es' : 'en';
        loadContent(currentLanguage);
        localStorage.setItem('language', currentLanguage); // Guarda la preferencia en localStorage
    });

    // Cargar contenido inicial basado en el idioma actual
    loadContent(currentLanguage);
});
