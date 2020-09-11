import React from 'react'
import {Search} from './Components/Search'
import {Header} from './../../components/Header'
import {Ranking} from './Components/Ranking'
import {Experiences} from './Components/Experiences'
import { Page } from '../Page'

const headeStyle = {
    fontWeight: '900',
    color: '#222',
    fontSize: '1.4em',
    margin: '10px 0'
}

export const Home = () => (
    <Page>
        <Search/>
        <Header styles={headeStyle} title="Top de Aventuras"/>
        <Ranking />
        <Header styles={headeStyle} title="Lista de Aventuras"/>
        <Experiences />
    </Page>
)