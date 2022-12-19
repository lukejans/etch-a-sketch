// sketch pad container
const sketchPad = document.getElementById('sketchPad');
sketchPad.setAttribute(
  'style',
  'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); padding: 2px; min-height: 400px;'
);

// build sketch pad
function resolution(pixels, width) {
  for (let i = 0; i < pixels; i++) {
    const displayBlock = document.createElement('div');
    displayBlock.setAttribute(
      `style`,
      `height: ${width}px; width: ${width}px; background: rgb(24, 24, 24);`
    );
    sketchPad.appendChild(displayBlock);

    displayBlock.addEventListener('mouseover', function () {
      displayBlock.style.backgroundColor = 'white';
    });
  }
}
