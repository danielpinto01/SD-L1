var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>Pinto re contra re MK</h1><p>Hola mundo</p><p>Hola a todo el mundo menos florez</p>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

