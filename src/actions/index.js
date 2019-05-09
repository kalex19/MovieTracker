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