import Layout from "@/components/Layout"
import Link from "next/link"

export default function Producto() {
    return (
        <Layout>
            <Link className="btn-primario" href={'/producto/nuevo'}>Agrega Nuevo Producto</Link>
        </Layout>
    )
}