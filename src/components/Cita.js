import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarcita}) => {
    return ( 

        <div className="cita">
            <p><span>Nombre: {cita.nombre} </span></p>
            <p><span>Apellido: {cita.apellido} </span></p>
            <p><span>Fecha: {cita.fecha} </span></p>
            <p><span>Hora: {cita.hora} </span></p>
            <p><span>Sintomas: {cita.sintomas} </span></p>
            <button className="button eliminar u-full-width"
            onClick={()=> eliminarcita(cita.id)}
            >Eliminar &times;</button>
        </div>
     );
}

export default Cita;