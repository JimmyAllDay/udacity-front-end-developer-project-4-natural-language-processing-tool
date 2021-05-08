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
    if (inputField.value !== '') {
      async function postData(url = '', data = {}) {
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
          console.log(data); // JSON data parsed by `data.json()` call
          serverMessage.innerText = data.irony;
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
}

export { getUserInput };
