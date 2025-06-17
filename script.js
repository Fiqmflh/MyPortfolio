AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navCard = document.querySelector('.nav-card');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navCard.classList.toggle('active');
  });
  
  // Untuk menandai link yang aktif
  const navLinks = document.querySelectorAll('.nav-card ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Tutup menu setelah memilih (opsional)
      hamburger.classList.remove('active');
      navCard.classList.remove('active');
    });
  });
});


