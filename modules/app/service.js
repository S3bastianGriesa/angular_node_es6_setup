'use strict';

const debug = require('debug')('server:app:service');

const AppModel = require('./model');

class AppService {
  getData() {
    return AppModel
      .find({})
      .exec();
  }
}

module.exports = AppService;