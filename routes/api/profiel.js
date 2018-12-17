const express = require('express');
const router = express.Router();

// @route   GET api/profiel/test
// @desc    Tests profiel route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'profiel Works' }));

module.exports = router;
