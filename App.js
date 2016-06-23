import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt.'
        }
    }

    update(e) {
        this.setState({
            txt: e.target.value
        });
    }

    render() {
        //let is scoped to the nearest enclosing block
        //var is scoped to the nearest function block
        let txt = this.props.txt;
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}/>

                <h1> {this.state.txt} </h1>
            </div>
        );
    }
}

export default App
