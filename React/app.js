var title = React.createElement('h1', null, 'Hello React');
var img = React.createElement('img', { src:'https://facebook.github.io/react/img/logo.svg'});
var subtitle = React.createElement('p', null, 'Библиотека для создания пользовательских интерфейсов');

var container = React.createElement('div', {className:'container'}, title, img, subtitle);

ReactDOM.render(container, document.getElementById('root'));