import base_url from './baseAPI';

const api = base_url();

export default async function getGenres(){
    try {
        const response = await api.get('/genresList');
        //const response = await api.get('/3/genre/movie/list?api_key=0b037800c26a710b5d29102b4aa29793&language=en-US');
            if(response.status === 200){
                return ({
                    status: true,
                    data: response.data
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

//export default getGenres;
