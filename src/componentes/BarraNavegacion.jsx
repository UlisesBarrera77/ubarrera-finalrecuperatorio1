import React from 'react';
import { Link } from 'react-router-dom';

function BarraNavegacion() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/autos">Autos</Link></li>
                <li><Link to="/Registro">Registro</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default BarraNavegacion;