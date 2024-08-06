import React from 'react';

// Datos de ejemplo
const ocupaciones = [
  { id: 1, nombre: 'Enfermero' },
  { id: 2, nombre: 'Médico General' },
  { id: 3, nombre: 'Especialista en Cardiología' },
  { id: 4, nombre: 'Administrador' },
];

export const Ocupaciones = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">Ocupaciones</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ocupaciones.map((ocupacion) => (
              <tr key={ocupacion.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ocupacion.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ocupacion.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
