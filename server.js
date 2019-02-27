const {Nuxt} = require('nuxt');
const https = require('https');
const port = process.env.PORT || 3000;
const config = require('./nuxt.config.js');
const nuxt = new Nuxt(config);
https.createServer(nuxt.render).listen(port);
console.log('Server listening on `localhost:' + port + '`.');
