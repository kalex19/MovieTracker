export const  toggleLogInReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_LOGIN': 
      return action.isLoggedIn
    default:
      return state
  }
}