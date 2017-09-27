import React from 'react';

class Ref extends React.Component {
    constructor (props) {
        super(props);
        this.state = {a: ''};
        this.update = this.update.bind(this);
    }

    update (e) {
        // refs return node wich it refers
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value
        });
    }

    render () {
        return (
            <div>
                <input ref = "a" type="text" onChange = {this.update.bind(this)}/>
                <p>{this.state.a}</p>
                <input ref = "b" type="text" onChange = {this.update.bind(this)}/>
                <p>{this.state.b}</p>
            </div>
        );
    }
}

export default Ref;