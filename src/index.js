import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {creatStore} from 'redux'
import {rootReducer} from './reducers'
import {Provider} from 'react-redux'
import App from './Components/App/App';

const store = creatStore(rootReducer);

const router = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
