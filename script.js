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
    const typingElement = document.querySelector('.typing');
    const toggleBtn = document.getElementById('toggle-btn');

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

                // Inicializar Typed.js con las cadenas del archivo JSON
                // Limpiar el elemento de typing antes de crear una nueva instancia
                typingElement.innerHTML = ''; 
                new Typed(typingElement, {
                    strings: data[language]['typing'],
                    typeSpeed: 100,
                    backSpeed: 60,
                    loop: true
                });
            })
            .catch(error => {
                console.error('Error al cargar el contenido:', error);
            });
    };

    // Evento de cambio en el botón de alternancia
    toggleBtn.addEventListener('change', () => {
        currentLanguage = toggleBtn.checked ? 'es' : 'en';
        localStorage.setItem('language', currentLanguage);
        loadContent(currentLanguage); // Cargar contenido del nuevo idioma
    });

    // Cargar contenido inicial basado en el idioma actual
    loadContent(currentLanguage);
});
