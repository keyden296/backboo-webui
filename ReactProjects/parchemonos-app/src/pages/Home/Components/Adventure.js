import React from 'react'
import {Score} from '../../../components/Score'

export const Adventure = (props) => (
    <div className="cardAdventure">
        <img src={props.image}></img>
        <article>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <Score size = '1em'/>
        </article>
    </div>
)