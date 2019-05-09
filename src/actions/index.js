export const getNowPlaying = (nowPlaying, bool) => {
    return {
        type: "GET_NOW_PLAYING",
        nowPlaying,
        isLoading: bool
    }
}

export const getPopular = (popular, bool) => {
    return {
        type: "GET_POPULAR",
        popular,
        isLoading: bool 
    }
}