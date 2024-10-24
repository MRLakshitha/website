let currentSlide = 0;
let elementCounter = 0;

// Add a new slide
function addSlide() {
    currentSlide++;
    let slideList = document.getElementById("slidesList");
    let slideItem = document.createElement("li");
    slideItem.textContent = `Slide ${currentSlide}`;
    slideItem.setAttribute('onclick', `loadSlide(${currentSlide})`);
    slideList.appendChild(slideItem);
    clearCanvas();
}

// Load a slide
function loadSlide(slideNumber) {
    // Handle slide switching logic
    console.log("Loading Slide: " + slideNumber);
}

// Clear canvas for new slide
function clearCanvas() {
    document.getElementById('canvas').innerHTML = '';
}

// Add a text box to the canvas
function addTextBox() {
    let textBox = document.createElement("div");
    textBox.classList.add("text-box");
    textBox.contentEditable = true;
    textBox.style.top = "50px";
    textBox.style.left = "50px";
    textBox.style.fontSize = "16px";
    textBox.setAttribute("id", `element-${elementCounter++}`);
    document.getElementById('canvas').appendChild(textBox);
    makeElementDraggable(textBox);
}

// Add a shape (rectangle) to the canvas
function addShape() {
    let shapeBox = document.createElement("div");
    shapeBox.classList.add("shape-box");
    shapeBox.style.width = "100px";
    shapeBox.style.height = "100px";
    shapeBox.style.backgroundColor = "#ddd";
    shapeBox.style.top = "100px";
    shapeBox.style.left = "100px";
    shapeBox.setAttribute("id", `element-${elementCounter++}`);
    document.getElementById('canvas').appendChild(shapeBox);
    makeElementDraggable(shapeBox);
}

// Align text left, center, right
function alignTextLeft() {
    let selectedElement = document.querySelector('.selected');
    if (selectedElement) {
        selectedElement.style.textAlign = "left";
    }
}
function alignTextCenter() {
    let selectedElement = document.querySelector('.selected');
    if (selectedElement) {
        selectedElement.style.textAlign = "center";
    }
}
function alignTextRight() {
    let selectedElement = document.querySelector('.selected');
    if (selectedElement) {
        selectedElement.style.textAlign = "right";
    }
}

// Change font size
function increaseFontSize() {
    let selectedElement = document.querySelector('.selected');
    if (selectedElement) {
        let currentSize = window.getComputedStyle(selectedElement, null).getPropertyValue('font-size');
        selectedElement.style.fontSize = (parseFloat(currentSize) + 2) + "px";
    }
}
function decreaseFontSize() {
    let selectedElement = document.querySelector('.selected');
    if (selectedElement) {
        let currentSize = window.getComputedStyle(selectedElement, null).getPropertyValue('font-size');
        selectedElement.style.fontSize = (parseFloat(currentSize) - 2) + "px";
    }
}

// Delete an element
function deleteElement() {
    let selectedElement = document.querySelector('.selected');
    if (selectedElement) {
        selectedElement.remove();
    }
}

// Make elements draggable
function makeElementDraggable(element) {
    let isMouseDown = false;
    let offsetX, offsetY;

    element.onmousedown = function (e) {
        isMouseDown = true;
        element.classList.add("selected");
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    };

    document.onmouseup = function () {
        isMouseDown = false;
        element.classList.remove("selected");
    };

    document.onmousemove = function (e) {
        if (isMouseDown) {
            element.style.top = (e.clientY - offsetY) + "px";
            element.style.left = (e.clientX - offsetX) + "px";
        }
    };
}
