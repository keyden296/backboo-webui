import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { Page } from '../Page'
import { validateEmail } from './../../utils/validateEmail'

export const Register = () => {

    const [documento, setdocumento] = useState(''),
          [nombreCompleto, setNombreCompleto] = useState(''),
          [telefono, setTelefono] = useState(''),
          [email, setEmail] = useState(''),
          [clave, setClave] = useState(''),
          [isValidForm, setIsValidForm] = useState(false)
    
    useEffect(() => {
        setIsValidForm(documento !== '' && nombreCompleto !== '' && telefono !== '' && validateEmail(email) && clave !== '')
    }, [documento, nombreCompleto, telefono, email, clave])


    const registerFormHandler = (e) => {
        e.preventDefault()
        const form = {
            documento,
            nombreCompleto,
            telefono,
            email,
            clave
        }
        console.log('formulario a enviar', form)
    }

    return(
        <Page>
            <h2>Register</h2>
            <form onSubmit={registerFormHandler} className="form">
                <div>
                    <label>Cédula</label>
                    <input type="text" value={documento} onChange={e => setdocumento(e.target.value)}/>
                </div>
                <div>
                    <label>Nombre completo</label>
                    <input type="text" value={nombreCompleto} onChange={e => setNombreCompleto(e.target.value)}/>
                </div>
                <div>
                    <label>Teléfono</label>
                    <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Clave</label>
                    <input type="password" value={clave} onChange={e => setClave(e.target.value)}/>
                </div>
                <Button label="Crear cuenta" type="submit" disabled={!isValidForm}/>
            </form>
        </Page>
    )
}