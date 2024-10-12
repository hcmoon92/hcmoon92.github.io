let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
  const slides = document.querySelectorAll('.slides');
  const dots = document.querySelectorAll('.dot');

  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? 'block' : 'none';
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

// Optional: Auto-slideshow every 3 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);
