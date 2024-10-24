// Get canvas and context
const canvas = document.getElementById('slideCanvas');
const ctx = canvas.getContext('2d');

// Default text settings
let fontFamily = 'Arial';
let fontSize = 14;

// Change the font family dynamically
function changeFontFamily() {
    fontFamily = document.getElementById('fontFamily').value;
    updateText();
}

// Change the font size dynamically
function changeFontSize() {
    fontSize = document.getElementById('fontSize').value;
    updateText();
}

// Update the text on the canvas with new font settings
function updateText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.font = `${fontSize}px ${fontFamily}`; // Set new font
    ctx.fillText("Your dynamic text here", 100, 100); // Re-draw text
}

// Drawing shapes dynamically on the canvas
function drawShape(shape) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    ctx.beginPath(); // Begin a new path for drawing

    if (shape === 'rect') {
        ctx.rect(100, 100, 200, 100); // Rectangle (x, y, width, height)
    } else if (shape === 'circle') {
        ctx.arc(300, 300, 50, 0, Math.PI * 2); // Circle (x, y, radius, startAngle, endAngle)
    } else if (shape === 'line') {
        ctx.moveTo(50, 50); // Starting point (x, y)
        ctx.lineTo(300, 300); // End point (x, y)
    }

    ctx.stroke(); // Render the shape
}
