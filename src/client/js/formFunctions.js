function formFunctions() {
  // Variables
  const inputField = document.getElementById('input-field');

  inputField.onclick = function() {
    if (inputField.value === 'Enter Text Here') {
      inputField.value = '';
    }
  };
}

export { formFunctions };
