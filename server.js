var express = require('express');


// create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Server is up at :3000');
});
