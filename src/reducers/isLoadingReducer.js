export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADNG':
      return action.isLoading
    default:
      return state
  }
}