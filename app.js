const http = require('http');
const express = require('express');
const nconf = require('nconf');
const debug = require('debug')('server:app');

const app = express();
const server = http.createServer(app);

nconf
  .argv()
  .env()
  .file({
    file: './config.json'
  });

app.use(express.static('public'));

const webOptions = {
  port: nconf.get('WEB_PORT'),
  host: nconf.get('WEB_HOST')
};

server.listen(webOptions, () => {
  debug(`Server listening on: ${webOptions.port}`);
})