import React, {useState, useEffect, useCallback} from 'react';
import MovieList from '../../models/MovieList/movies.js'
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './highlights.css'

import getGenres from '../../API/genresList';
import getMoviesByGenre from '../../API/moviesByGenre';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
}));

export default async function Highlights(){
    const classes = useStyles();

    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState(0);
    const [movies, setMovies] = useState([]);

    async function getSelfGenres(){
        const genresList = await getGenres();
        const genres = genresList.status ? genresList.data : [{}];
        setGenres(genres);
        setGenres(genres[0].id);
    };

    async function getMovies(){
        const moviesList = await getMoviesByGenre(genre);
        const movies = moviesList.status ? moviesList.data : [{}];
        movies.splice(5, (movies.length - 1));
        setMovies(movies);
    }

    useEffect(() => { 
        getSelfGenres();
    }, []);

    useEffect(() => { 
        getMovies();
    }, [genre]);

    const [open, setOpen] = useState(false);
    
    const handleSetGenre = (event) => {
        setGenre(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    useEffect(() => {
        async function getMovies(){
            const moviesList = await getMoviesByGenre(genre);
            const moviesData = moviesList.status ? moviesList.data : [{}];
            moviesData.splice(5, 100);
            setMovies(moviesData);
        }
        getMovies();
    }, [genre]);

    return(
        <section id="highlights" className="highlights">
            <h1 className="section-title">Highlights</h1>
            <div className="select-genre">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Genre</InputLabel>
                    <Select
                        labelid="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={genre}
                        onChange={handleSetGenre}
                    >
                        {genres.map((genre) => {
                            <MenuItem value={genre.id}>
                                {genre.name}
                            </MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>
            <MovieList movies={movies}/>
        </section>
    )
}
