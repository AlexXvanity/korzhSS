import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'
import './assets/styles/style.scss';
import todos from './todos';

render(
	<App title = "React todo" initialData = {todos}/>,
	document.querySelector('#root')
)