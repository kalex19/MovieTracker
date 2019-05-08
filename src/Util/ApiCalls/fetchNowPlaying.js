import apiKey from './apiKey'

export const fetchNowPlaying = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(url)
    if(!response.ok) {
        throw Error('Fetch Now Playing went wrong')
    }
    return await response.json()
}

export default fetchNowPlaying;