import { postData } from '/src/client/api/postData.js';

// ---------------- Variables --------------------------

function analyseUserInput(input) {
  // Variables
  const serverMessage = document.getElementById('serverMessage');
  const userPostUrl = 'http://localhost:8080/postData';

  // ----------------Post request -------------------
  let userInput = input;

  // Remove unescaped characters
  userInput = encodeURI(userInput);

  // Call POST request
  postData(userPostUrl, { answer: userInput })
    .then(data => {
      console.log(data);
      serverMessage.innerText = `${data.irony} ${data.agreement}`;
    })
    .catch(err => {
      console.log(err);
    });
}

export { analyseUserInput };
