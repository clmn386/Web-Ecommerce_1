import Layout from "@/components/Layout"
import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function NuevoProducto() {
    const [titulo, setTitle] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [goToProductos, setGoToProductos] = useState(false);  
    async function crearProducto(e) {  
        e.preventDefault();
        const datos = {titulo,descripcion,precio}
        await axios.post('/api/productos', datos);
        setGoToProductos(true);    

    }
    if(goToProductos) {
        return redirect('/productos');
    }
    return (
        <Layout>
            <form onSubmit={crearProducto} >
                <h1>Nuevo Producto</h1>
                <label>Nombre del Producto</label>
                <input type="text" placeholder="nombre de producto" value={titulo} onChange={e => setTitle(e.target.value)}/>
                <label>Descripcion</label>
                <textarea placeholder="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)}></textarea>
                <label>Precio</label>
                <input type="text" placeholder="&euro;" value={precio} onChange={e => setPrecio(e.target.value)}/>
                <button className="btn-primario" type="submit">Agregar</button>
            </form>
        </Layout>
    )
}