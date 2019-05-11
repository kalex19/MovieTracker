export const getPopularReducer = (state = [], action) => {
    const newState = {
        popular: action.popular
    }

    switch (action.type) {
        case "GET_POPULAR":
            return newState
        default:
            return state
    }
}