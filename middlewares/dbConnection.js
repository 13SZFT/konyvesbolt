const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log('Sikeres csatlakozás!'))
        .catch((error) => console.log('Valalmi hiba történt!' + error.message));

    mongoose.connection.on('open', () => console.log('Sikeres megnyitás!'));
    mongoose.connection.on('close', () => console.log('Sikeres Zárás!'));
};

module.exports = dbConnect;
