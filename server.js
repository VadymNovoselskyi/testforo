// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
/* app.listen(5050); */
app.listen(process.env.PORT);
// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
app.get('/hemma', function (req, res) {
    res.render('pages/index');
});
app.get('/astronauter', function (req, res) {
    res.render('pages/astronauter')
});
