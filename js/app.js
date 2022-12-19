// CONTAINERS //
// sketch pad container
const sketchPad = document.getElementById('sketchPad');
sketchPad.setAttribute(
  'style',
  'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); padding: 2px;'
);
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
// COLOR BUTTONS //

// SIZE BUTTONS //
// loops 3 times to create the 3 different size buttons
// giving them style and all their own ids and text context
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

//  CLEAR THE GRID  //
// loops around sketch pad grid removing each
// child div created until none are left
function clearGrid() {
  while (sketchPad.firstChild) {
    sketchPad.removeChild(sketchPad.firstChild);
  }
}

// BUILD THE SKETCH PAD //
// this function is called passing the argument as number
// of pixels, it loops around until all of the boxes
// have been created and added to the sketchPad container
// then calls the draw() function passing displayBlock
function resolution(pixels) {
  for (let i = 0; i < pixels; i++) {
    const displayBlock = document.createElement('div');
    displayBlock.setAttribute(
      `style`,
      `height: 100%; width: 100%; background: rgb(24, 24, 24);`
    );
    sketchPad.appendChild(displayBlock);
    draw(displayBlock);
  }
}
// DRAW ON MOUSE CLICK //
// create a variable to set drawing to true or false
let drawing = false;
// setting draw to  true
document.addEventListener('mousedown', function () {
  drawing = true;
});
// resetting back to false
document.addEventListener('mouseup', function () {
  drawing = false;
});
// color blocks when true
function draw(display) {
  display.addEventListener('mouseover', function () {
    if (drawing === true) {
      display.style.backgroundColor = 'white';
    }
  });
}

// CHANGE THE GRID SIZE //
// size buttons represents each size you can set the grid to and
// listens for a click and depending on the id of the button a specific
// grid style is displayed then calls the clearGrid() function to remove
// any previously create elements and finally calls the resolution()
// function to set the number of div's to appear on screen
const sizeButtons = document.getElementsByTagName('button');
for (let i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener('click', function () {
    if (this.id === 'size-1') {
      sketchPad.setAttribute(
        'style',
        'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);'
      );
      clearGrid();
      resolution(256);
    } else if (this.id === 'size-2') {
      sketchPad.setAttribute(
        'style',
        'display: grid; grid-template-columns: repeat(32, 1fr); grid-template-rows: repeat(32, 1fr);'
      );
      clearGrid();
      resolution(1024);
    } else if (this.id === 'size-3') {
      sketchPad.setAttribute(
        'style',
        'display: grid; grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64, 1fr);'
      );
      clearGrid();
      resolution(4096);
    }
  });
}
