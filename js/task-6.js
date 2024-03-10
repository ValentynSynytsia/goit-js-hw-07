const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBoxes);
destroyBtn.addEventListener('click', onDestroyBoxes);

function onCreateBoxes(amount) {
  onDestroyBoxes();
  amount = Number(input.value);
  
  if (amount >= 1 && amount <= 100) {
    let size = 30;
    let markup = '';
    for (let i = 0; i < amount; i++) {
      const boxMarkup = `<div style = "background-color: ${getRandomHexColor()}; 
                        width: ${size}px; 
                        height: ${size}px">
                        </div>`
      markup += boxMarkup;
      size += 10;
    }
    boxes.innerHTML = markup;
    input.value = '';
  } else {
    alert('Please, enter a number between 1 and 100');
  }
}

function onDestroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}