const Book = require('../models/Book');

exports.getBook = async (req, res) => {
    try {
        const param = req.params;
        const book = await Book.findOne({ _id: param.id });
        res.status(200).render('book', { book });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        const book = await Book.findOneAndDelete({ _id: body.id });
        res.status(200).json({ msg: book });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const param = req.params;
        const book = await Book.findOne({ _id: param.id });
        // console.log(book);
        res.status(200).render('modosit', { book });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
