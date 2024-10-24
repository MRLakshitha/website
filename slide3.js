// let currentSlideIndex = 0;
// let slides = [];

// function addNewSlide() {
//     const slideCount = slides.length + 1;
//     slides.push({ title: `Slide ${slideCount}`, content: [] });
//     updateThumbnails();
// }

// function deleteSlide() {
//     if (slides.length > 0) {
//         slides.splice(currentSlideIndex, 1);
//         updateThumbnails();
//         currentSlideIndex = Math.max(0, currentSlideIndex - 1);
//         renderSlide();
//     }
// }

// function updateThumbnails() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.innerHTML = '';
//     slides.forEach((slide, index) => {
//         const thumbnail = document.createElement('div');
//         thumbnail.classList.add('slide-thumbnail');
//         thumbnail.textContent = slide.title;
//         thumbnail.onclick = () => selectSlide(index);
//         sidebar.appendChild(thumbnail);
//     });
// }

// function selectSlide(index) {
//     currentSlideIndex = index;
//     renderSlide();
// }

// function renderSlide() {
//     const canvas = document.getElementById('slideCanvas');
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // Render slide content here
//     // Use the slides[currentSlideIndex] data
// }

// function toggleBold() {
//     document.execCommand('bold');
// }

// function toggleItalic() {
//     document.execCommand('italic');
// }

// function toggleUnderline() {
//     document.execCommand('underline');
// }

// function insertShape(type) {
//     const canvas = document.getElementById('slideCanvas');
//     const ctx = canvas.getContext('2d');

//     ctx.beginPath();
//     if (type === 'rect') {
//         ctx.rect(100, 100, 200, 150);
//     } else if (type === 'circle') {
//         ctx.arc(300, 300, 50, 0, Math.PI * 2);
//     } else if (type === 'line') {
//         ctx.moveTo(50, 50);
//         ctx.lineTo(300, 300);
//     }
//     ctx.stroke();
// }

// function findReplace() {
//     const findText = prompt("Enter text to find:");
//     const replaceText = prompt("Enter text to replace with:");
//     // Assuming you are handling content in a div or canvas
//     // Logic to find and replace text goes here
// }
let slides = [];
let currentSlideIndex = 0;

// Initialize canvas
const canvas = document.getElementById('slideCanvas');
const ctx = canvas.getContext('2d');

// Create a new slide
function addSlide() {
    slides.push([]); // New slide is an empty array for elements
    currentSlideIndex = slides.length - 1;
    updateSlideList();
    drawCurrentSlide();
}

// Delete current slide
function deleteSlide() {
    if (slides.length > 0) {
        slides.splice(currentSlideIndex, 1);
        currentSlideIndex = Math.max(0, currentSlideIndex - 1);
        updateSlideList();
        drawCurrentSlide();
    }
}

// Duplicate current slide
function duplicateSlide() {
    if (slides.length > 0) {
        const duplicate = JSON.parse(JSON.stringify(slides[currentSlideIndex])); // Deep copy
        slides.push(duplicate);
        currentSlideIndex = slides.length - 1;
        updateSlideList();
        drawCurrentSlide();
    }
}

// Update the list of slides (navigation)
function updateSlideList() {
    const slidesList = document.getElementById('slidesList');
    slidesList.innerHTML = '';
    slides.forEach((_, index) => {
        const li = document.createElement('li');
        li.textContent = `Slide ${index + 1}`;
        li.onclick = () => selectSlide(index);
        slidesList.appendChild(li);
    });
}

function selectSlide(index) {
    currentSlideIndex = index;
    drawCurrentSlide();
}

// Draw the current slide on the canvas
function drawCurrentSlide() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    const elements = slides[currentSlideIndex];
    elements.forEach(element => {
        if (element.type === 'text') {
            ctx.font = `${element.fontSize}px ${element.fontFamily}`;
            ctx.fillStyle = element.color;
            ctx.fillText(element.text, element.x, element.y);
        } else if (element.type === 'rect') {
            ctx.strokeRect(element.x, element.y, element.width, element.height);
        } else if (element.type === 'circle') {
            ctx.beginPath();
            ctx.arc(element.x, element.y, element.radius, 0, Math.PI * 2);
            ctx.stroke();
        }
    });
}
let currentTextSettings = {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#000',
    bold: false,
    italic: false
};

function changeFontFamily() {
    currentTextSettings.fontFamily = document.getElementById('fontFamily').value;
}

function changeFontSize() {
    currentTextSettings.fontSize = document.getElementById('fontSize').value;
}

function toggleBold() {
    currentTextSettings.bold = !currentTextSettings.bold;
    updateFont();
}

function toggleItalic() {
    currentTextSettings.italic = !currentTextSettings.italic;
    updateFont();
}

function changeFontColor() {
    currentTextSettings.color = document.getElementById('fontColor').value;
}

function updateFont() {
    let fontStyle = '';
    if (currentTextSettings.bold) fontStyle += 'bold ';
    if (currentTextSettings.italic) fontStyle += 'italic ';
    fontStyle += `${currentTextSettings.fontSize}px ${currentTextSettings.fontFamily}`;
    ctx.font = fontStyle;
}
function uploadImage() {
    const input = document.getElementById('imageUpload');
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            ctx.drawImage(img, 100, 100, 200, 200); // Example: Draw image at 100x100
            slides[currentSlideIndex].push({
                type: 'image',
                img: img.src, // Store image base64 data
                x: 100, y: 100, width: 200, height: 200
            });
        };
    };
    reader.readAsDataURL(file);
}
