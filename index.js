const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

// view engine
app.set('view engine', 'pug')

// static file
app.use(express.static(__dirname + '/public'));

// body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.render('index', {title: 'CryptoDash'});
});

app.use(bodyParser.json());

app.get('/signup', (req, res) => {
  // Take data and store in database
  res.render('signup', {title: 'Sign Up'});
});

app.get('/login', (req, res) => {
  // Take data and store in database
  res.render('login', {title: 'Log In'});
});

app.get('/dashboard', (req, res) => {
  // Take data and store in database
  res.render('dashboard', {title: 'Dashboard'});
});

app.post('/signup', (req, res) => {
  res.send(`${req.body.username} ${req.body.password} ${req.body.email}`);
});

app.post('/login', (req, res) => {
  //res.send(`${req.body.username} ${req.body.password}`);
  // Take data and read username from database and compare the password then load a view with dashboard
  res.redirect('/dashboard');
});

app.listen(port, () => console.log(`Running on port ${port}`));
