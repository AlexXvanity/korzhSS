import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addToDo from './actions/addtodo';

class App extends Component {
	constructor () {
		super();
		this.addToDo = this.addToDo.bind(this);
	}
	addToDo () {
		// this.props.todoState.dispatch(addToDo);
	}
	render() {
		console.log(this.props);
		return (
				<div className = "todoApp">
					<input type = "text" placeholder = "Enter todo name"/>
					<button onClick = {this.addToDo}>add TODO</button>
				</div>
		)
	}
}

const  mapStateToProps = state => {
	return {
		todos: state
	}
  }

  const mapDispatchToProps = dispatch => {
		return {
			onTodoClick: text => {
			dispatch(addToDo(text))
	  }
		}
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);