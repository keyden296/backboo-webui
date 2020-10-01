import React from 'react'
import { MENU_OPTIONS } from './../data/menuOptions'
import { ItemMenu } from './ItemMenu'

export const NavigationWeb = () => (
    <nav className="navigationWeb">
        <div>
            <p>lorem</p>
        </div>
        <ul>
            {
                MENU_OPTIONS.map((item, key) => <ItemMenu key={key} {...item} />)
            }
        </ul>
    </nav>
)