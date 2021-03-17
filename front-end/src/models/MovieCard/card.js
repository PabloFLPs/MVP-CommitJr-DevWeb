import React from 'react';
import './card.css'

export default function Card(genre){
    const imgStyle ={
        width: '279px',
        height: '418px',
        cursor: 'pointer'
    }

    return(
        <div className="movie-card">
            <img style={imgStyle} src={genre.img} alt={genre.alt}/>
        </div>
    )
}