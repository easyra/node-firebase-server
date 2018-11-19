const express = require('express');
const serverRouters = require('./routers/serverRouters.js');
const server = express();

server.use('/', serverRouters);
module.exports = server;
