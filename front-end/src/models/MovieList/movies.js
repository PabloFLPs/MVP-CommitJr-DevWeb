import React from 'react';
import MovieCard from '../MovieCard/card.js';

export default function MovieList(genre){
    const movieListStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const url_base = "https://image.tmdb.org/t/p/w200";

    return (
        <div className="movie-list" style={movieListStyle}>
            {genre.movies.map((movie) => (
                <MovieCard img={url_base + movie.poster_path} alt={movie.title}/>
            ))}
        </div>
    );
}
