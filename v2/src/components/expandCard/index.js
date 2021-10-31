import React from 'react'

const ExpandCard = (props) => {
    const {
        title, 
        icon, 
        text, 
    } = props

    return ( 
        <div className="requirement">
            <div className="textRequierementContainer">
            <i className={icon}></i>
            <p id="textInsideRequirements">{title}</p>
            </div>
            <div className="textFullRequirements">
            <p>
                {text}
            </p>
            </div>
        </div>
    )
}

export default ExpandCard; 