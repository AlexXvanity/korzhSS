import React from 'react'
import { render } from 'react-dom'
import App from './app'
//чтобы связать React and redux
import { Provider } from 'react-redux'; // get access to data in redux STORE
import { createStore } from 'redux';
import reducers from './reducers';	

const store = createStore (
	reducers, 
	window.__REDUX_DEVTOOLS_EXTENSION__ 
	&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.querySelector('#mount_place')
)