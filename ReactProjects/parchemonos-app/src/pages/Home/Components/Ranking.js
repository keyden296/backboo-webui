import React, { useEffect } from 'react'
import {Card} from './Card'
import { useState } from 'react'
import { requestHttp } from '../../../services/HttpServer'

export const Ranking = () => {

    const [experiences, setExperiences] = useState([])

    const loadExperiences = async () => {
        try {
            const response = await requestHttp('get', '/experiences/ranking')
            console.log('Response', response)
            setExperiences(response.ranking)
        } catch (error) {
            console.log('Error ', error)
        }
    }

    useEffect(() => {
        loadExperiences()
    }, [])

    return (
        <section className="rankingContainer">
            {
                //index = iterador del arreglo
                //EXPERIENCES_DATA.map((adventure, index) => <Card key={index} {...adventure}/>)
                experiences.map(adventure => <Card key={adventure.id} {...adventure}/>)
            }
        </section>
    )
}