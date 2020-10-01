import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Page } from '../Page'
import { validateEmail } from './../../utils/validateEmail'
import { UserContext } from '../../context/UserContext'

export const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState(''),
          [clave, setClave] = useState(''),
          [isValidForm, setIsValidForm] = useState(false),
          [user, setUser] = useContext(UserContext)
                    
    useEffect(() => {
        setIsValidForm(validateEmail(email) && clave !== '')
    },[email, clave])

    const loginFormHandler = (e) => {
        e.preventDefault()
        // const form = {
        //     email,
        //     clave
        // }
        validateUser()
        // console.log('formulario a enviar', form)
    }

    const validateUser = () => {
        const emailUser = email,
              passUser = clave
              //pepito@gmail.com y 123456, redirigir a Home
        if (email == 'pepito@gmail.com' && clave === '123456') {
            user.isAuthenticated = true
            history.push(`/booking/${user.identification}`)
        } else {
            alert('Error')
        }
    }

    return (
        <Page>
            <h2>Login</h2>
            <form onSubmit={loginFormHandler} className="form">
                <div>
                    <label>Email <span>*</span></label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Clave <span>*</span></label>
                    <input type="password" value={clave} onChange={e => setClave(e.target.value)} />
                </div>
                <Button label="Iniciar sesión" type="submit" disabled={!isValidForm}/>
            </form>
        </Page>
    )
}