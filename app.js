const express = require( 'express' );
const app = express();
// const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
const routes = require('./routes');

app.use(morgan('dev'));

app.use(function(req, res, next){
  var mimeType = mime.lookup(req.path)
})

app.use(routes);

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
