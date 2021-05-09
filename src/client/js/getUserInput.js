// ---------------- Variables --------------------------

function getUserInput(input) {
  // Variables
  const serverMessage = document.getElementById('serverMessage');
  const userPostUrl = 'http://localhost:8080/postData';

  // ----------------Post request -------------------
  let userInput = input;

  // Remove unescaped characters
  userInput = encodeURI(userInput);

  // POST request function
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

export { getUserInput };
