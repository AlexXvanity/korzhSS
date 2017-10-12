import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats.jsx';

class Header extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
            <header>
				<Stats todos = {this.props.todos}/>
				<h1>{this.props.title}</h1>
			</header>
		)
	}
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};
export default Header;
