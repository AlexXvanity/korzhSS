import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Todo from './components/Todo.jsx';
import Form from './components/Form.jsx';
import PropTypes from 'prop-types';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {todos: this.props.initialData};
		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleOnDelete = this.handleOnDelete.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleStatusChange (id) {
		const currentTodos = this.state.todos.map((todo)=> {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			} 
			return todo;
		});
		this.setState({todos: currentTodos});
	}

	handleOnDelete (id) {
		const currentTodos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({todos: currentTodos});
	}

	handleAdd (title) {
		console.log(title);
		let todo = {
			id: this.nextId(),
			title: title,
			completed: false
		};

		let currentTodos = [...this.state.todos, todo];
		
		this.setState({todos: currentTodos});
	} 

	nextId () {
		this._nextId = this._nextId || 4;

		return this._nextId++;
	}

	render() {
		console.log(this.props);
		return (
				<main className = "todoApp">
					<Header title = {this.props.title} todos = {this.state.todos}/>
					<section className="todo-list">
						{this.state.todos.map((todo) => {
							return <Todo 
										title = {todo.title} 
										id = {todo.id}
										completed = {todo.completed}
										key = {todo.id}
										onStatusChange = {this.handleStatusChange}
										onDelete = {this.handleOnDelete} />;
						})}
					</section>
					<Form onAdd= {this.handleAdd}/>
				</main>
		)
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	initialData: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})).isRequired
};

export default App;
