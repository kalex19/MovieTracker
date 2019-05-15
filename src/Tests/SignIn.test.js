import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {SignIn, mapStateToProps, mapDispatchToProps} from '../Components/SignIn/SignIn';
import {toggleLogIn} from '../actions/index'

describe('SignIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <SignIn /> );
  });

  it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object of isloggedin', () => {
      const mockState = {
        isLoggedIn: false
      }
      const expected = {
        isLoggedIn: mockState.isLoggedIn
      }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from MDTP', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = toggleLogIn(true);

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.toggleLogIn(true)
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})