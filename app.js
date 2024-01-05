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
app.set('view engine', 'jade');

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
const http = require('http'); 
  
// Setting Port Number as 80  
const port = 80; 
  
// Setting hostname as the localhost 
// NOTE: You can set hostname to something  
// else as well, for example, say 127.0.0.1 
const hostname = 'localhost'; 
  
// Creating Server  
const server = http.createServer((req,res)=>{ 
  
    // Handling Request and Response  
    res.statusCode=200; 
    res.setHeader('Content-Type', 'text/plain') 
    res.end("Welcome to Geeks For Geeks") 
}); 
  
// Making the server to listen to required 
// hostname and port number 
server.listen(port,hostname,()=>{ 
  
    // Callback  
    console.log(`Server running at http://${hostname}:${port}/`); 
});
module.exports = app;
