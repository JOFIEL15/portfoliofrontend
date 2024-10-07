   // Your JavaScript code goes here
        document.addEventListener('DOMContentLoaded', function () {
            var typed = new Typed('.typing', {
                strings: ['', 'Software engineer,', 'Frontend Developer,', ' 21 years old'],
                typeSpeed: 100,
                backSpeed: 60, // Corrected this
                loop: true
            });

            const navstartElement = document.getElementById('nav-start');
            const navaboutElement = document.getElementById('nav-about');
            const navlenguajesElement = document.getElementById('nav-lenguajes');
            const navprojectsElement = document.getElementById('nav-projects');
            const navcontactElement = document.getElementById('nav-contact');
            const holaElement = document.getElementById('hola-txt');
            const imElement = document.getElementById('im-txt');
            const frontendElement = document.getElementById('frontend-txt');
            const toggleBtn = document.getElementById('toggle-btn');

            // Load language from localStorage if available, otherwise default to 'en'
            let currentLanguage = localStorage.getItem('language') || 'en';
            toggleBtn.checked = currentLanguage === 'es';

            const loadContent = (language) => {
                fetch('content.json')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        navstartElement.textContent = data[language]['nav-start'];
                        navaboutElement.textContent = data[language]['nav-about'];
                        navlenguajesElement.textContent = data[language]['nav-lenguajes'];
                        navprojectsElement.textContent = data[language]['nav-projects'];
                        navcontactElement.textContent = data[language]['nav-contact'];
                        holaElement.textContent = data[language]['holatxt'];
                        imElement.textContent = data[language]['im-txt'];
                        frontendElement.textContent = data[language]['frontend-txt'];
                    })
                    .catch(error => {
                        console.error('Error loading content:', error);
                    });
            };

            toggleBtn.addEventListener('change', () => {
                currentLanguage = toggleBtn.checked ? 'es' : 'en';
                localStorage.setItem('language', currentLanguage);
                loadContent(currentLanguage);
            });

            // Load initial content and configure Typed.js animation
            loadContent(currentLanguage);
        });