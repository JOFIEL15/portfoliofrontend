  var swiper = new Swiper('.swiper-container', {
    loop: true,  // Hace que el carrusel sea infinito
    autoplay: {
      delay: 2000, // Cambio automático cada 3 segundos
      disableOnInteraction: false, // Permite que el carrusel continúe después de la interacción del usuario
    },
    effect: 'fade',  // Efecto de desvanecimiento entre imágenes
    speed: 1500, // Velocidad de transición
  });
