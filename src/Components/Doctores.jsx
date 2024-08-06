import React from 'react';

// Datos de ejemplo
const doctores = [
  { id: 1, nombre: 'Carlos', apellido: 'Martínez', especialidad: 'Cardiología', correo: 'carlos@example.com', telefono: '321-654-9870' },
  { id: 2, nombre: 'Laura', apellido: 'Gómez', especialidad: 'Pediatría', correo: 'laura@example.com', telefono: '654-321-0987' },
  { id: 3, nombre: 'María', apellido: 'Rodríguez', especialidad: 'Dermatología', correo: 'maria@example.com', telefono: '987-123-4560' },
];

export const Doctores = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">Doctores</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Especialidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctores.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doctor.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.apellido}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.especialidad}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.correo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
