const mongoose = require ('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
    nombre: { type: String, required: true },
    codigo: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
});

const Producto = mongoose.model('Producto', productoSchema, 'productos');

module.exports =  Producto;