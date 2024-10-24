// let currentSlide = 0;
// let elementCounter = 0;
// let selectedElement = null;

// // Add a new slide
// function addSlide() {
//     currentSlide++;
//     let slideList = document.getElementById("slidesList");
//     let slideItem = document.createElement("li");
//     slideItem.textContent = `Slide ${currentSlide}`;
//     slideItem.setAttribute('onclick', `loadSlide(${currentSlide})`);
//     slideList.appendChild(slideItem);
//     clearCanvas();
// }

// // Load a slide
// function loadSlide(slideNumber) {
//     // Handle slide switching logic
//     console.log("Loading Slide: " + slideNumber);
// }

// // Clear canvas for new slide
// function clearCanvas() {
//     document.getElementById('canvas').innerHTML = '';
// }

// // Add a text box to the canvas
// function addTextBox() {
//     let textBox = document.createElement("div");
//     textBox.classList.add("text-box");
//     textBox.contentEditable = true;
//     textBox.style.top = "50px";
//     textBox.style.left = "50px";
//     textBox.style.fontSize = "16px";
//     textBox.style.fontFamily = "Arial";
//     textBox.setAttribute("id", `element-${elementCounter++}`);
//     textBox.onclick = selectElement;
//     document.getElementById('canvas').appendChild(textBox);
//     makeElementDraggable(textBox);
// }

// // Delete a slide
// function deleteSlide() {
//     let slideList = document.getElementById("slidesList");
//     if (slideList.childNodes.length > 0) {
//         slideList.removeChild(slideList.lastChild);
//         clearCanvas();
//     }
// }

// // Font family, size, color changes
// function changeFontFamily() {
//     if (selectedElement) {
//         let fontFamily = document.getElementById("fontFamily").value;
//         selectedElement.style.fontFamily = fontFamily;
//     }
// }

// function changeFontSize() {
//     if (selectedElement) {
//         let fontSize = document.getElementById("fontSize").value;
//         selectedElement.style.fontSize = fontSize + 'px';
//     }
// }

// function changeFontColor() {
//     if (selectedElement) {
//         let fontColor = document.getElementById("fontColor").value;
//         selectedElement.style.color = fontColor;
//     }
// }

// // Text alignment controls
// function alignText(alignment) {
//     if (selectedElement) {
//         selectedElement.style.textAlign = alignment;
//     }
// }

// // Upload and add an image
// function uploadImage() {
//     document.getElementById('imageUpload').click();
// }

// function loadImage(event) {
//     let file = event.target.files[0];
//     let reader = new FileReader();
    
//     reader.onload = function(e) {
//         let img = document.createElement("img");
//         img.src = e.target.result;
//         img.style.width = "100px";
//         img.style.position = "absolute";
//         img.style.top = "50px";
//         img.style.left = "50px";
//         img.setAttribute("id", `element-${elementCounter++}`);
//         img.onclick = selectElement;
//         document.getElementById('canvas').appendChild(img);
//         makeElementDraggable(img);
//     };

//     reader.readAsDataURL(file);
// }

// // Make elements draggable
// function makeElementDraggable(element) {
//     let isMouseDown = false;
//     let offsetX, offsetY;

//     element.onmousedown = function (e) {
//         isMouseDown = true;
//         selectedElement = element;
//         element.classList.add("selected");
//         offsetX = e.offsetX;
//         offsetY = e.offsetY;
//     };

//     document.onmouseup = function () {
//         isMouseDown = false;
//         element.classList.remove("selected");
//     };

//     document.onmousemove = function (e) {
//         if (isMouseDown) {
//             element.style.top = (e.clientY - offsetY) + "px";
//             element.style.left = (e.clientX - offsetX) + "px";
//         }
//     };
// }

// // Select an element when clicked
// function selectElement(event) {
//     selectedElement = event.target;
// }
let currentSlide = 0;
let elementCounter = 0;
let selectedElement = null;

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
    console.log("Loading Slide: " + slideNumber);
}

// Clear canvas for a new slide
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
    textBox.style.fontFamily = "Arial";
    textBox.setAttribute("id", `element-${elementCounter++}`);
    textBox.onclick = selectElement;
    document.getElementById('canvas').appendChild(textBox);
    makeElementDraggable(textBox);
}

// Add a rectangle shape to the canvas
function addRectangle() {
    let rectangle = document.createElement("div");
    rectangle.classList.add("shape-box");
    rectangle.style.width = "100px";
    rectangle.style.height = "100px";
    rectangle.style.backgroundColor = "#f00";
    rectangle.style.top = "50px";
    rectangle.style.left = "50px";
    rectangle.setAttribute("id", `element-${elementCounter++}`);
    rectangle.onclick = selectElement;
    document.getElementById('canvas').appendChild(rectangle);
    makeElementDraggable(rectangle);
}

// Add a circle shape to the canvas
function addCircle() {
    let circle = document.createElement("div");
    circle.classList.add("shape-box");
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.backgroundColor = "#00f";
    circle.style.borderRadius = "50%";
    circle.style.top = "50px";
    circle.style.left = "50px";
    circle.setAttribute("id", `element-${elementCounter++}`);
    circle.onclick = selectElement;
    document.getElementById('canvas').appendChild(circle);
    makeElementDraggable(circle);
}

// Add a line shape to the canvas
function addLine() {
    let line = document.createElement("div");
    line.classList.add("shape-box");
    line.style.width = "200px";
    line.style.height = "2px";
    line.style.backgroundColor = "#000";
    line.style.top = "50px";
    line.style.left = "50px";
    line.setAttribute("id", `element-${elementCounter++}`);
    line.onclick = selectElement;
    document.getElementById('canvas').appendChild(line);
    makeElementDraggable(line);
}

// Delete a slide
function deleteSlide() {
    let slideList = document.getElementById("slidesList");
    if (slideList.childNodes.length > 0) {
        slideList.removeChild(slideList.lastChild);
        clearCanvas();
    }
}

// Font family, size, color changes
function changeFontFamily() {
    if (selectedElement) {
        let fontFamily = document.getElementById("fontFamily").value;
        selectedElement.style.fontFamily = fontFamily;
    }
}

function changeFontSize() {
    if (selectedElement) {
        let fontSize = document.getElementById("fontSize").value;
        selectedElement.style.fontSize = fontSize + 'px';
    }
}

function changeFontColor() {
    if (selectedElement) {
        let fontColor = document.getElementById("fontColor").value;
        selectedElement.style.color = fontColor;
    }
}

// Text alignment controls
function alignText(alignment) {
    if (selectedElement) {
        selectedElement.style.textAlign = alignment;
    }
}

// Upload and add an image
function uploadImage() {
    document.getElementById('imageUpload').click();
}

function loadImage(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    
    reader.onload = function(e) {
        let img = document.createElement("img");
        img.src = e.target.result;
        img.style.width = "100px";
        img.style.position = "absolute";
        img.style.top = "50px";
        img.style.left = "50px";
        img.setAttribute("id", `element-${elementCounter++}`);
        img.onclick = selectElement;
        document.getElementById('canvas').appendChild(img);
        makeElementDraggable(img);
    };

    reader.readAsDataURL(file);
}

// Make elements draggable
function makeElementDraggable(element) {
    let isMouseDown = false;
    let offsetX, offsetY;

    element.onmousedown = function (e) {
        isMouseDown = true;
        selectedElement = element;
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

// Select an element when clicked
function selectElement(event) {
    selectedElement = event.target;
}
