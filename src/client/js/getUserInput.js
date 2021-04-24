// ---------------- Variables --------------------------

function getUserInput() {
  let userInput = '';
  let inputField = document.getElementById('name');
  let submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function() {
    userInput = inputField.value;
    console.log(userInput);
  });
}

export { getUserInput };
