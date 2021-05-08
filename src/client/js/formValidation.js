function formValidation() {
  const inputField = document.getElementById('input-field');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function() {
    if (inputField.value == '') {
      event.preventDefault(alert('Please enter some text in the input field'));
    }
  });
}

export { formValidation };
