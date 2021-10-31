import React from 'react'

const ImageThumbnailCard = ({name, breed, age, image})=>{
    const [heartChecked, setSheartChecked] = React.useState(false)
    return (
        <div class="petCard">
        <div class="petCardImage">
            <i onClick={()=>setSheartChecked(!heartChecked)} class="fas fa-heart favoriteIcon" style={{color: heartChecked ? 'pink':'white'}}></i>
            <img src={image} alt="Cat"
                className="petImage"/>
        </div>
        <div class="petCardContent">
            <h2 class="petCardTitle">
                {name} <i class="fas fa-venus genderWomanIcon"></i>
            </h2>
            <p class="petCardDescriptionAge">
               {age}
            </p>
            <p class="petCardDescriptionBreed">
                {breed}
            </p>
        </div>
    </div>
    )
}

export default ImageThumbnailCard; 