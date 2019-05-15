import {isLoading, getNowPlaying, hasErrored, getPopular} from '../actions';
import {fetchPopular} from './fetchPopular' 
import {urlPopular} from '../Util/ApiCalls/urls'
import {fetchNowPlayingCleaner} from '../Util/Cleaners/fetchNowPlayingCleaner';

export const fetchNowPlaying = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const nowPlayingList = data.results;
      const nowPlaying = await fetchNowPlayingCleaner(nowPlayingList);
      const popular = await dispatch(fetchPopular(urlPopular))
      dispatch(getNowPlaying(nowPlaying));
      dispatch(getPopular(popular))
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};