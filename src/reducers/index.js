import { combineReducers } from 'redux';
import { getPopularReducer } from './getPopularReducer';
import { getNowPlayingReducer } from './getNowPlayingReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { toggleLogInReducer } from './toggleLogInReducer'

export const rootReducer = combineReducers({
	nowPlaying: getNowPlayingReducer,
	popular: getPopularReducer,
	isLoading: isLoadingReducer,
	isLoggedIn: toggleLogInReducer
});
