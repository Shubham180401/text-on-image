// Maintain a history of states
let history = [];
let currentIndex = -1;

function addImage() {
  const imageInput = document.getElementById('imageInput');
  const imageContainer = document.getElementById('imageContainer');

  const file = imageInput.files[0];

  if (file) {
    const imageUrl = URL.createObjectURL(file);

    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    // Clear previous content
    imageContainer.innerHTML = '';

    // Append the new image
    imageContainer.appendChild(imageElement);

    // Save the state to history
    saveState();
  }
}

function addText() {
  const textInput = document.getElementById('textInput').value;
  const textContainer = document.getElementById('textContainer');

  const textElement = document.createElement('div');
  textElement.innerText = textInput;

  // Make the added text draggable
  textElement.draggable = true;

  // Handle drag-and-drop events
  textElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', ''); // Required for Firefox
    textElement.classList.add('dragging');
  });

  textElement.addEventListener('dragend', function(event) {
    textElement.classList.remove('dragging');

    // Set the new position of the text element
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    textElement.style.position = 'fixed';
    textElement.style.left = mouseX + 'px';
    textElement.style.top = mouseY + 'px';
  });

  // Append the new text to the editorContainer
  textContainer.appendChild(textElement);

  // Save the state to history
  saveState();
}



function changeFontSize() {
  const fontSizeInput = document.getElementById('fontSizeInput');
  const textContainer = document.getElementById('textContainer');

  // Update textContainer style based on the input value
  textContainer.style.setProperty('font-size', fontSizeInput.value + 'px');

  // Save the state to history
  saveState();
}

function changeTextColor() {
  const colorPicker = document.getElementById('colorPicker');
  const textContainer = document.getElementById('textContainer');

  // Update textContainer style based on the color picker value
  textContainer.style.setProperty('color', colorPicker.value);

  // Save the state to history
  saveState();
}

function changeFontFamily() {
  const fontFamilyDropdown = document.getElementById('fontFamilyDropdown');
  const textContainer = document.getElementById('textContainer');

  // Update textContainer style based on the dropdown value
  textContainer.style.setProperty('font-family', fontFamilyDropdown.value);

  // Save the state to history
  saveState();
}

function saveState() {
  // Save the current state to history
  const currentState = document.getElementById('editorContainer').innerHTML;
  history = history.slice(0, currentIndex + 1);
  history.push(currentState);
  currentIndex = history.length - 1;
}

function undo() {
  if (currentIndex > 0) {
    currentIndex--;
    restoreState();
  }
}

function redo() {
  if (currentIndex < history.length - 1) {
    currentIndex++;
    restoreState();
  }
}

function restoreState() {
    const editorContainer = document.getElementById('editorContainer');
    editorContainer.innerHTML = history[currentIndex];
  
    // Reattach event listeners to draggable elements
    const draggableElements = editorContainer.querySelectorAll('.draggable');
    draggableElements.forEach(element => {
      element.addEventListener('dragstart', handleDragStart);
      element.addEventListener('dragend', handleDragEnd);
    });
  }
  

