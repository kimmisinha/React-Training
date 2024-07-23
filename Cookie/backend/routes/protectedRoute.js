const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authMiddleware');

router.get('/protected', checkAuth, (req, res) => {
  res.json({ message: 'This is protected data', user: req.user });
});

module.exports = router;
