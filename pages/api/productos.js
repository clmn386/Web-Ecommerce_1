import mongoose from 'mongoose';
import {Producto_BD} from '@/models/Producto';
import clientPromise from '@/lib/mongodb';
import { mongooseConnect } from '@/lib/mongoose';

export default async function handle(req, res) {   
    const { method } = req;
    mongoose.Promise = clientPromise;
    // coneccion = await mongooseConnect();
    mongoose.set('bufferCommands', false);
    if(method === 'POST') {
        const { titulo, descripcion, precio } = req.body;
        const Producto = await Producto_BD.create({
            titulo, descripcion, precio
        });
        res.json(Producto);
    } 
}