import apiKey from './apiKey'

export const fetchPop = async () => {
  const url =
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  const response = await fetch(url)
  if (!response.ok) {
    throw Error('Fetch Popular went wrong')
  }
  return await response.json()
}

export default fetchPop;

// import {
//   hasErrored
// } from '../actions';

// export const fetchBios = (staffArray) => {
//   return (dispatch) => {
//     const unresolvedPromises = staffArrya.map(async staffMember => {
//       try {
//         if (!response.ok) {
//           throw Error(response.statusText)
//         }
//         const data = await response.json()
//         return {
//           ...data,
//           name: staffMember.name
//         }
//       } catch (error) {
//         dispatch(hasErrored(error.message))
//       }
//     })
//     return Promise.all(unresolvedPromises)
//   }
// }