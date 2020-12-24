import React from 'react'
import {Adventure} from './Adventure'
import { requestHttp } from '../../../services/HttpServer'
import { useState } from 'react'
import { useEffect } from 'react'

export const Experiences = () => {

    const [experiences, setExperiences] = useState([]) 

    const loadExperiences = async () => {
        try {
            const response = await requestHttp('get', 'experiences')
            console.log('Response', response)
            setExperiences(response.list)
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        loadExperiences()
    },[])

    return (
        <section className="experience">
            {
                experiences.map(adventure => <Adventure key={adventure.id} {...adventure}/>)
            }
        </section>
    )
}