export const getPopularReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_POPULAR":
            return action.popular
        default:
            return state
    }
}