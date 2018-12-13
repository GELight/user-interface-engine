const restify = require('restify');
const fs = require('fs');
const ServerConfig = require('../server-config.js');

console.log(ServerConfig);

const server = restify.createServer({
  name: ServerConfig.app_name,
  version: ServerConfig.version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.post('/ui', function (req, res, next) {

  console.log(req.body);

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

server.listen(ServerConfig.port, function () {
  console.log('"%s" listening at %s', server.name, server.url);
  console.log(' Docker Container > http://localhost:' + 3000);
});