const express = require('express');
const serverRouters = require('./routers/serverRouters.js');
const functions = require('firebase-functions');
const server = express();

server.use('/', serverRouters);

server.get('/', (req, res) => {
  res.json('wow');
});

module.exports = server;
