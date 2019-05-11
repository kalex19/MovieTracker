export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADNG':
      return action.isLoading
    default:
      return state
  }
}

export const hasErroredReducer = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.error
    default:
      return state
  }
}