import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

class Form extends Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
    }
    handleSubmit (event) {
        event.preventDefault();
        let title = this.refs.title.value;

        if (title) {
            this.props.onAdd(title);
        }
    }
    render () {
        return (
            <form className="todo-add-form" onSubmit = {this.handleSubmit}>
                <input type = "text" ref = "title" placeholder= "Что нужно сделать?"/>
                <Button type = "submit">Добавить</Button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default Form;