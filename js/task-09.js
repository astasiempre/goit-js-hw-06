function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');

const spanColor = document.querySelector('.color');

const body = document.querySelector('body');
console.log(body);

changeColor.addEventListener("click", newColor);

function newColor() {
  body.style.color = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}
