function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const body = document.querySelector("body");

button.addEventListener("click", onClick)
function onClick() {
  body.style.backgroundColor = getRandomHexColor();
  const color = document.querySelector(".color");
  color.textContent = getRandomHexColor()
}