export const getNowPlayingReducer = (state = [], action) => {
    const newState = {
        nowPlaying: action.nowPlaying
    }

    switch (action.type) {
        case "GET_NOW_PLAYING":
            return newState

        default:
            return state
    }
}