const mongoose = require('mongoose');

const Uri_DB = 'mongodb://0.0.0.0:27017/MERNcrud';

const connect = async () => {
  try {
    await mongoose.connect(Uri_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión establecida a MongoDB');
  } catch (err) {
    console.error('Error de conexión a MongoDB:', err);
  }
};

module.exports = connect;
