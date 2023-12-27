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
  }
}

function addText() {
    const textInput = document.getElementById('textInput').value;
    const editorContainer = document.getElementById('editorContainer');
  
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
    editorContainer.appendChild(textElement);
  }
  

function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', ''); // Required for Firefox
  event.target.style.opacity = '0.5';
}

function handleDragEnd(event) {
  event.target.style.opacity = '1';
}

function changeFollow() {
  const followDropdown = document.getElementById('followDropdown');
  const textContainer = document.getElementById('textContainer');

  // Update textContainer style based on the dropdown value
  textContainer.style.setProperty('font-style', followDropdown.value);
}

function changeFontSize() {
  const fontSizeInput = document.getElementById('fontSizeInput');
  const textContainer = document.getElementById('textContainer');

  // Update textContainer style based on the input value
  textContainer.style.setProperty('font-size', fontSizeInput.value + 'px');
}

function changeTextColor() {
  const colorPicker = document.getElementById('colorPicker');
  const textContainer = document.getElementById('textContainer');

  // Update textContainer style based on the color picker value
  textContainer.style.setProperty('color', colorPicker.value);
}

function changeFontFamily() {
  const fontFamilyDropdown = document.getElementById('fontFamilyDropdown');
  const textContainer = document.getElementById('textContainer');

  // Update textContainer style based on the dropdown value
  textContainer.style.setProperty('font-family', fontFamilyDropdown.value);
}
