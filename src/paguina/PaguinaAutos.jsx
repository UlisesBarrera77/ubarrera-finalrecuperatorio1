import React from 'react';
import BarraNavegacion from '../componentes/BarraNavegacion';
import ListaAutos from '../componentes/ListaAutos';

function PaguinaAutos() {
    return(
        <div>
            <BarraNavegacion />
            <ListaAutos />
        </div>
    );
}

export default PaguinaAutos;