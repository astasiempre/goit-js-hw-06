function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 function createBoxes(amount) {
   const boxesContainer = document.getElementById('boxes');
   const fragment = document.createDocumentFragment();

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        fragment.appendChild(box);
      }
    boxesContainer.appendChild(fragment);
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      while (boxesContainer.firstChild) {
        boxesContainer.removeChild(boxesContainer.firstChild);
      }
    }

    const createButton = document.querySelector('button[data-create]');
    createButton.addEventListener('click', () => {
      const input = document.querySelector('input');
      const amount = parseInt(input.value);
      createBoxes(amount);
    });

    const destroyButton = document.querySelector('button[data-destroy]');
    destroyButton.addEventListener('click', destroyBoxes);
 