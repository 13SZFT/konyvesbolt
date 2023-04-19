const express = require('express');
const {
    getBook,
    deleteBook,
    updateBook,
} = require('../controllers/bookControllers');
const router = express.Router();

router.get('/:id', getBook);
router.delete('/', deleteBook);
router.get('/modosit/:id', updateBook);

module.exports = router;
