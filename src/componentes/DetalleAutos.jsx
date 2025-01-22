import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAutoById}  from '../api';

function DetalleAutos() {
    const { id } = useParams();
    const [cargando, setCargando] = useState(true);
    const [auto, setAuto] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await fetchAutoById(id);
                setAuto(data);
                setCargando(false);
            } catch (error) {
                console.error("Error al obtener detalles del auto", error);
                setCargando(false);
            }
        };
        fetchData();
    }, [id]);

    if(cargando) {
        return <div>Cargando....</div>;
    } else {
        return (
            <div>
                <h2>Detalle del Auto</h2>
                <p>Nombre: {auto.nombre}</p>
                <p>Precio: {auto.precio}</p>
                <p>Stock: {auto.stock}</p>
                <p>Código: {auto.codigo}</p>
            </div>
        );
    }
}

export default DetalleAutos;