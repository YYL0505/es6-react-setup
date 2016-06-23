import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        //let is scoped to the nearest enclosing block
        //var is scoped to the nearest function block
        let txt = this.props.txt;
        return (
            <div>
                <h1> {txt} </h1>
                <h2>{this.props.cat}</h2>
            </div>
        );
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is my first component'
}

ReactDOM.render(
    <App cat={5} txt="this is the props text" />,
    // <App cat={5} />, then will show the default props.txt
    document.getElementById('app')
);