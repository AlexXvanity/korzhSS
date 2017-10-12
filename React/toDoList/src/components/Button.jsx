import React, { Component } from 'react';

class Button extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
            <button className = {this.props.className} onClick = {this.props.onClick}>
				{
					this.props.icon ? <i className = "material-icons">{this.props.icon}</i> : this.props.children
				} 
			</button>
		);
	}
}


export default Button;
