// import {
//   fetchStaff
// } from './fetchStaff';
// import {
//   fetchBios
// } from './fetchBios';
// import {
//   isLoading,
//   hasErrored,
//   setStaff
// } from '../actions';

// jest.fn('./fetchBios.js')

// describe('fetchStaff', () => {
//       let mockUrl;
//       let mockStaff;
//       let mockDispatch;

//       beforeEach(() => {
//         mockUrl = 'someurl.com'
//         mockStaff = [{
//           name: 'Christie',
//           info: 'some info'
//         } {
//           name: 'Leta',
//           info: 'some info'
//         }]
//         mockDispatch = jest.fn()
//         window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//           ok: true,
//           json: () => Promise.resolve({
//             bio: mockStaff
//           })
//         }))
//       })
//       it('calls dispatch with isLoading(true)', () => {
//         const thunk = fetchStaff(mockUrl)
//         thunk(mockDispatch)
//         expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
//       })
//       it('fetch gets called with correct params', () => {
//         thunk(mockDispatch)
//         expect(window.fetch).toHaveBeenCalledWith(mockUrl)
//       })
//       it('should dispatch hasError with a message if the response is not ok', async () => {
//         window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//           ok: false,
//           statusText: 'something went wrong'
//         }))
//         await thunk(mockDispatch)
//         expect(mockDispatch).toHaveBeenCalledWith(hasErrored('something went wrong'))
//       })
//       it('should dispatch fetchBios with correct params if the response is ok', async () => {
//           expect(mockDispatch.toHaveBeenCalledWith(fetchBio(mockStaff))
//           })

//         it('should dispatch isLoading (false) if response is ok', async () => {
//           await thunk(mockDispatch)
//           expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
//         })

//         it('should dispatch setStaff', async () => {
//           mockDispatch = jest.fn().mockImplementation(() => mockStaff)
//           await thunk(mockDispatch)
//           expect(mockDispatch).toHaveBeenCalledWith(setStaff(mockStaff))
//         })
//       }