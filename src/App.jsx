import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './assets/components/Listado';
import Formulario from './assets/components/Formulario';
import Buscador from './assets/components/Buscador';

function App() {
  //data original
  const[data, SetData] = useState(BaseColaboradores);
  //para le buscador, ya que al buscar pisaria el dato existente para eso necesitamos una copia...
  const[dataFilter, SetDataFilter] = useState(data);
   
  return (
    <>
    <h3>Mantenedor Colaboradores</h3>
    <Buscador data={data} dataFilter={SetDataFilter} />
    <main className="row">
    <Listado data={data} dataFilter={dataFilter}/>
    <Formulario data={data} SetData={SetData} dataFilter={dataFilter} SetDataFilter={SetDataFilter} />
    </main>

    </>
  ) 
}

export default App
