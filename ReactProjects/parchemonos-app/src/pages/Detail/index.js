//hooks = funciones utilitarias
import React, { useEffect, useState, useContext } from 'react'
import { Page } from '../Page'
import { Header } from './../../components/Header'
import { CardDetail } from './Components/CardDetail'
import { useParams, useHistory } from 'react-router-dom'
import { EXPERIENCES_DATA } from './../../data/ExperiencesData'
import { Button } from '../../components/Button'
import { UserContext } from '../../context/UserContext'

export const Detail = () => {
    //capturar id de la URL
    const { id } = useParams()

    // 1° variable, 2° como modificar el valor [null, false, {}]
    const [adventure, setAdventure] = useState(null)

    const { user } = useContext(UserContext)

    const history = useHistory()

    //constructor || component did mount
    useEffect(() => {
        const experience = EXPERIENCES_DATA.find(exp => exp.id === Number(id))
        //asignar valor a la variable
        if (experience) setAdventure(experience)
    }, /*ejecutar una sola vez*/[])

    const goToBookingHandler = () => {
        if (user.isAuthenticated) {
            history.push(`/booking/${id}`)
        } else {
            history.push(`/login`)
        }
    }

    //retorna el jsx
    return (
        <Page>
            {
                adventure !== null 
                ? 
                <>
                    <Header title={adventure.title}/>
                    <CardDetail {...adventure}/>
                    <Button onPress={goToBookingHandler} label="¡Reserva tu Parche!" />
                    {/* <Button label="¡Reserva tu Parche!"/> */}
                    {user.name}
                </>
                : 
                'Experiencia no encontrada'
            }
            
        </Page>
    )
}