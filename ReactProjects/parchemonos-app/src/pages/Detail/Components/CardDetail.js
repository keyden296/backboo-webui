import React from 'react'
import {Score} from '../../../components/Score'



export const CardDetail = () => (
    <article className="cardDetail">
        <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg" />
        <div>
            <p>Descripcion...</p>
            <h3>COP <small>30.000</small></h3>
            <Score stars={2} users={99} size = '1.5em' />
        </div>
    </article>
)