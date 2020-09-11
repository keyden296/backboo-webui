import React from 'react'
import {Topbar} from '../components/Topbar'
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

export const Page = (props) => (
    <>
        <NavigationWeb />
        <section className="mainPage">
            <Topbar />
            <Navigation />
            <div className="page">
                {props.children}
            </div>
        </section>
    </>
)