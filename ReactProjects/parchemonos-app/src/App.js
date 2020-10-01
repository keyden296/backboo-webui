//cargar modulos (dependencia va entre comilllas simples)
import React from 'react'
import {Navigation} from './pages/Navigation' 
import {UserContextStore} from './context/UserContext'

//export volver la funcion publica
export const App = () => (
  <UserContextStore>
    <Navigation />
  </UserContextStore>
)