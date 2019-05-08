import apiKey from './apiKey'

export const fetchPop = async () => {
    const url =
			`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(url)
    if(!response.ok) {
      throw Error('Fetch Popular went wrong')
    }
    return await response.json() 
  }

  export default fetchPop;