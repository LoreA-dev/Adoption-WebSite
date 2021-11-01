import React from 'react'

const ImageThumbnailCard = ({name, breed, age, image})=>{
    const [heartChecked, setSheartChecked] = React.useState(false)
    return (
        <div className="petCard">
        <div className="petCardImage">
            <i onClick={()=>setSheartChecked(!heartChecked)} className="fas fa-heart favoriteIcon" style={{color: heartChecked ? '#f5588a':'white'}}></i>
            <img src={image} alt="Cat"
                className="petImage"/>
        </div>
        <div className="petCardContent">
            <h2 className="petCardTitle">
                {name} <i className="fas fa-venus genderWomanIcon"></i>
            </h2>
            <p className="petCardDescriptionAge">
               {age}
            </p>
            <p className="petCardDescriptionBreed">
                {breed}
            </p>
        </div>
    </div>
    )
}

export default ImageThumbnailCard; 