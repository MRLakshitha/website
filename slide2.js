let currentSlide = 0;
const slides = [];

function addNewSlide() {
    const slide = document.createElement('canvas');
    slide.width = 800;
    slide.height = 600;
    slide.style.border = '1px solid black';
    document.querySelector('.slide-workspace').appendChild(slide);
    slides.push(slide);
    currentSlide = slides.length - 1;
}

function deleteSlide() {
    if (slides.length > 0) {
        document.querySelector('.slide-workspace').removeChild(slides[currentSlide]);
        slides.splice(currentSlide, 1);
        currentSlide = slides.length - 1;
    }
}
