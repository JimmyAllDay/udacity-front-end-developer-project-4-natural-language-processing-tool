function formValidation() {
  const inputField = document.getElementById('input-field');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function() {
    if (inputField.value === '') {
      alert('please enter some text in the input field');
    }
  });
}

export { formValidation };
