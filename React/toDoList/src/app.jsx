import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Todo from './components/Todo.jsx';
import PropTypes from 'prop-types';

class App extends Component {
	render() {
		return (
				<main className = "todoApp">
					<Header title = {this.props.title}/>
					<section className="todo-list">
						<Todo title = {'Изучить javaScript'} completed = {true}/>
						<Todo title = {'Изучить React'} completed = {false}/>
					</section>
				</main>
		)
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired
};

export default App;
