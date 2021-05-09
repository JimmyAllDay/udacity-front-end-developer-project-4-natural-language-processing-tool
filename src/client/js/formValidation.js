function formValidation() {
  const submitButton = document.getElementById('submitButton');

  // Add event listener
  submitButton.addEventListener('click', function() {
    // Get input field value
    let input = document.getElementById('input-field').value;

    // initialise word count varaible
    let wordCount = 0;

    // Get word count of user input string
    function validateInput(string) {
      let userString = string.split(' ');

      // iterate through userString and count words
      userString.forEach(word => {
        wordCount += 1;
      });

      return wordCount;
    }

    validateInput(input);

    if (input == '' || wordCount < 2) {
      alert(
        'Please enter at least a phrase or sentence into the input field - you can try copying the text from a blog post or news article'
      );
    }
  });
}

export { formValidation };
