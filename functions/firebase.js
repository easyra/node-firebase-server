const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyBr1KPJYvacvP5bLWYx0iE5QVijgQm2TNo',
  authDomain: 'node-server-testing-2574d.firebaseapp.com',
  databaseURL: 'https://node-server-testing-2574d.firebaseio.com',
  projectId: 'node-server-testing-2574d',
  storageBucket: 'node-server-testing-2574d.appspot.com', //gs://node-server-testing-2574d.appspot.com
  messagingSenderId: '468347178449',
};
firebase.initializeApp(config);

module.exports = firebase;
