// sketch pad container
const sketchPad = document.getElementById('sketchPad');
sketchPad.setAttribute(
  'style',
  'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); padding: 2px; min-height: 402px;'
);

// build sketch pad
function resolution(pixels) {
  for (let i = 0; i < pixels; i++) {
    const displayBlock = document.createElement('div');
    displayBlock.setAttribute(
      `style`,
      `height: 100%; width: 100%; background: rgb(24, 24, 24);`
    );
    sketchPad.appendChild(displayBlock);

    let opacity = 0;

    displayBlock.addEventListener('mouseover', function () {
      displayBlock.style.backgroundColor = 'white';
      opacity += 0.15;
      displayBlock.style.opacity = opacity;
    });
  }
}

// buttons container
const ctrlBtns = document.getElementById('ctrlBtns');
ctrlBtns.setAttribute(
  'style',
  'display: flex; gap: 20px; justify-content: center; align-items: center;'
);

// size buttons container
const sizeBtns = document.createElement('div');
ctrlBtns.appendChild(sizeBtns);
sizeBtns.setAttribute(
  'style',
  'display: flex; gap: 10px; align-items: center; justify-content: center;'
);

// size buttons
let sizeSwitch = 0;

for (let i = 0; i < 3; i++) {
  const pickSize = document.createElement('button');
  sizeBtns.appendChild(pickSize);
  pickSize.setAttribute(
    'style',
    'width: 100px; height: 20px; cursor: pointer; background-color: white; border: none; font-family: monospace; margin: 10px;'
  );
  const sizes = ['size 1', 'size 2', 'size 3'];
  pickSize.textContent = `${sizes[sizeSwitch]}`;
  sizeSwitch++;
  pickSize.id = `size-${sizeSwitch}`;

  pickSize.addEventListener('mouseover', function () {
    pickSize.style.backgroundColor = 'red';
  });
  pickSize.addEventListener('mouseout', function () {
    pickSize.style.backgroundColor = 'white';
  });
}

//  clear the grid
function clearGrid() {
  while (sketchPad.firstChild) {
    sketchPad.removeChild(sketchPad.firstChild);
  }
}

// change grid size
const sizeButtons = document.getElementsByTagName('button');

for (let i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener('click', function () {
    if (this.id === 'size-1') {
      sketchPad.setAttribute(
        'style',
        'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); min-height: 402px;'
      );
      clearGrid();
      resolution(256);
    } else if (this.id === 'size-2') {
      sketchPad.setAttribute(
        'style',
        'display: grid; grid-template-columns: repeat(32, 1fr); grid-template-rows: repeat(32, 1fr); min-height: 402px;'
      );
      clearGrid();
      resolution(1024);
    } else if (this.id === 'size-3') {
      sketchPad.setAttribute(
        'style',
        'display: grid; grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64, 1fr); min-height: 402px;'
      );
      clearGrid();
      resolution(4096);
    }
  });
}
