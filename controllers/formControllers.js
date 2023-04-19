const Book = require('../models/Book');

exports.getForm = (req, res) => {
    res.status(200).render('form');
};

exports.postForm = async (req, res) => {
    try {
        const { author, title, price } = req.body;
        const file = req.file;
        const newBook = new Book({
            author,
            title,
            price,
            image: `./images/${file.originalname}`,
        });
        await newBook.save();
        res.status(201).json({ msg: newBook });
    } catch (error) {
        res.status(500).json({ msg: 'Sikertelen feltöltés!' });
    }
};

exports.updateForm = async (req, res) => {
    try {
        const { bookId, author, title, price, imageOrigin } = req.body;
        const file = req.file;
        if (!file) {
            const book = await Book.findOneAndUpdate(
                { _id: bookId },
                {
                    author: author,
                    title: title,
                    price: price,
                    image: imageOrigin,
                }
            );
            res.status(200).json({ msg: book });
        } else {
            const book = await Book.findOneAndUpdate(
                { _id: bookId },
                {
                    author: author,
                    title: title,
                    price: price,
                    image: `./images/${file.originalname}`,
                }
            );
            res.status(200).json({ msg: book });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: 'Sikertelen frissítés!' });
    }
};
