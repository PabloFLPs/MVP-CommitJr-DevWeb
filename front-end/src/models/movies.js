import "./movies.css"
import React from 'react'
import movie_image from '../assets/movie_image_resize.png'

function Movies(genre) {
    return (
        <div className="container-movie">
            <div className="trailer">
                <iframe 
                    class="frame" img src={movie_image} alt="Movie Image" height={323} width={575} scrolling="no">
                </iframe>
            </div>
            <div className="movie-info">
                <div className="movie-title">
                    <strong>Movie: </strong>
                    <spam>{genre.title}</spam>
                </div>
                <div className="movie-sinopsis">
                    <strong>Sinopsis: </strong>
                    <spam>
                        [IMDb] - In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.
                    </spam>
                </div>
                <div className="movie-release-date">
                    <strong>Release Date (MM/DD/YY): </strong>
                    <spam>03/02/2017</spam>
                </div>
            </div>
        </div>
    )
}

export {Movies};
