let slideCount = 1;

function addSlide() {
  slideCount++;

  // Create slide thumbnail
  const slideThumbnail = document.createElement('div');
  slideThumbnail.className = 'slide-thumbnail';
  slideThumbnail.innerText = `Slide ${slideCount}`;
  slideThumbnail.onclick = () => selectSlide(slideCount);
  
  document.getElementById('slides-list').appendChild(slideThumbnail);

  // Create a new slide in the slide editor
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.innerHTML = `<h2>Slide ${slideCount}</h2><p>This is slide ${slideCount}.</p>`;

  const slideEditor = document.getElementById('current-slide');
  slideEditor.innerHTML = slide.innerHTML;
}

function selectSlide(slideNumber) {
  // Clear current slide
  const slideEditor = document.getElementById('current-slide');
  slideEditor.innerHTML = `<h2>Slide ${slideNumber}</h2><p>This is slide ${slideNumber}.</p>`;
}
