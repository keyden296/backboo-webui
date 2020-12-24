import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Page } from '../Page'
import { validateEmail } from './../../utils/validateEmail'
import { UserContext } from '../../context/UserContext'
import { requestHttp } from '../../services/HttpServer'

export const Login = () => {
    
    const [email, setEmail] = useState(''),
          [clave, setClave] = useState(''),
          [isValidForm, setIsValidForm] = useState(false),
          {user, setUser} = useContext(UserContext),
          history = useHistory()
                    
    useEffect(() => {
        setIsValidForm(validateEmail(email) && clave !== '')
    },[email, clave])

    const loginFormHandler = (e) => {
        e.preventDefault()
        const form = {
            email,
            password: clave
        }
        validateUser(form)
    }

    const validateUser = async (form) => {
        try {

            // const idExperience = req.params.id

            const response = await requestHttp('post', 'users/login', form)
            setUser({ isAuthenticated: true, identification: response.idUser})
            localStorage.setItem('token', response.token, response.idUser)
            setTimeout(() => {
                history.push(`/booking/`)
            }, 2000)            
        } catch (error) {
            alert('Usuario no válido')
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
                <Button label="Iniciar sesión" type="submit" disabled={!isValidForm}/><br/>
                ¿Aún no tienes cuenta?
                <Link to='/register'>Registrate</Link>
            </form>
        </Page>
    )
}