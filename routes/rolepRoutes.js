const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is product route');
});

module.exports = router;