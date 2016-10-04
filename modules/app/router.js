'use strict';

const express = require('express');
const debug = require('debug')('server:app:router');
const AppService = require('./service');
const appService = new AppService();
const router = express.Router();

router.get('/app', (req, res) => {
  debug('Get appdata');
  appService
    .getData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      debug('error: ', err);
      res.status(400).send(err);
    });
});

module.exports = router;