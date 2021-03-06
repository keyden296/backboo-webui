import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../components/Button'
import { requestHttp } from '../../services/HttpServer'
import { Page } from '../Page'
import { validateEmail } from './../../utils/validateEmail'

export const Register = () => {

    const [documento, setdocumento] = useState(''),
          [nombreCompleto, setNombreCompleto] = useState(''),
          [telefono, setTelefono] = useState(''),
          [email, setEmail] = useState(''),
          [clave, setClave] = useState(''),
          [user, setUser] = useState([]),
          [isValidForm, setIsValidForm] = useState(false),
          history = useHistory
    
    useEffect(() => {
        setIsValidForm(documento !== '' && nombreCompleto !== '' && telefono !== '' && validateEmail(email) && clave !== '')
    }, [documento, nombreCompleto, telefono, email, clave])


    const registerFormHandler = (e) => {
        e.preventDefault()
        const form = {
            document: documento,
            name: nombreCompleto,
            phone: telefono,
            email,
            password: clave
        }
        registerUser(form)
    }

    const registerUser = async (form) => {
        try {
            const response = await requestHttp('post', 'users/singup', form)
            alert('usuario registrado exitosamente')
            history.push('/login')
        } catch (error) {
            alert('Usuario existente')
        }
    }

    return(
        <Page>
            <h2>Registro</h2>
            <form onSubmit={registerFormHandler} className="form">
                <div>
                    <label>Cédula<span>*</span></label>
                    <input type="text" value={documento} onChange={e => setdocumento(e.target.value)}/>
                </div>
                <div>
                    <label>Nombre completo<span>*</span></label>
                    <input type="text" value={nombreCompleto} onChange={e => setNombreCompleto(e.target.value)}/>
                </div>
                <div>
                    <label>Teléfono<span>*</span></label>
                    <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)}/>
                </div>
                <div>
                    <label>Email<span>*</span></label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Clave<span>*</span></label>
                    <input type="password" value={clave} onChange={e => setClave(e.target.value)}/>
                </div>
                <Button label="Crear cuenta" type="submit" disabled={!isValidForm}/>
            </form>
        </Page>
    )
}