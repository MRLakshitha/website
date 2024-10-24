// Get canvas and context
const canvas = document.getElementById('slideCanvas');
const ctx = canvas.getContext('2d');

let draggedShape = null;
let shapes = [];

// Function to handle starting the drag of shapes from the toolbar
function startDrag(event, shape) {
    draggedShape = shape;
}

// Handle the shape being dropped onto the canvas
canvas.addEventListener('dragover', function(event) {
    event.preventDefault(); // Allow drop
});

canvas.addEventListener('drop', function(event) {
    event.preventDefault();

    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    if (draggedShape) {
        // Add the dropped shape to the shapes array
        shapes.push({
            type: draggedShape,
            x: mouseX,
            y: mouseY,
            width: 100, // Default width
            height: 100, // Default height
            selected: false // Track whether this shape is selected for resizing
        });

        drawShapes(); // Re-draw shapes on canvas
    }
});

// Function to draw all shapes on the canvas
function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(shape => {
        ctx.beginPath();

        if (shape.type === 'rect') {
            ctx.rect(shape.x, shape.y, shape.width, shape.height);
        } else if (shape.type === 'circle') {
            ctx.arc(shape.x + shape.width / 2, shape.y + shape.height / 2, shape.width / 2, 0, Math.PI * 2);
        } else if (shape.type === 'line') {
            ctx.moveTo(shape.x, shape.y);
            ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
        }

        ctx.stroke();
    });
}
let isResizing = false;
let selectedShapeIndex = null;

// Function to detect if the mouse is over a shape
function getShapeAtPosition(x, y) {
    for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (shape.type === 'rect' || shape.type === 'circle') {
            if (
                x >= shape.x &&
                x <= shape.x + shape.width &&
                y >= shape.y &&
                y <= shape.y + shape.height
            ) {
                return i; // Return the index of the shape
            }
        } else if (shape.type === 'line') {
            // Simple check for line selection
            const distToLine = Math.sqrt(Math.pow(x - shape.x, 2) + Math.pow(y - shape.y, 2));
            if (distToLine < 10) {
                return i;
            }
        }
    }
    return null;
}

// Handle mouse down to start resizing
canvas.addEventListener('mousedown', function(event) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    selectedShapeIndex = getShapeAtPosition(mouseX, mouseY);
    if (selectedShapeIndex !== null) {
        isResizing = true;
    }
});

// Handle mouse move to resize shape
canvas.addEventListener('mousemove', function(event) {
    if (isResizing && selectedShapeIndex !== null) {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        const shape = shapes[selectedShapeIndex];
        shape.width = mouseX - shape.x;
        shape.height = mouseY - shape.y;

        drawShapes(); // Redraw shapes as they are resized
    }
});

// Handle mouse up to stop resizing
canvas.addEventListener('mouseup', function() {
    isResizing = false;
    selectedShapeIndex = null;
});
