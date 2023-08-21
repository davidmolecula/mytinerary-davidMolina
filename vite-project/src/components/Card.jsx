import React from 'react'
import '../styles/Cards.css'

const Card = ({name,image}) => {
return (
    <>
        <div className='card-container'key={name}>
            <div className='card-title'>{name}</div>
            <img src={image} alt="" />
        </div>
    </>
)

}

export default Card