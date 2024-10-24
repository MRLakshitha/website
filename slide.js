let slideCount = 1;

function addSlide() {
    slideCount++;
    const slideContainer = document.getElementById('slides-container');

    // Create a new slide element
    const newSlide = document.createElement('div');
    newSlide.className = 'slide';
    newSlide.innerText = `Slide ${slideCount}`;

    // Append the new slide
    slideContainer.appendChild(newSlide);
}
