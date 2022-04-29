const express = require('express');

var app = express();
const port = 3000;
app.listen(port);
console.log(`App listening at port ${port}`);

// STEP 3: Set EJS as view engine
app.set('view engine', 'ejs');

// set public folder to access external CSS sheets
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profile1', (req, res) => {
  var data = {
    name: 'Xam',
    age: 17,
    hobbies: ['Playing the Sims', 'Coding'],
  };

  res.render('profile-page', data);
});

app.get('/profile2', (req, res) => {
  var data = {
    name: 'Jared',
    age: 19,
    hobbies: ['Playing Apex', 'Playing Genshin', 'Playing basketball'],
  };

  res.render('profile-page', data);
});
