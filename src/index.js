import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './Components/App/App';
import thunk from 'redux-thunk';
import './index.scss'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const router = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(router, document.getElementById('root'));
