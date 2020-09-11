import React from 'react'
import {Adventure} from './Adventure'

const Adventures = [
    {
        image: 'https://photo620x400.mnstatic.com/0099d4572377f03e5012fa09a916caf8/santorini.jpg',
        title: 'Santorini',
        price: '5´000.000'
    },
    {
        image: 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/11/14/Recortada/img_mbigas_20180615-114016_imagenes_lv_terceros_alaska_4_6_3815478114-kcgD-U471602551375LEE-992x558@LaVanguardia-Web.jpg',
        title: 'Alaska',
        price: '2´070.000'
    },
    {
        image: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/640/360/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1594059760419',
        title: 'Disneyland',
        price: '7´850.000'
    }
]

export const Experiences = () => (
    <section className="experience">
        {
            Adventures.map(adventure => <Adventure {...adventure}/>)
        }
    </section>
)