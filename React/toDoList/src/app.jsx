import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
				<main className = "todoApp">
					<header>
						<h1>React Todo</h1>
					</header>
					<section className="todo-list">
					<div className="todo completed">
							<button className = "checkbox icon">
								<i className = "material-icons">check_box</i>
							</button>
							<span className="todo-title">
								Изучить Реакт
							</span>
							<button className = "delete icon">
								<i className = "material-icons">delete</i>
							</button>
						</div>
						<div className="todo">
							<button className = "checkbox icon">
								<i className = "material-icons">check_box_outline_blank</i>
							</button>
							<span className="todo-title">
								Изучить Реакт
							</span>
							<button className = "delete icon">
								<i className = "material-icons">delete</i>
							</button>
						</div>
					</section>
				</main>
		)
	}
}

export default App;
