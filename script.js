
    // Inisialisasi AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Navbar functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Project details modal
    function showDetails(title, description) {
      document.getElementById('detailsTitle').textContent = title;
      document.getElementById('detailsDescription').textContent = description;
      document.getElementById('projectDetails').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function hideDetails() {
      document.getElementById('projectDetails').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === document.getElementById('projectDetails')) {
        hideDetails();
      }
    });

    // Animate skill bars on scroll
    document.addEventListener('DOMContentLoaded', function() {
      const skillBars = document.querySelectorAll('.skill-level');
      
      const animateSkillBars = () => {
        skillBars.forEach(skill => {
          const percent = skill.getAttribute('data-percent');
          skill.style.width = percent;
        });
      };
      
      // Trigger animation when skills section is in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(document.querySelector('.skills'));
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Toggle certificates
    const toggleCerts = document.getElementById('toggleCerts');
    const certGrid = document.getElementById('certGrid');
    const arrowIcon = document.querySelector('.arrow-icon i');
    const toggleText = document.querySelector('#toggleCerts span');
    let isExpanded = false;
    
    toggleCerts.addEventListener('click', function() {
      isExpanded = !isExpanded;
      certGrid.classList.toggle('expanded', isExpanded);
      
      if (isExpanded) {
        arrowIcon.classList.remove('fa-chevron-down');
        arrowIcon.classList.add('fa-chevron-up');
        toggleText.textContent = 'Show Less Certificates';
      } else {
        arrowIcon.classList.remove('fa-chevron-up');
        arrowIcon.classList.add('fa-chevron-down');
        toggleText.textContent = 'Show All Certificates';
      }
    });
