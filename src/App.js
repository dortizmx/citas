import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //localstorage citas iniciales
  let citasiniciales = JSON.parse(sessionStorage.getItem('citas'));
  if(!citasiniciales){
    citasiniciales = [];
  }


  //Arreglo de citas
  const [citas, guardarcitas] = useState(citasiniciales);

  //use effect para el manejo de state
  useEffect(()=>{
    if(citasiniciales){
      sessionStorage.setItem('citas', JSON.stringify(citas));
    }
    else {
      sessionStorage.setItem('citas', JSON.stringify([]));
    }

  }, [citas]); 
  const crearcita = (cita)=>{
    console.log(cita);
    guardarcitas([...citas,cita]);
  }

  //funcion que elimina cita por su id

  const eliminarcita = (id) =>{
    const nuevascitas = citas.filter(cita => cita.id !== id);
    guardarcitas(nuevascitas);

  }

  const titulo = citas.length === 0 ? "Agrega una Cita" : "Listado de citas"; 
  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>
    <h4>David Ortiz - 030085070</h4>
    <div className="container">
      <div className="row">
        <div  className="one-half column">
          <Formulario
          crearcita = {crearcita}
          />
        </div>
        <div  className="one-half column">
          <h2>{ titulo}</h2>
          {citas.map( (cita)=>(
            <Cita key = {cita.id} 
            cita = {cita}
            eliminarcita = {eliminarcita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
    
  );
}

export default App;
