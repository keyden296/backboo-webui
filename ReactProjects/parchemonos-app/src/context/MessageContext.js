import React, {createContext} from 'react'

const saludar = 'saludos'
export const MessageContext = createContext(saludar)
//matricular de forma global para que se pueda utilizar fuera
