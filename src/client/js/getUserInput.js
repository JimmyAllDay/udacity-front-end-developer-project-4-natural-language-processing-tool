// ---------------- Variables --------------------------

function getUserInput() {
  // Variables
  let userInput = '';
  let inputField = document.getElementById('name');
  let submitButton = document.getElementById('submitButton');
  // Get input
  submitButton.addEventListener('click', function() {
    userInput = inputField.value;
    console.log(`::: Form submitted with value: ${userInput} :::`);
  });

  //   set up get route
}

export { getUserInput };

/*
------------------- handleSubmit Function ----------------------
    (function present in git repo - not working in repo)
                      
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  checkForName(formText);

  console.log('::: Form Submitted :::');
  fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
      document.getElementById('results').innerHTML = res.message;
    });
}

export { handleSubmit };

*/
