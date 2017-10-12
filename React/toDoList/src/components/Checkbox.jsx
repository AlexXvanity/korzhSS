import React, { Component } from 'react';

class Checkbox extends Component {
	render() {
		return (
            <button className = "checkbox icon" onClick = {this.props.onChange}>
				<i className = "material-icons">{this.props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
			</button>
		)
	}
}


export default Checkbox;
