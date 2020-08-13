import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearcita}) => {

    //Crea  state de citas
    const [cita, actualizarCita] = useState({
        nombre : '',
        apellido :'',
        fecha : '',
        hora : '',
        sintomas : ''
    });

    const [error, actualizarError] = useState(false);

    const {nombre, apellido, fecha, hora, sintomas }  = cita;

    const submitcita = (e)=>{
        e.preventDefault();
        
        //validar 
        if(nombre.trim() === "" || apellido.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        //Eliminaar mensaje de error
        actualizarError(false);

        //asignar un id
        cita.id = uuidv4();

        //crear la cita
        crearcita(cita);

        //reiniciar el form
        actualizarCita({
            nombre : '',
            apellido :'',
            fecha : '',
            hora : '',
            sintomas : '',
            
        })
    }
    
    const handleChange = e =>{
        //console.log(e.target.name);
        //console.log(e.target.value);
        
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        });
    }
    
    return ( 
        <Fragment>
            <h2>Crea cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
              onSubmit={submitcita}
            >
                <label>Nombre Paciente</label>
                <input 
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre del paciente"
                    onChange = {handleChange}
                    value = {nombre}
                />
                <label>Apellido(s) Paciente</label>
                <input 
                    type="text"
                    name="apellido"
                    className="u-full-width"
                    placeholder="Apellido(s) del paciente"
                    onChange = {handleChange}
                    value = {apellido}
                />
                <label>Fecha Alta</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"                 
                    onChange = {handleChange}   
                    value = {fecha}
                />
                
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width" 
                    onChange = {handleChange}                   
                    value = {hora}
                />
                <label>Sintomas</label>
                <textarea
                className="u-full-width" 
                name="sintomas"
                onChange = {handleChange}
                value = {sintomas}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                Agregar Cita
                </button>
            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    crearcita : PropTypes.func.isRequired
}

export default Formulario;