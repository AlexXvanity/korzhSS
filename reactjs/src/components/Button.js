import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render () {
        console.log(this.props);
        return (
            <button><Title text = "React" /></button>
        );
    }
}

let Title = (props) => <h2>Title: {props.text}</h2>

Title.propTypes = {
    // Propertie validation
    
    text: (props, propName, componentName) => {
        if (!(propName in props)) {
            return new Error(`missing propName =  ${propName}`);
        }
    }
}

export default Button;