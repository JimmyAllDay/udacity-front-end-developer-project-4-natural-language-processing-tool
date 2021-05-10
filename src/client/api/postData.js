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
export { postData };
