import axios from 'axios';

//Importing axios; responsible for the URL which we make requests from the back-end.
const base_url = axios.create({
    baseURL: 'http://localhost:3333'
    //baseURL: 'https://api.themoviedb.org'
})

//https://api.themoviedb.org/3/genre/movie/list?api_key=0b037800c26a710b5d29102b4aa29793&language=en-US

export default base_url;
