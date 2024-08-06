import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainLayout from './Components/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Usuarios} from './Components/Usuarios'
import {Pacientes} from './Components/Pacientes'
import {Doctores} from './Components/Doctores'
import {Citas} from './Components/Citas'
import {Ocupaciones} from './Components/Ocupaciones'
import { Dashboard } from './Components/Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>
   <Routes>
      <Route path="/" element={<MainLayout />}>
         <Route path="dashboard" element={<Dashboard />} />   
         <Route path="usuarios" element={<Usuarios />} />
         <Route path="pacientes" element={<Pacientes />} />
         <Route path="doctores" element={<Doctores />} />
         <Route path="citas" element={<Citas />} />
         <Route path="ocupaciones" element={<Ocupaciones />} />
      </Route>
   </Routes>
</BrowserRouter>

)
