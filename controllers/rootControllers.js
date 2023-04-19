const Book = require('../models/Book');

exports.getRoot = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).render('index', { books });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
