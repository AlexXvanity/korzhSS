import React, { Component } from 'react';

class Stats extends Component {
    constructor (props) {
        super(props);
        this.total = this.props.todos.length;
        this.completed = this.props.todos.filter((todo) => todo.completed).length;
        this.notCompleted = this.total - this.completed;
    }
    render () {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Всего задач: </th>
                        <td>{this.total}</td>
                    </tr>
                    <tr>
                        <th>Выполнено:</th>
                        <td>{this.completed}</td>
                    </tr>
                    <tr>
                        <th>Осталось:</th>
                        <td>{this.notCompleted}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Stats;