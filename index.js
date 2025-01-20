function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.add('scrolled');
  });

  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
  ];
  let currentIndex = 0;

  function updateImage() {
    const galleryImage = document.getElementById('gallery-image');
    galleryImage.src = images[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }

  updateImage();

  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navButtons = document.querySelectorAll('.header-button');

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px', // Triggers when section is halfway in viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove active class from all buttons
          navButtons.forEach(button => button.classList.remove('active'));
          
          // Add active class to the corresponding button
          const activeButton = document.querySelector(
            `.header-button[href="#${entry.target.id}"]`
          );
          if (activeButton) {
            activeButton.classList.add('active');
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => observer.observe(section));
  });