const express = require('express');
const path = require('path');

// STEP 1: install and import the body-parser module
const bodyParser = require('body-parser');

var app = express();

const port = 3000;
app.listen(port);
console.log(`App listening at port ${port}`);

// STEP 2: specify use of body parser
// allows us to read data sent through forms (aka the request body)
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', function (req, res) {
  // brings us to index.html when we load index page in browser
  res.sendFile(path.join(__dirname + '/index.html'));
});

// STEP 3: create POST methods
// sample POST for details-form in index.html
app.post('/submit-details-form', (req, res) => {
  console.log('You have submitted your form!');
  console.log(req.body);
});

// TO DO: add sample POST method
