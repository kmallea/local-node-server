var util = require('util'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    port = 3000;

var app = connect();
app.use(serveStatic("./_www"));
app.listen(port);

util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');