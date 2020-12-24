import React from 'react'
import {Link} from 'react-router-dom'

export const Card = (props) => (
    <Link to={`/detail/${props._id}`}>
        <div style={{backgroundImage: `url('${props.image}')`}} className="cardContainer">
            <h5>{props.title}</h5>
            <p>{props.place}</p>
        </div>
    </Link>
)