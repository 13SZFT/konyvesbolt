const express = require('express');
const {
    getForm,
    postForm,
    updateForm,
} = require('../controllers/formControllers');
const router = express.Router();
const { upload } = require('../middlewares/multer');

router.get('/', getForm);
router.post('/', upload.single('image'), postForm);
router.put('/modosit', upload.single('image'), updateForm);

module.exports = router;
