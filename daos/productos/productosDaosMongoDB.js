const ProductoModel = require ('../../models/productos.js');
const ContenedorMongoDb = require ('../../contenedores/ContenedorMongoDb.js');

class ProductosDaosMongoDb extends ContenedorMongoDb {
      constructor() {
            super(ProductoModel);
      }
}
module.exports = ProductosDaosMongoDb;