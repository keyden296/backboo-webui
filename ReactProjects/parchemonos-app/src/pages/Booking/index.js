import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Page } from '../Page'

export const Booking = () => {

    const { id } = useParams()

    const [bookingDate, setBookingDate] = useState(''),
          [comments, setComments] = useState(''),
          [isValidForm, setIsValidForm] = useState(false)
    
    useEffect(() => {
        setIsValidForm(new Date(bookingDate) > new Date())
    }, [bookingDate])

    const bookingFormHandler = (e) => {
        e.preventDefault()
        const form = {
            idExperience: id,
            bookingDate,
            comments
        }
        console.log('formulario a enviar', form)
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