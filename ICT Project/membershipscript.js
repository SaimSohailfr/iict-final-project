 // scrolling 
 const track = document.querySelector('.cards-track');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  let currentIndex = 0;
  const cardWidth = 350 + 32; // card width + gap (assumed 2rem = 32px)
  const totalCards = document.querySelectorAll('.container').length;
  const maxIndex = totalCards - 3; // show 3 at a time

  nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
