import {GenresList} from '../Repository/Providers/Repository';

export default class Genres {
    ShowGenre(genreData: any){
        /*return genreData.json({
            "id": genreData.id,
            "name": genreData.name
        });*/
        let arrayData: object[] = [];
    for(let i = 0; i < genreData.data['genres'].length; i++){
        arrayData.push({id: genreData.data['genres'][i].id,
        name: genreData.data['genres'][i].name});
    };
    return arrayData
    }

    async ShowGenresList(){
        try {
            const response: any = await GenresList();
            if(response.status == true){
                /*let arrayData: any[] = [];
                response.data.genres.forEach((genres: any) => {
                    arrayData.push(this.ShowGenre(genres));
                });
                return arrayData;*/
                return this.ShowGenre(response);
            }
            return({
                message: "Cannot find any genre!"
            });
        } catch(error){
            return(error);
        };
    }
}
