import React from 'react';

const data = [
  { id: 1, nombre: 'Juan Pérez', correo: 'juan.perez@example.com', fechaRegistro: '2024-08-01', estado: 'Activo' },
  { id: 2, nombre: 'Ana García', correo: 'ana.garcia@example.com', fechaRegistro: '2024-07-15', estado: 'Inactivo' },
  { id: 3, nombre: 'Luis Martínez', correo: 'luis.martinez@example.com', fechaRegistro: '2024-06-30', estado: 'Activo' },
  // Agrega más datos aquí
];

export const Usuarios = () => {
  return (
    <div className="p-4 ">
      <h1>Usuarios</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Nombre</th>
              <th className="py-2 px-4 border-b text-left">Correo</th>
              <th className="py-2 px-4 border-b text-left">Fecha de Registro</th>
              <th className="py-2 px-4 border-b text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((usuario) => (
              <tr key={usuario.id} className="border-b border-gray-200">
                <td className="py-2 px-4 border-b text-left">{usuario.id}</td>
                <td className="py-2 px-4 border-b text-left">{usuario.nombre}</td>
                <td className="py-2 px-4 border-b text-left">{usuario.correo}</td>
                <td className="py-2 px-4 border-b text-left">{usuario.fechaRegistro}</td>
                <td className="py-2 px-4 border-b text-left">{usuario.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
