const counterValue = document.querySelector("#value");

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

let currentValue = 0;

decBtn.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;

});

incBtn.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;

});

