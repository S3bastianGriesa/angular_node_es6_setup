'use strict';

const mongoose = require('mongoose');
const debug = require('debug')('server:app:model');

const AppSchema = new mongoose.Schema({
  test: {
    type: String
  }
});

module.exports = mongoose.model('App', AppSchema);