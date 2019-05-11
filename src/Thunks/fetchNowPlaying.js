import {
  isLoading,
  getNowPlaying,
  hasErrored
} from '../actions';

export const fetchNowPlaying = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const nowPlaying = data.results;
      console.log(nowPlaying)
      dispatch(isLoading(false));
      dispatch(getNowPlaying(nowPlaying));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};