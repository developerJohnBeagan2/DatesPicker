/*
    to use import instead of these lets
      need babel
*/
let express = require('express');
let path = require('path');
let open = require('open');

const port = 2222;
const app = express();

app.use('/', express.static(path.join(__dirname, '../dist/')));

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});

