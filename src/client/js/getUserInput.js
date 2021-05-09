// ---------------- Variables --------------------------

function getUserInput() {
  // Variables
  let userInput = '';
  const inputField = document.getElementById('input-field');
  const submitButton = document.getElementById('submitButton');
  const serverMessage = document.getElementById('serverMessage');

  const userPostUrl = 'http://localhost:8080/postData';

  // ----------------Post request -------------------

  // add event listener
  submitButton.addEventListener('click', function() {
    userInput = inputField.value;
    console.log(`Input being sent by POST Request is: ${userInput}`);

    // Remove unescaped characters
    userInput = encodeURI(userInput);

    // Check input string is analyse-able
    if (userInput != '') {
      // Post request
      async function postData(url = '', data = {}) {
        // Declare options
        const options = {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data)
        };

        const response = await fetch(url, options);
        return await response.json();
      }

      postData(userPostUrl, { answer: userInput })
        .then(data => {
          console.log(data);
          serverMessage.innerText = `${data.irony} ${data.agreement}`;
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
}

export { getUserInput };
