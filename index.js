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