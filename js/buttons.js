// buttons container
const ctrlBtns = document.getElementById('ctrlBtns');
ctrlBtns.setAttribute(
  'style',
  'display: flex; gap: 20px; justify-content: center;'
);

// size buttons container
const sizeBtns = document.createElement('div');
ctrlBtns.appendChild(sizeBtns);
sizeBtns.setAttribute(
  'style',
  'display: flex; flex-direction: column; gap: 5px; align-items: center;'
);

// size buttons
let sizeSwitch = 0;

for (let i = 0; i < 3; i++) {
  const pickSize = document.createElement('button');
  sizeBtns.appendChild(pickSize);
  pickSize.setAttribute(
    'style',
    'width: 100px; height: 20px; cursor: pointer;'
  );
  const sizes = ['size 1', 'size 2', 'size 3'];
  pickSize.textContent = `${sizes[sizeSwitch]}`;
  sizeSwitch++;
  pickSize.id = `size-${sizeSwitch}`;
}
