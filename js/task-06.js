

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", handleInputBlur);
console.log(validationInput);
function handleInputBlur() {
  const enteredValue = validationInput.value;
  const expectedLength = parseInt(validationInput.dataset.length, 10);

    if (enteredValue.length === expectedLength) {
      validationInput.classList.remove("invalid")
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}