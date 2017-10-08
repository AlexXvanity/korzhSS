const todos = (state = [], action) => {
    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            {
                id:action.id,
                text: action.text,
                completed: false
            }
        ];
    } else if (action.type === 'TOGGLE_TODO') {
        return state.map((todo) => {
            if (todo.id !== action.id) {
                return todo;
            } else {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
        });
    } else {
        return state;
    }
}

export default todos;