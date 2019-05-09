import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {rootReducer} from './reducers'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './Components/App/App';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
