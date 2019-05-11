export const getNowPlaying = (nowPlaying) => {
    return {
        type: "GET_NOW_PLAYING",
        nowPlaying
    }
}

export const getPopular = (popular) => {
    return {
        type: "GET_POPULAR",
        popular
    }
}

export const isLoading = (bool) => {
    return {
        type: 'IS_LOADING',
        isLoading: bool
    }
}

export const hasErrored = (error) => {
    return {
        type: 'HAS_ERRORED',
        hasErrored: error
    }
}