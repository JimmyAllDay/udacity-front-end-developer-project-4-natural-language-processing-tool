let appData = {};
var path = require('path');
const fetch = require('node-fetch');
const cors = require('cors');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function(req, res) {
  res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});

app.get('/test', function(req, res) {
  res.send(mockAPIResponse);
});

app.post('/', function(req, res) {
  res.send('post recieved');
});

function sendToEndPoint(req, res) {
  console.log(req.body);
  appData = req.body;
}
