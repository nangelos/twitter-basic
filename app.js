const express = require( 'express' );
const app = express();
// const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks


app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
  next();
})

app.get('/news', (req, res, next) => {
  res.json({name: 'newsRoute', data: 12345});
  next();
})


app.listen(3000,
console.log('Listening on Port 3000')
);

// var locals = {
//   title: 'An Example',
//   people: [
//       { name: 'Gandalf'},
//       { name: 'Frodo' },
//       { name: 'Hermione'}
//   ]
// };

// nunjucks.render('index.html', locals, function (err, output) {
//   if (err) return console.error(err);
//   console.log(output);
// });
