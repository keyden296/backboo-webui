import React from 'react'
import { Link } from 'react-router-dom'

export const ItemMenu = (props) => (
    <Link to={props.path}>
        <li>
            <ion-icon name={props.icon}></ion-icon>
            <span>{props.title}</span>
            <ion-icon name="arrow-forward"></ion-icon>      
        </li>
    </Link>
)