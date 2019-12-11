const createError = require('http-errors');
const  express = require('express');
const  path = require('path');
const cookieParser = require('cookie-parser');
const  logger = require('morgan');
const fetch = require('node-fetch');
const  indexRouter = require('./routes/index');
const  usersRouter = require('./routes/users');
const  port = "8080";
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



// const path = require("path")
// const fetch = require("node-fetch")
const url = "https://registry.jsonresume.org/eduarte019";
fetch(url) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json())
.then((data) => {
  
})
.catch(function() {
    // This is where you run code if the server returns any errors
});

//module.exports = app;
