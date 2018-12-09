var restify = require('restify');
var config = require('./config.js');

console.log(config);

const server = restify.createServer({
  name: config.appName,
  version: config.version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/ui', function (req, res, next) {
  
  var body = '<html><body style="background: #333; color: #ccc;"><h1>User INterface Engine</h1></body></html>';
  
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
  });
  res.write(body);
  res.end();

  return next();
});

 
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});