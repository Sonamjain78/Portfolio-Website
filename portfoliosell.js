let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });

    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change image every 3 seconds
showSlides(); // Initialize slideshow
