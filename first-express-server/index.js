// STEP 1: import express module
const express = require('express');

// STEP 2: create instance of express app
var app = express();

// STEP 3: tell app to listen to server on specified port
// specifies port number to be used
// commonly used port numbers: 3000, 9090
const port = 3000;
app.listen(port);
// inform user of port being listened to
// good practice to include this since it helps developer easily remember the port being used
console.log(`App listening at port ${port}`);

// STEP 4: add routes
// these are URLs that will be connected to
app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

// TO DO: Add remaining routes here
