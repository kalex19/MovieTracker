import apiKey from './apiKey'

export const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

export const urlNowPLaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

export const urlAddNewUser = 'http://localhost:3000/api/users/new';

export const urlCheckUser = 'http://localhost:3000/api/users/';