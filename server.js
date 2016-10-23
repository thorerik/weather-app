var express = require('express');


// create our app
var app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, function () {
  console.log(`Server is up at :${port}`);
});
