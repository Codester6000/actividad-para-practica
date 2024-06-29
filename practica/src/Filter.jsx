import React, { useState } from 'react';

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: 'Juan', edad: 25 },
        { id: 2, nombre: 'Ana', edad: 17 },
        { id: 3, nombre: 'Pedro', edad: 30 },
        // Otros usuarios...
    ]);

    // Función para filtrar usuarios mayores de 18 años
    const filtrarUsuariosMayoresDe18 = () => {
        const usuariosFiltrados = usuarios.filter(usuario => usuario.edad > 18);
        setUsuarios(usuariosFiltrados);
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.nombre} - {usuario.edad}</li>
                ))}
            </ul>
            <button onClick={filtrarUsuariosMayoresDe18}>Filtrar Usuarios Mayores de 18</button>
        </div>
    );
};

export default ListaUsuarios;
