import {useState} from 'react'
import {Movies} from "../../models/movies.js"
import Button from '@material-ui/core/Button';
import "./releases.css"

import React from 'react'
import movie_image from '../../assets/movie_image2_resize.png'

export default function Releases() {
    const [slide, setSlide] = useState(<Movies title="Logan"></Movies>);

    function altState() {
        setSlide(<Movies title="Harry Potter and The goblet of Fire">
            <div className="container-movie">
                <div className="trailer">
                    <iframe 
                        class="frame" img src={movie_image} alt="Movie Image" height={323} width={575} scrolling="no">
                    </iframe>
                </div>
                <div className="movie-info">
                    <div className="movie-title">
                        <strong>Movie: </strong>
                        <spam>{"Harry Potter and The goblet of Fire"}</spam>
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
        </Movies>);
    }

    return (
        <section className="releases-section">
            <section className="releases-title">
                <center>
                    <strong>Recent Releases and Upcoming Titles</strong>
                </center>
            </section>
            <br/>
            <section className="releases-content">
                <center>
                    <Button variant="contained" color="secondary" onClick={altState}>Next</Button>
                </center>
                        {slide}
                    <moviesList movies={Movies}/>
            </section>
        </section>
    )
}
