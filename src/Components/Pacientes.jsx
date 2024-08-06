import React from 'react';

// Datos de ejemplo
const pacientes = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez', fechaNacimiento: '1989-06-15', direccion: 'Calle Falsa 123', correo: 'juan@example.com', telefono: '123-456-7890' },
  { id: 2, nombre: 'Ana', apellido: 'López', fechaNacimiento: '1995-08-22', direccion: 'Avenida Siempre Viva 456', correo: 'ana@example.com', telefono: '987-654-3210' },
  { id: 3, nombre: 'Luis', apellido: 'García', fechaNacimiento: '1978-11-30', direccion: 'Boulevard de los Sueños Rotos 789', correo: 'luis@example.com', telefono: '456-789-0123' },
];

export const Pacientes = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">Pacientes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Nacimiento</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paciente.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paciente.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paciente.apellido}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paciente.fechaNacimiento}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paciente.direccion}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paciente.correo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paciente.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
