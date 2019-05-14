import {toggleLogInReducer} from '../reducers/toggleLogInReducer';
import * as actions from '../actions/index'

describe('ToggleLogin', () => {
  it('should return the initial state ', () => {
    const expected = false; 
    const results = toggleLogInReducer(undefined, false)

    expect(results).toEqual(expected)
  })

  it('should return the state with a new boolean', () => {
    const expected = false;

    const results = toggleLogInReducer(true, actions.toggleLogIn(false))

    expect(results).toEqual(expected)
  })
})
