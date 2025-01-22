import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAutos } from '../api';

function ListaAutos() {
    const [autos, setAutos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await fetchAutos();
                setAutos(data);
                setCargando(false);
            } catch (error) {
                console.error(error);
                setCargando(false);
            }
        };
        fetchData();
    }, []);

    return(
        <div>
            <div>
                <h2>Lista de Autos</h2>
                {cargando ? (
                      <p>Cargando autos.....</p>
                    ) : (
                    <ul className="lista-autos">
                            {autos.map((autos) => (
                                <li key={autos.id} className="item-auto">
                                    <h3>{autos.nombre}</h3>
                                    <p>Precio: ${autos.precio}</p>
                                    <p>Stock: {autos.stock}</p>
                                    <p>Codigo: {autos.codigo}</p>
                                    <Link to={`/auto/${autos.id}`}>Ver detalle</Link>
                                </li>
                            ))} 
                     </ul>
                    ) }
            </div>
        </div>
    );
}

export default ListaAutos;