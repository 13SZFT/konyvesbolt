require('dotenv').config();
const express = require('express');
const app = express();
const dbConnect = require('./middlewares/dbConnection');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/rootRoutes'));
app.use('/form', require('./routes/formRoutes'));
app.use('/book', require('./routes/bookRoutes'));

dbConnect();

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
