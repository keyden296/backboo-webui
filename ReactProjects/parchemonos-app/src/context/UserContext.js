import React, { useState, createContext } from 'react'
import { useEffect } from 'react'

const initialState = {
    name: '',
    email: '',
    identification: '',
    phone: '',
    isAuthenticated: true
}

export const UserContext = createContext(initialState)

export const UserContextStore = (props) => {
    const [user, setUser] = useState(initialState)
    useEffect(() => {
        checkLocalToken()
    },[])
    //Comprobar el token del localstorage
    const checkLocalToken = () => {
        const token = localStorage.getItem('token')
        if (token) {
            setUser({isAuthenticated : true})
        }
    }
    return(
        <UserContext.Provider value={{user, setUser}}>
            {/*todos los componentes pueden usar la variable y su funcion modificadora de usario*/}
            { props.children }
        </UserContext.Provider>
    )
} 