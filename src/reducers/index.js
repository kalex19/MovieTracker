import { combineReducers } from 'redux';
import { getPopularReducer } from './getPopularReducer';
import { getNowPlayingReducer } from './getNowPlayingReducer';
import { isLoadingReducer } from './isLoadingReducer';

export const rootReducer = combineReducers({
	nowPlaying: getNowPlayingReducer,
	popular: getPopularReducer,
	isLoading: isLoadingReducer
});
