import React, { useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
// import { Score } from '../../components/Score'
import { Button } from '../../components/Button'
import { requestHttp } from '../../services/HttpServer'
import { Page } from '../Page'

export const Rate = () => {

    const { id } = useParams(),
        //   [stars, setStars] = useState(0),
          [score, setScore] = useState(''),
          [rateComment, setRateComment] = useState(''),
          [isValidForm, setIsValidForm] = useState(false),
          history = useHistory()
        //   size = "42px"

    // const StarFilled = ({size, idStar}) => (
    //     <ion-icon onClick={() => {setStars(idStar)}} style={{fontSize: size}} name="star"></ion-icon>
    // )
    
    // const StarEmpty = ({size, idStar}) => (
    //     <ion-icon onClick={() => {setStars(idStar)}} style={{fontSize: size}} name="star-outline"></ion-icon>
    // )

    useEffect(()=> {
        setIsValidForm(score > 0 && score <= 5 && rateComment !== '')
    },[score, rateComment])

    const rateFormHandler = (e) => {
        e.preventDefault()
        const form = {
            //modelo     datos del frontEnd
            // idStar,
            score,
            rateComment
        }
        createRate(form)
    }

    const createRate = async (data) => {
        try {
            console.log(id, data)
            const res = await requestHttp('post', `/booking/rate/${id}`, data)
            console.log(res);
            alert("Gracias por votar", res)
            // history.push('/home')
        } catch (error) {
            return null
        }
    }
    
    return (
        <Page>
            <h1>Calificar experencia(s)</h1><br/>
            {/* <section className="score">
                <div>
                    {
                        [1,2,3,4,5].map((star, key) => star <= stars ? <StarFilled key={key} size={size} idStar={star} /> : <StarEmpty key={key} size={size} idStar={star} />)
                    }
                </div>
            </section> */}
            <form className="form" onSubmit={rateFormHandler}>   
                <div>
                    <label>Calificación</label>
                    <input type="number" value={score} onChange={e => setScore(e.target.value)}/>
                </div>         
                <div>
                    <label>Comentarios adicionales</label>
                    <textarea name="" cols="30" rows="10" value={rateComment} onChange={e => setRateComment(e.target.value)}></textarea>                    
                </div>
                <Button label="Calificar" type="submit" disabled={!isValidForm}></Button>
            </form>
        </Page>
    )

}