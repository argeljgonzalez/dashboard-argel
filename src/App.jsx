import { useState } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

import './App.css'

function App() {
  const [modoOscuro, setModoOscuro] = useState(false)

  const cambiarTema = () => {
    setModoOscuro(!modoOscuro)
  }

  const opciones = [
    { id: 1, nombre: 'Inicio' },
    { id: 2, nombre: 'Productos' },
    { id: 3, nombre: 'Configuración' }
  ]

return (
  <div className={`dashboard ${modoOscuro ? 'dark' : ''}`}>
    
      <Navbar
        modoOscuro={modoOscuro}
        cambiarTema={cambiarTema}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 p-0">
            <Sidebar opciones={opciones} />
          </div>

          <div className="col-md-9 col-lg-10">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App