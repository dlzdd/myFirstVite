var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.all("*", function (req, res) {   //此时的 '*' 指用来处理所有的请求，从而在服务器端解决跨域的问题；
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');   //此时表示：允许 'http://127.0.0.1:5500' 地址来访问服务器；   
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');           //此时表示：允许发的请求方式，如：'GET,POST,PUT';
  res.header('Access-Control-Allow-Headers', 'Content-Type');           //此时表示：允许发的请求头，如：'Content-Type' 请求头的类型;
  req.next();   //请求回来，并进行下一步的操作；
});


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

module.exports = app;
