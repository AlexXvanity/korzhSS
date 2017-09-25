function Container () {
    return (
        <div className = "container">
            <img src = "https://facebook.github.io/react/img/logo.svg" alt="photo"/>
            <h1>React</h1>
            <p>Library for creation person application</p>
        </div>
    );
}

ReactDOM.render(<Container/>, document.getElementById('root'));
