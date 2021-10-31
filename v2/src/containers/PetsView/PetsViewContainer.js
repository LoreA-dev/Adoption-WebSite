import React from 'react'
import ThumbnailCard from './../../components/ImageCard'
import { petsView } from '../../constants'
import './pets.css'
const PetsContainerView = ()=>{
    return ( 
        <main>
        <div id="mainContainer">
            <div id="petsContainer">
                <div id="petsCardContainer">
                    {petsView.pets.map(item=><ThumbnailCard {...item}/>)}
                </div>
            </div>
        </div>
    </main>
    )
}

export default PetsContainerView; 