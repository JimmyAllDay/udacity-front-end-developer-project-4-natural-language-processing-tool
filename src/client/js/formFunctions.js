function formFunctions() {
  // Variables
  const inputField = document.getElementById('input-field');

  inputField.onclick = function() {
    inputField.value = '';
  };
}

export { formFunctions };
