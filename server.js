const {Nuxt} = require('nuxt');
const https = require('https');
const host = process.env.HOST || 127.0.0.1;
const port = process.env.PORT || 3000;
const config = require('./nuxt.config.js');
const nuxt = new Nuxt(config);
https.createServer(nuxt.render).listen(port,host);
console.log('Server listening on ' + host + ':' + port);