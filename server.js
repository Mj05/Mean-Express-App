const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/',(req, res) => {
res.send('Hello Express');
});

app.get('/about',(req, res) => {
res.render('about.hbs', {
	pageTitle: 'About Page',
	copyRight: 'copyright@2018'
});
});

app.get('/home',(req, res) => {
res.render('home.hbs', {
	pageTitle: 'Home Page',
	copyRight: 'copyright@2018'
});
});

app.listen(3000, () => {
console.log('Server Running.....3000');
});
