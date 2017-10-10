import React, { Component } from 'react';
import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';
import PropTypes from 'prop-types';

class Todo extends Component {
	render() {
		return (
            <div className="todo">
				<Checkbox checked = {this.props.completed}/>
				<span className="todo-title">{this.props.title}</span>
				<Button icon = "delete"/>
			</div>
		)
	}
}

Todo.PropTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
};

export default Todo;
