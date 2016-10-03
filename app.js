const http = require('http');
const express = require('express');
const nconf = require('nconf');
const mongoose = require('mongoose');
const debug = require('debug')('server:app');
const appModule = require('app');

const app = express();
const server = http.createServer(app);

nconf
  .argv()
  .env()
  .file({
    file: './config.json'
  });

app.use(express.static('public'));

app.use(appModule.router);

const db_url = nconf.get('DB_URL');
const webOptions = {
  port: nconf.get('WEB_PORT'),
  host: nconf.get('WEB_HOST')
};

mongoose.connect(db_url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', () => {
  debug(`established mongoDB connection to ${db_url}`);
});

server.listen(webOptions, () => {
  debug(`Server listening on: ${webOptions.port}`);
})