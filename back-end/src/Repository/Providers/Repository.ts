import axios from 'axios';

const url_base = axios.create({
    baseURL: "https://api.themoviedb.org"
});

const token_api: string = "0b037800c26a710b5d29102b4aa29793";

export async function GenresList(){
    try {
        const res = await url_base.get(`/3/genre/movie/list?api_key=${token_api}&language=en-US`);
        if(res.status == 200){
            const genresList = res.data;
            return({
                status: true,
                data: genresList
            });
        }
        return({
            status: false,
            message: "Cannot find the genres!"
        });
    } catch(error){
        return(error);
    };
}

export async function MoviesByGenre(genre: string){
    try {
        const res = await url_base.get(`/3/discover/movie?api_key=${token_api}&language=en-US&with_genres=${genre}`);
        if(res.status == 200){
            const moviesList = res.data;
            return({
                status: true,
                data: moviesList
            });
        }
        return({
            status: false,
            message: "Cannot find any movies!"
        });
    } catch(error){
        return(error);
    };
}
