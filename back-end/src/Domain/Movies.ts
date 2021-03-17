import {MoviesByGenre} from "../Repository/Providers/Repository";

export default class MoviesList {
    async ShowMovie(movieData: any){
        /*return({
            "title": movieData.title,
            "overview": movieData.overview,
            "popularity": movieData.popularity,
            "votes": movieData.votes,
            "poster_path": movieData.poster_path,
            "backdrop_path": movieData.backdrop_path
        });*/
        let arrayData: object[] = [];
        for(let i = 0; i < movieData.data['results'].length; i++){
            arrayData.push({title: `${movieData.data['results'][i].title}`,
            backdrop_path: `${movieData.data['results'][i].backdrop_path}`,
            overview: `${movieData.data['results'][i].overview}`,
            popularity: `${movieData.data['results'][i].popularity}`,
            poster_path: `${movieData.data['results'][i].poster_path}`,
            vote_count: `${movieData.data['results'][i].vote_count}`});
        };
        return arrayData;
    }

    async ShowMoviesList(genre: string){
        try {
            const response: any = await MoviesByGenre(genre);
            if(response.status == true){
                /*let arrayData: any[] = [];
                response.data.results.forEach((results: any) => {
                    arrayData.push(this.ShowMoviesList(results));
                });
                return response.data.results.map(this.ShowMoviesList(response.data.results))
                arrayData.push(23);
                return response.data.results;
                return arrayData
                return (this.ShowMoviesList(response.data.results))*/
                return this.ShowMovie(response);
            }
            return({
                message: "Cannot find any movie!"
            });
        } catch(error){
            return(error);
        };
    }
}
