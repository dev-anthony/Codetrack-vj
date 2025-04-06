const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('login here')
  console.log('login here')
})

module.exports = router