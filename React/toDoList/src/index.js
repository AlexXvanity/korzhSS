import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'
import './assets/styles/style.scss';

render(
	<App title = "React todo" />,
	document.querySelector('#root')
)