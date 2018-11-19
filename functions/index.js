const functions = require('firebase-functions');

const server = require('./server.js');

exports.upperCase = functions.database
  .ref('/user/{id}')
  .onCreate((snapshot, context) => {
    console.log(snapshot.val());
    const oldName = snapshot.val().name;
    const newName = oldName.toUpperCase();
    return snapshot.ref.update({ name: newName });
  });

exports.server = functions.https.onRequest(server);
