const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      id: new Date(),
      text: text
    }
}

export default addTodo;
