const express = require('express');
const { getRoot } = require('../controllers/rootControllers');
const router = express.Router();

router.get('/', getRoot);

module.exports = router;
