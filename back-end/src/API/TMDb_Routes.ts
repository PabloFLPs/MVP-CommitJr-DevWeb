import {Router} from 'express';
import axios from 'axios';
import {ControllerGenres, ControllerMovies} from '../API/TMDb_Controller';

const router = Router();

const genresList = new ControllerGenres();
const moviesList = new ControllerMovies();

router.get("/routeTest", (request: any, response: any) => {
	return response.json({
		message: "Its Working!"
	});
});

router.get("/genresList", genresList.getGenres);
router.get("/moviesList/:genre", moviesList.getMoviesByGenres);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const url = axios.create({baseURL: "https://api.themoviedb.org"});
async function test(request: any, response: any) {
  return response.json((await url.get("/3/movie/upcoming?api_key=0b037800c26a710b5d29102b4aa29793&language=en-US&page=1")).data);
}
router.get("/upcomingMovies", test);

export default router;
