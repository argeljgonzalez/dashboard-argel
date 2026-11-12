import { useState, useEffect } from 'react'
import TarjetaProducto from './TarjetaProducto'

function MainContent() {
  const [busqueda, setBusqueda] = useState('')
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProductos([
        { id: 1, nombre: 'Laptop', precio: 12000, categoria: 'Tecnología' },
        { id: 2, nombre: 'Mouse', precio: 350, categoria: 'Accesorios' },
        { id: 3, nombre: 'Teclado', precio: 800, categoria: 'Accesorios' },
        { id: 4, nombre: 'Monitor', precio: 3200, categoria: 'Tecnología' }
      ])
      setCargando(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title = busqueda
      ? `Buscando: ${busqueda}`
      : 'Dashboard Reactivo'
  }, [busqueda])

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <main className="p-4">
      <h2>Productos</h2>
      <p>Bienvenido a nuestro Dashboard Reactivo</p>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {cargando ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p>Cargando productos...</p>
        </div>
      ) : (
        <div className="row">
          {productosFiltrados.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default MainContent