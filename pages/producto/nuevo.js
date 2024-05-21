import Layout from "@/components/Layout"

export default function NuevoProducto() {
    return (
        <Layout>
            <h1>Nuevo Producto</h1>
            <label>Nombre del Producto</label>
            <input type="text" placeholder="nombre de producto"/>
            <label>Descripcion</label>
            <textarea placeholder="descripcion"></textarea>
            <label>Precio</label>
            <input type="text" placeholder="&euro;" />
            <button className="btn-primario">Agregar</button>
        </Layout>
    )
}