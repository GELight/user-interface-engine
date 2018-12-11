const restify = require('restify');
const config = require('./config.js');
const fs = require('fs');

console.log(config);

const server = restify.createServer({
  name: config.appName,
  version: config.version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.post('/ui', function (req, res, next) {

  let html = fs.readFileSync('./dist/index.html', (err, html) => {
    console.log(err, html);
  });
  
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(html),
    'Content-Type': 'text/html'
  });
  res.write(html);
  res.end();

  return next();
});

 
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});