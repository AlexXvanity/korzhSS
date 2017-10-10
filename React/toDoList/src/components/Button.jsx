import React, { Component } from 'react';

class Button extends Component {
	render() {
		return (
            <button className = "delete icon">
				<i className = "material-icons">{this.props.icon}</i>
			</button>
		)
	}
}


export default Button;
