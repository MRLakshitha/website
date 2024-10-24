// Global variables
let slides = [];
let currentSlideIndex = 0;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let selectedTool = '';
let currentTextSettings = {
    fontFamily: 'Arial',
    fontSize: 20,
    bold: false,
    italic: false,
    color: '#000'
};

// Slide Functions
function addSlide() {
    slides.push([]);
    currentSlideIndex = slides.length - 1;
    updateSlideList();
    drawCurrentSlide();
}

function deleteSlide() {
    if (slides.length > 1) {
        slides.splice(currentSlideIndex, 1);
        currentSlideIndex = Math.max(0, currentSlideIndex - 1);
        updateSlideList();
        drawCurrentSlide();
    }
}

function updateSlideList() {
    const slidesNav = document.getElementById('slidesNav');
    slidesNav.innerHTML = '';
    slides.forEach((slide, index) => {
        const li = document.createElement('li');
        li.innerText = `Slide ${index + 1}`;
        li.onclick = () => {
            currentSlideIndex = index;
            drawCurrentSlide();
        };
        slidesNav.appendChild(li);
    });
}

function drawCurrentSlide() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const currentSlide = slides[currentSlideIndex];
    currentSlide.forEach(item => {
        if (item.type === 'text') {
            ctx.font = `${item.bold ? 'bold' : ''} ${item.italic ? 'italic' : ''} ${item.fontSize}px ${item.fontFamily}`;
            ctx.fillStyle = item.color;
            ctx.fillText(item.text, item.x, item.y);
        } else if (item.type === 'rect') {
            ctx.strokeRect(item.x, item.y, item.width, item.height);
        } else if (item.type === 'circle') {
            ctx.beginPath();
            ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
            ctx.stroke();
        }
    });
}

// Text Functions
function addText() {
    const text = prompt('Enter the text:');
    if (text) {
        slides[currentSlideIndex].push({
            type: 'text',
            text: text,
            fontFamily: currentTextSettings.fontFamily,
            fontSize: currentTextSettings.fontSize,
            bold: currentTextSettings.bold,
            italic: currentTextSettings.italic,
            color: currentTextSettings.color,
            x: 100,
            y: 100
        });
        drawCurrentSlide();
    }
}

function changeFontFamily() {
    currentTextSettings.fontFamily = document.getElementById('fontFamily').value;
}

function changeFontSize() {
    currentTextSettings.fontSize = document.getElementById('fontSize').value;
}

function toggleBold() {
    currentTextSettings.bold = !currentTextSettings.bold;
}

function toggleItalic() {
    currentTextSettings.italic = !currentTextSettings.italic;
}

function changeFontColor() {
    currentTextSettings.color = document.getElementById('fontColor').value;
}

// Shape Functions
function drawRectangle() {
    slides[currentSlideIndex].push({
        type: 'rect',
        x: 100,
        y: 100,
        width: 200,
        height: 100
    });
    drawCurrentSlide();
}

function drawCircle() {
    slides[currentSlideIndex].push({
        type: 'circle',
        x: 300,
        y: 300,
        radius: 50
    });
    drawCurrentSlide();
}

function drawLine() {
    // To be implemented for drawing lines dynamically
}

// Image Upload
function uploadImage() {
    const file = document.getElementById('imageUpload').files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            ctx.drawImage(img, 100, 100, 200, 150);
            slides[currentSlideIndex].push({
                type: 'image',
                src: e.target.result,
                x: 100,
                y: 100,
                width: 200,
                height: 150
            });
        };
    };
    reader.readAsDataURL(file);
}

// Initialization
addSlide();
