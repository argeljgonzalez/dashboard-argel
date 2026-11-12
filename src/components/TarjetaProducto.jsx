function TarjetaProducto({ producto }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">
            {producto.nombre}
          </h5>

          <p className="card-text">
            Precio: ${producto.precio}
          </p>

          <p className="text-muted">
            Categoría: {producto.categoria}
          </p>

          <button className="btn btn-primary" disabled>
            Ver producto
          </button>
        </div>
      </div>
    </div>
  )
}

export default TarjetaProducto