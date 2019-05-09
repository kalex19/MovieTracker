export const getNowPlayingReducer = (state = [], action) => {
    const newState = {
        popular:action.nowPlaying,
        isLoading: false
    }

    switch(action.type) {
        case "GET_NOW_PLAYING":
        return  newState

        default:
        return state
    }
}