
export const getPopularReducer = (state = [], action) => {
    const newState = {
        popular:action.popular,
        isLoading: false
    }

    switch(action.type) {
        case "GET_POPULAR":
        return newState

        default:
        return state
    }
}