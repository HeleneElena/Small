const prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      sliderLine = document.querySelector('.slider-line');

let offset = 0;

next.addEventListener('click', () => {
    offset += 640;
    if (offset > 1280) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

prev.addEventListener('click', () => {
    offset -= 640;
    if (offset < 0) {
        offset = 1280;
    }
    sliderLine.style.left = -offset + 'px';
});
