const express = require( 'express' );
const app = express();
const chalk = require('chalk');

app.get('/', (req, res, next) => {
  res.send('Welcome')
  next()
})

app.get('/news', (req, res, next) => {
  res.send('News')
  next()
})

app.use((req, res, next) => {
  console.log(req.verb, req.route);
  next()
})

app.listen(3000,
console.log('Listening on Port 3000')
);
