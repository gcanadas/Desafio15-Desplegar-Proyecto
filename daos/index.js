let Mensaje, Producto;

(async function(){
    try{
        const { default: MensajesDaosMongoDb } = await import(
            './mensajes/MensajesDaosMongodb.js'
        );
        Mensaje = new MensajesDaosMongoDb();

        const { default: ProductosDaosMongoDb } = await import(
            '../../Desafio15-Desplegar-Proyecto-Nube/daos/productos/ProductosDaosMongodb.js.js'
        );
        Producto = new ProductosDaosMongoDb();
        
        await Mensaje.connect();
    } catch(err) {
        console.error(err.message);
    }
})();
module.exports = {
    Mensaje,
    Producto,
}

