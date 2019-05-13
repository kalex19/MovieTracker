import * as actions from '../actions/index'

describe('actions', () => {
  it('should return a type of GET_NOW_PLAYING, with a getNowPlaying array', () => {
    const nowPlaying = [{
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

    const expected = {
      type: 'GET_NOW_PLAYING',
      nowPlaying

    }

    const result = actions.getNowPlaying(nowPlaying)

    expect(result).toEqual(expected)
  })

  it('should return a type of GET_POPULAR with a popular movies array', () => {
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

      const expected = {
        type: 'GET_POPULAR',
        popular
  
      }

      const result = actions.getPopular(popular)

      expect(result).toEqual(expected)

  })

  it('should return a type of IS_LOADING with a boolean', () => {
    const bool = true;
    const expected = {
      type:'IS_LOADING',
      isLoading: bool
    }

    const result = actions.isLoading(bool)

    expect(result).toEqual(expected)
  })

  it('should return a type of HAS_ERRORED with an error message', () => {
    const error = 'Something went wrong';
    const expected = {
      type:'HAS_ERRORED',
      hasErrored: error
    }

    const result = actions.hasErrored(error)

    expect(result).toEqual(expected)
  })
})