const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
// Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
  res.render('home.hbs', {
    nombre: 'jeSus ramIRez'
  });
});

app.get('/about', function (req, res) {
  res.render('about.hbs');
});

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
})
