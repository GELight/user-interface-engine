var packageJson = require('./package.json');

// const SERVICE_NAME = process.argv[1];

const config = {
    appName: packageJson.name,
    version: packageJson.version,
    host: '/',
    port: 4000
}

if (process.env.NODE_ENV === 'production') {
    config.port = 4000;
    config.host = 'http://localhost';
}

module.exports = config;