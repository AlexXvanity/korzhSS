import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

class Article extends React.Component {
    constructor () {
        super ();
        this.state = {
            text : "default state text"
        };
    }

    update (e) {
        this.setState({text: e.target.value});
    }

    render () {
        return (
            <div>
                <Widget update = {this.update.bind(this)}/>
                <Widget update = {this.update.bind(this)}/>
                <Widget update = {this.update.bind(this)}/>
                <h1>{this.state.text}</h1>
                <Button>React</Button>            
            </div>
        );
    }
}

let Widget = (props) => {
    return <input type="text" onChange = {props.update} />
} 

Article.propTypes = {
    text: PropTypes.string,
}

Article.defaultProps = {
    text: 'this is the default text'
}

export default Article;