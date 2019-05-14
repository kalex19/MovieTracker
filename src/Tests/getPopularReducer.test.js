import {getPopularReducer} from '../reducers/getPopularReducer'
import * as actions from '../actions/index'

describe('getPopular Reducers', () => {
  it('should return the initial state', () => {

    const expected = [];

    const results = getPopularReducer(undefined, {})

    expect(results).toEqual(expected)
  })

  it('should return the state with a new popular array', () => {
    const popular = [{
      vote_count: 4845,
      id: 299534,
      title: "Avengers: Endgame",
      poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      original_title: "Avengers: Endgame"},
       { 
        vote_count: 345254,
        id: 2345234523,
        title: "SomeOther Avengers Movie",
        poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        original_title: "Avengers: Infinity War"
      }]
      
      const expected = {popular}

      const results = getPopularReducer(undefined, actions.getPopular(popular))

      expect(results).toEqual(expected)
  
  })
})