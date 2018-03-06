const express = require( 'express' );
const app = express();
// const chalk = require('chalk');
const morgan = require('morgan');


app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('Welcome')
  next()
})

app.get('/news', (req, res, next) => {
  res.json({name: 'newsRoute', data: 12345});
  next();
})


app.listen(3000,
console.log('Listening on Port 3000')
);
