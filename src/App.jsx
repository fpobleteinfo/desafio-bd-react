import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './assets/components/Listado';
import Formulario from './assets/components/Formulario';

function App() {

  return (
    <>
    <h2>Listado de Colaboradores</h2>
    <main className="row">
    <Listado baseColaboradores={BaseColaboradores} />
    <Formulario />
    </main>

    </>
  )
}

export default App
