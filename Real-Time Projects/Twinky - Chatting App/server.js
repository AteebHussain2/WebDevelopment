const express = require('express')
const mongoose = require('mongoose')
const { root } = require('postcss')
const path = require('path')

const app = express()
const port = 3000

// Middleware to parse JSON bodies
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the static files directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('login.html')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})