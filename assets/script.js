const hamburgerMenu = document.querySelector('.hamburguer-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Mostrar/ocultar menú
  hamburgerMenu.classList.toggle('open'); // Animación del ícono
});
