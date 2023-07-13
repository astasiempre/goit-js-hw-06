const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


nameInput.addEventListener("input", updateNameOutput);

function updateNameOutput() {
  const inputValue = nameInput.value.trim();

  if (inputValue !== "") {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}

