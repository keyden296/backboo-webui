//hooks = funciones utilitarias
import React, { useEffect, useState, useContext } from 'react'
import { Page } from '../Page'
import { Header } from './../../components/Header'
import { CardDetail } from './Components/CardDetail'
import { useParams, useHistory } from 'react-router-dom'
// import { EXPERIENCES_DATA } from './../../data/ExperiencesData'
import { Button } from '../../components/Button'
import { UserContext } from '../../context/UserContext'
import { requestHttp } from '../../services/HttpServer'

export const Detail = () => {
    //capturar id de la URL
    const { id } = useParams()

    // 1° variable, 2° como modificar el valor [null, false, {}]
    const [adventure, setAdventure] = useState([])

    const { user } = useContext(UserContext)

    const history = useHistory()

    const loadExperience = async () => {
        try {
            const response = await requestHttp('get', `experiences/detail/${id}`)
            console.log('Response', response);
            setAdventure(response.experience)
        } catch (error) {
            console.log('Error', error);
        }
    }

    //constructor || component did mount
    useEffect(() => {
        loadExperience()
    },[id])

    const goToBookingHandler = () => {
        // if (user.isAuthenticated) {
        //     history.push(`/booking/${id}`)
        // } else {
        //     history.push(`/login/${id}`)
        // }
        history.push(`/booking/${id}`)
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