const express = require('express');

var app = express();
const port = 3000;
app.listen(port);
console.log(`App listening at port ${port}`);

// STEP 3: Set EJS as view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
