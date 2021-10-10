const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('middleware');
    res.send('test');
})

module.exports = router;