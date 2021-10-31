import React from 'react'

const ExpandCard = (props) => {
    const {
        title, 
        icon, 
        text, 
    } = props

    return ( 
        <div class="requirement">
            <div class="textRequierementContainer">
            <i class={icon}></i>
            <p id="textInsideRequirements">{title}</p>
            </div>
            <div class="textFullRequirements">
            <p>
                {text}
            </p>
            </div>
        </div>
    )
}

export default ExpandCard; 