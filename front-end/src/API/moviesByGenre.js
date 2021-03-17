import base_url from './baseAPI';

const api = base_url();

export default async function getMoviesByGenre(genre){
    if(genre){
        try {
            const response = await api.get(`/moviesList/${genre}`);
            if(response.status === 200){
                return ({
                    status: true,
                    data: response.data,
                });
            };
            return ({
                status: false,
                data: response.data
            });
        } catch(error){
            return({
                status: false,
                data: null
            });
        }
    }
    else{
        return({
            status: false,
            data: null
        });
    }
}

//export default getMoviesByGenre;
