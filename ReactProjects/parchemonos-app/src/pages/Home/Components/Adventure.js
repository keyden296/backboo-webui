import React from 'react'
import {Score} from '../../../components/Score'
import {Link} from 'react-router-dom'

export const Adventure = (props) => (
    <Link to={`/detail/${props.id}`}>
        <div className="cardAdventure">
            <img src={props.image} alt="img"></img>
            <article>
                <h3>{props.title}</h3>
                <p>{props.place}</p>
                <p>{props.price}</p>
                <Score stars={props.stars} users={props.users} size = '1em'/>
            </article>
        </div>
    </Link>
)