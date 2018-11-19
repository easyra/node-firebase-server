const express = require('express');
const router = express.Router();

router.get('/high', (req, res) => {
  res.json('high');
});

module.exports = router;
