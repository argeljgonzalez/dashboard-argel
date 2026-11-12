function Sidebar({ opciones }) {
  return (
    <aside className="bg-light p-3 h-100">
      <h4>Menú</h4>
      <hr />

      {opciones.map((opcion) => (
        <div
          key={opcion.id}
          className="p-2 mb-2 border rounded"
        >
          {opcion.nombre}
        </div>
      ))}
    </aside>
  )
}

export default Sidebar