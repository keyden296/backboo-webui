import React from 'react'
import {Score} from '../../../components/Score'

export const CardDetail  = (props) => {
    return (
        <article className="cardDetail">
            <img src={props.image} alt="logo experience"/>
            <div>
                <p>{props.description}</p>
                <h3>COP <small>{props.price}</small></h3>
                <Score stars={props.stars} users={props.users} size = '1.5em' />
            </div>
        </article>
    )
}