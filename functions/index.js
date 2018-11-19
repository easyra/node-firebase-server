const functions = require('firebase-functions');

const server = require('../server.js');
//
exports.server = functions.https.onRequest(server);
