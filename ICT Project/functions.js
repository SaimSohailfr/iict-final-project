
const images = ["SummerOasis.png", "golf course.jpg"];
let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    const heroImage = document.getElementById("hero-img");
    if (heroImage) {
        heroImage.src = images[index];
    }
}, 5000); // switch every 5 seconds


//carousel images
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    const slidesToShow = 3;
    const totalSlides = slides.length;
    let currentIndex= 0;

    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
            currentIndex++;
           if (currentIndex > totalSlides - slidesToShow) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
            currentIndex--;
           if (currentIndex < 0) {
            currentIndex = totalSlides - slidesToShow;
        }
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel); // Adjust on resize
    updateCarousel(); // Initial position
});
