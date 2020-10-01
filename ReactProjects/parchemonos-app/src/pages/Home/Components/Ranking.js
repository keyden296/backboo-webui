import React from 'react'
import {Card} from './Card'
import {EXPERIENCES_DATA} from './../../../data/ExperiencesData'

export const Ranking = () => (
    <section className="rankingContainer">
        {
            //index = iterador del arreglo
            //EXPERIENCES_DATA.map((adventure, index) => <Card key={index} {...adventure}/>)
            EXPERIENCES_DATA.map(adventure => <Card key={adventure.id} {...adventure}/>)
        }
    </section>
)