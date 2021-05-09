function formValidation(input) {
  // Boolean value dictates whether getUserInput() is called in index.js
  let canFetchAPI = false;

  // Store input string word count in variable
  let wordCount = input.split(' ').length;

  // Check input string is a phrase
  if (wordCount < 3) {
    alert(
      'Please enter at least a phrase or sentence into the input field - you can try copying the text from a blog post or news article'
    );
    canFetchAPI = false;
  } else {
    canFetchAPI = true;
  }
  return canFetchAPI;
}

export { formValidation };
