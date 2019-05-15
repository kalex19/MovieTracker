export const getNowPlayingReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_NOW_PLAYING":
            return action.nowPlaying

        default:
            return state
    }
}