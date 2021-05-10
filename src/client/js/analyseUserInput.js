// ---------------- Variables --------------------------

function analyseUserInput(input) {
  // Variables
  const serverMessage = document.getElementById('serverMessage');
  const userPostUrl = 'http://localhost:8080/postData';

  // ----------------Post request -------------------

  // Declare new user input variable
  let userInput = input;

  // Remove unescaped characters
  userInput = encodeURI(userInput);

  // POST request
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

  // Call imported POST request function
  postData(userPostUrl, { answer: userInput })
    .then(data => {
      console.log(data);
      // Update UI with API data
      serverMessage.innerText = `${data.irony} ${data.agreement}`;
    })
    .catch(err => {
      console.log(err);
    });
}

export { analyseUserInput };
