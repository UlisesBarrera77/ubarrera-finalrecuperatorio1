import React from 'react';
import BarraNavegacion from '../componentes/BarraNavegacion';

function PaguinaRegistro() {
    return (
        <div>
            <BarraNavegacion />
            <h2> Registro </h2>
            <from>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre"/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="nombre"/>
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="password"/>
                </div>
                <button type ="submit">Registrar</button>
            </from>
        </div>
    );
}

export default PaguinaRegistro;