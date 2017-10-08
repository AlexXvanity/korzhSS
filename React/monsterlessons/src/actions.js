import faker from 'faker'

//actions
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const addToDo = {
	type: ADD_TODO,
	text: 'Build my first Redux app'
};

const toggleToDo = {
	type: ADD_TODO,
	index: 5
};

const setVisibilityFilter = {
	type: SET_VISIBILITY_FILTER,
	index: 'SHOW_COMPLETED'
};
