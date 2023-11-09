import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './assets/components/Listado';
import Formulario from './assets/components/Formulario';

function App() {


  return (
    <>

    <Listado baseColaboradores={BaseColaboradores} />
    <Formulario />

    </>
  )
}

export default App
