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
  // console.log(req.route.stack[0].method.toUpperCase(), req.route.path);
  process.stdout.write(chalk.yellow(req.route.stack[0].method.toUpperCase()) + ' ' + chalk.cyan(req.route.path + '\n'));
  // console.log(res.req.rawHeaders.method);
  // console.log(res.req.rawHeaders);
  process.stdout.write(res.statusCode.toString() + '\n');
  next()
})

app.listen(3000,
console.log('Listening on Port 3000')
);
