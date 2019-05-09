import {combineReducers} from 'redux'
import {getPopularReducer} from './getPopularReducer';
import {getNowPlayingReducer} from './getNowPlayingReducer'

export const rootReducer = combineReducers({
    nowPlaying: getNowPlayingReducer,
    popular: getPopularReducer
})