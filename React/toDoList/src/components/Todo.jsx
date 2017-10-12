import React, { Component } from 'react';
import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';
import PropTypes from 'prop-types';

class Todo extends Component {
	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange () {
		this.props.onStatusChange(this.props.id);
	}
	render() {
		return (
            <div className = {`todo ${this.props.completed ? 'completed': ''}`}>
				<Checkbox checked = {this.props.completed} onChange = {this.handleChange}/>
				<span className="todo-title">{this.props.title}</span>
				<Button icon = "delete" onClick = {() => this.props.onDelete(this.props.id)}/>
			</div>
		)
	}
}

Todo.PropTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onStatusChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default Todo;
