const express = require('express');
const router = express.Router();
const v1Router = require('./v1');
const v2Router = require('./v2');

router.get('/v1', v1Router);
router.get('/v2', v2Router);

module.exports = router;