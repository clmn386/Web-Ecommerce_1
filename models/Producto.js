 import { model, Schema, models} from 'mongoose';
 
 const EsquemaModelo = new Schema({
    titulo: { type: String, required: true}, 
    descripcion:  String, 
    precio: {type: Number, required: true},
 });

 export const Producto_BD = models.Producto || model('Producto', EsquemaModelo);