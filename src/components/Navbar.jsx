function Navbar({ modoOscuro, cambiarTema }) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary px-4">
      <div className="container-fluid">

        <h3 className="text-white">
          Mi Dashboard
        </h3>

        <button
          className="btn btn-light"
          onClick={cambiarTema}
        >
          {modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>

      </div>
    </nav>
  )
}

export default Navbar