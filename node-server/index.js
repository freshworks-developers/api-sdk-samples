var createError = require('http-errors');
var express = require('express');
var http = require('http');

var indexRouter = require('./routes/index');
const employeesRouter = require('./employees');

var app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/employees', employeesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

 /**
  * Get port from environment and store in Express.
  */
  var port = process.env.PORT || '3000';
  app.set('port', port);

 /**
  * Create HTTP server.
  */
  var server = http.createServer(app);
 
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, function(error){
    if(error){
      if (error.syscall !== 'listen') {
        throw error;
      }
    
      var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    } else {
      console.info('Server listening on Port', port);
    }
  });

module.exports = app;
