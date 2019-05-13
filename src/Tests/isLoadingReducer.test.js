import {isLoadingReducer, hasErroredReducer} from '../reducers/isLoadingReducer'
import * as actions from '../actions/index'

describe('isLoading Reducer', () => {
  it('should return the initial state', () => {
    const expected = true; 
    const results = isLoadingReducer(undefined, true);

    expect(results).toEqual(expected)
  })

  it('should return the state with a new boolean', () => {
    const expected = false

    const results = isLoadingReducer(true, actions.isLoading(false))

    expect(results).toEqual(expected)
  })
})

describe('hasErrored Reducer', () => {
  it('should return the intial state', () => {
    const expected = '';

    const results = hasErroredReducer(undefined, '')

    expect(results).toEqual(expected)
  })

  it('should return the state with a new error', () => {
    const expected = 'something went wrong';

    const results = hasErroredReducer(undefined, actions.hasErrored('something went wrong'))

    expect(results).toEqual(expected)
  })
})