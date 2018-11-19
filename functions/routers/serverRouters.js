/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
const express = require('express');
const firebase = require('../firebase');
const functions = require('firebase-functions');

const rootRef = firebase.database().ref();

const router = express.Router();

router.get('/high', (req, res) => {
  res.json('high');
});

router.get('/user', (req, res) => {
  rootRef
    .child('user')
    .once('value')
    .then(snapshot => {
      res.json(snapshot.val());
    })
    .catch(err => res.send(err));
});

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(auth => {
      // eslint-disable-next-line promise/no-nesting
      let token = () => 
      auth.user.getIdToken(true).then(token => {
        res.json(token);
      });
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      res.json(firebase.auth().currentUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/loginToken', (res, req) => {
  firebase
    .auth()
    .signInWithCustomToken(req.body.token)
    .then(auth => {
      res.json(auth);
    });
});

router.get('/login', (req, res) => {
  res.json(firebase.auth().currentUser);
});

router.post('/user/:uid', (req, res) => {
  const { name, location } = req.body;
  rootRef
    .child(`user`)
    .push({ name: name, location: location })
    .then(() => {
      res.json('user added');
    });
});

// router.post('/upload', upload.single('avatar'), (req, res) => {
//   storageRef.put(req.file).then(() => {
//     res.send('Uploaded a file');
//   });
// });

module.exports = router;
