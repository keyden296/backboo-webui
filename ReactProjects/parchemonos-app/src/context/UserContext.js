import React, { useState, createContext } from 'react'

const initialState = {
    name: '',
    email: '',
    identification: '',
    phone: '',
    isAuthenticated: false
}

export const UserContext = createContext(initialState)

export const UserContextStore = (props) => {
    const [user, setUser] = useState(initialState)
    return(
        <UserContextStore.Provider value={{user, setUser}}>
            {/*todos los componentes pueden usar la variable y su funcion modificadora de usario*/}
            { props.children }
        </UserContextStore.Provider>
    )
} 