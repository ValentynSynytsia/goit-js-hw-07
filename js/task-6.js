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
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.append(box);
    }
    
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