import {Request, Response} from 'express';
import Genres from '../Domain/Genres';
import Movies from '../Domain/Movies';

export class ControllerGenres {
    async getGenres(req: Request, res: Response){
        try {
            const genres = new Genres();
            const genresList = await genres.ShowGenresList();
            if(genresList == null){
                return genresList.send({
                    message: "Genres list is empty."
                });
            }
            return res.json(genresList);
        } catch(error){
            return(error);
        };
    }
}

export class ControllerMovies {
    async getMoviesByGenres(req: Request, res: Response){
        try {
            const movies = new Movies();
            const genre = req.params.genre;
            const moviesList = await movies.ShowMoviesList(genre);
            //const moviesList = null
            if(Number.isInteger(parseInt(genre))){
                if(moviesList == null){
                    return res.send({
                        message: "Movies list is empty."
                    });
                }
                return res.json(moviesList);
            }
            return res.send({
                param: "Invalid parameter."
            });
        } catch(error){
            return(error);
        };
    }
}
