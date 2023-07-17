const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: {type: String, required: true, max: 60},
    apellido_p: {type: String, required: true, max: 40},
    apellido_m: {type: String, required: true, max: 40},
    telefono: {type: String, required: true, max: 15},
    email: {type: String, required: false, max: 60},
    direccion: {type: String, required: false, max: 150},
})

module.exports = mongoose.model('users', userSchema)