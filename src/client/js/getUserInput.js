// ---------------- Variables --------------------------

function getUserInput() {
  // Variables
  let userInput = '';
  let inputField = document.getElementById('name');
  let submitButton = document.getElementById('submitButton');
  // Get input
  submitButton.addEventListener('click', function() {
    userInput = inputField.value;
    if (userInput != '') {
      console.log(`client side input = ${userInput}`);
    }

    const postData = async (url = '', data = {}) => {
      console.log(data);
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data)
      });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      } catch (error) {
        console.log('error', error);
      }
    };
    postData('/', userInput);
  });
}

export { getUserInput };
