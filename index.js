document.addEventListener('DOMContentLoaded', () => {
    const sentences = [
        "He's not the sharpest knife in the drawer.",
        "The big building was blazing with lights.",
        "Now you must answer some big questions.",
        "Get your act together."
    ];

    sentences.forEach((sentence, index) => {
        createRow(index + 1, sentence);
    });
});

function createRow(index, sentence) {
    const container = document.getElementById('grid-container');
    const controlsDiv = document.createElement('div');
    controlsDiv.innerHTML = `
        <button onclick="modifyText('sentence${index}', 'bold')">Bold</button>
        <button onclick="modifyText('sentence${index}', 'italic')">Italic</button>
        <button onclick="modifyText('sentence${index}', 'underline')">Underline</button>
        <input type="number" placeholder="Font Size" onchange="changeFontSize('sentence${index}', this.value)">
        <input type="color" onchange="changeColor('sentence${index}', this.value)">
    `;
    const sentenceP = document.createElement('p');
    sentenceP.id = `sentence${index}`;
    sentenceP.className = 'text';
    sentenceP.textContent = sentence;

    container.appendChild(controlsDiv);
    container.appendChild(sentenceP);
}

function modifyText(elementId, action) {
    const element = document.getElementById(elementId);
    switch (action) {
        case 'bold':
            toggleStyle(element, 'fontWeight', 'bold');
            break;
        case 'italic':
            toggleStyle(element, 'fontStyle', 'italic');
            break;
        case 'underline':
            toggleStyle(element, 'textDecoration', 'underline');
            break;
        default:
            break;
    }
}

function changeFontSize(elementId, size) {
    const element = document.getElementById(elementId);
    element.style.fontSize = `${size}px`;
}

function changeColor(elementId, color) {
    const element = document.getElementById(elementId);
    element.style.color = color;
}

// Helper function to toggle styles
function toggleStyle(element, styleProp, styleValue) {
    if (element.style[styleProp] === styleValue) {
        element.style[styleProp] = '';
    } else {
        element.style[styleProp] = styleValue;
    }
}
