var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var randomString = require('randomstring');

var urls = {};

app.use(express.static('public'));

var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({extended: false});

function addRedirect(short) {
    app.get('/' + short, function (req, res) {
      res.redirect(urls[short]);
    })
}
        
app.post('/shorten', urlParser, function(req, res) {
  var url = req.body.toshorten;
  var shortened = randomString.generate(5);
  urls[shortened] = url;
  addRedirect(shortened);
  res.write(req.headers.origin + '/' + shortened);
  res.end();
});


app.listen(3000);

