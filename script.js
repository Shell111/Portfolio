// Mobile menu script
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
})