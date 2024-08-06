import React from 'react';

// Datos de ejemplo
const citas = [
  { id: 1, paciente: 'Juan Pérez', doctor: 'Dr. Gómez', fecha: '2024-08-10', hora: '10:00 AM' },
  { id: 2, paciente: 'María López', doctor: 'Dr. Fernández', fecha: '2024-08-12', hora: '11:00 AM' },
  { id: 3, paciente: 'Carlos Ruiz', doctor: 'Dr. Martínez', fecha: '2024-08-15', hora: '02:00 PM' },
  { id: 4, paciente: 'Ana García', doctor: 'Dr. Morales', fecha: '2024-08-18', hora: '03:00 PM' },
];

export const Citas = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">Citas</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {citas.map((cita) => (
              <tr key={cita.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cita.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cita.paciente}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cita.doctor}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cita.fecha}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cita.hora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
