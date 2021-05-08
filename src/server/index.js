// -------------Project Set Up -----------------
let appData = [];

// ------------- Express -----------------------

// import express
const express = require('express');

// init Express
const app = express();

// set port
const port = 8080;

// -------------Middleware -------------------

// import path
let path = require('path');

// import fetch
const fetch = require('node-fetch');

// import cors
const cors = require('cors');

// import body-parser
const bodyParser = require('body-parser');

// -------------------- API Variables ---------------------
// Base URL
const apiBaseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
// API Key
const apiKey = '4642a132e4fdbcbc35d525e854c0c51c';

// -------------------init middleware----------------------

// init middleware
app.use(cors());
app.use(bodyParser());

// serve static files
app.use(express.static('dist'));

// ----------------------Functions------------------------

// confirm port
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
});

// POST Route to collect & process user input
app.post('/postData', (req, res) => {
  // Send input to project endpoint array
  data = req.body;
  appData.push(data);
  // API URL
  let apiURL = `${apiBaseUrl}?key=${apiKey}&txt=${appData[0].answer}&lang=auto`;
  async function getsentiment() {
    await fetch(apiURL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .then((appData = []));
  }
  getsentiment();
});
