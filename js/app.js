// sketch pad container
const sketchPad = document.getElementById('sketchPad');
sketchPad.setAttribute(
  'style',
  'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); padding: 2px; min-height: 400px;'
);

// build sketch pad
for (let i = 0; i < 256; i++) {
  const displayBlock = document.createElement('div');
  displayBlock.setAttribute(
    'style',
    'height: 25px; width: 25px; background: rgb(24, 24, 24);'
  );
  sketchPad.appendChild(displayBlock);

  displayBlock.addEventListener('mouseover', function () {
    displayBlock.style.backgroundColor = 'cornflowerblue';
  });
}
