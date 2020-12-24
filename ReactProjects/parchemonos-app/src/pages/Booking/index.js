import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Page } from '../Page'
import { requestHttp } from '../../services/HttpServer'
import { UserContext } from '../../context/UserContext'

export const Booking = () => {

    const { id } = useParams()

    const [bookingDate, setBookingDate] = useState(''),
          [comments, setComments] = useState(''),
          [isValidForm, setIsValidForm] = useState(false),
        //   {user, setUser} = useContext(UserContext),
          history = useHistory()
    
    useEffect(() => {
        setIsValidForm(new Date(bookingDate) > new Date() && comments !== '')
    }, [bookingDate, comments])

    const bookingFormHandler = (e) => {
        e.preventDefault()
        const form = {
            //modelo     datos del frontEnd
            // idUser: user.identification,
            bookingDate: bookingDate,
            comment: comments
        }
        createBooking(form)
    }

    const createBooking = async (data) => {
        try {
            const response = await requestHttp('post', `/booking/${id}`, data)
            // const idBooking = response.Split(" ")
            // console.log(idBooking); 
            // console.log("Reserva realizada", response.booking._id);
            // alert("Reserva realizada ", response.booking._id)
            const idBooking = response.booking._id
            console.log("Reserva realizada", idBooking);
            alert("Reserva realizada ", idBooking);
            history.push(`/rate/${idBooking}`)
        } catch (Error) {
            return null 
        }
    }

    return (
        <Page>
            <h2>Booking</h2>
            <h3>Formulario de la reserva</h3>
            <form onSubmit={bookingFormHandler} className="form">
                <div>
                    <label>Fecha de la reserva <span>*</span> </label>
                    <input type="date" value={bookingDate} onChange={e => setBookingDate(e.target.value)}/>
                </div>
                <div>
                    <label>Comentarios adicionales</label>
                    <textarea name="" cols="30" rows="10" value={comments} onChange={e => setComments(e.target.value)}></textarea>
                </div>
                <Button label="Enviar reserva" type="submit" disabled={!isValidForm} />
            </form>        
        </Page>
    )
}