// parent
const sketchPad = document.getElementById('sketchPad');
sketchPad.setAttribute('style', '');
// build sketch pad
for (let i = 0; i < 256; i++) {
  const displayBlock = document.createElement('div');
  displayBlock.setAttribute(
    'style',
    ' border: 1px solid white; height: 25px; width: 25px; background: rgb(24, 24, 24);'
  );
  sketchPad.appendChild(displayBlock);
}
