const pant = require('path');

const express l = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get('/peaches', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'peaches.html'));
});

module.exports = router;