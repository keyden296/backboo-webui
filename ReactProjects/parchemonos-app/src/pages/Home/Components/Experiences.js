import React from 'react'
import {Adventure} from './Adventure'
import {EXPERIENCES_DATA} from './../../../data/ExperiencesData'

export const Experiences = () => (
    <section className="experience">
        {
            EXPERIENCES_DATA.map(adventure => <Adventure key={adventure.id} {...adventure}/>)
        }
    </section>
)