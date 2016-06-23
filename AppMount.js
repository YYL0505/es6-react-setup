import React from 'react';
import ReactDOM from 'react-dom';

class AppMount extends React.Component {
    constructor() {
        super();
        this.state = {val : 0 };
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({
           val:  this.state.val + 1,
        });
    }

    componentWillMount() {
        console.log('mounting');
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('bye');
    }

    render() {
        console.log('rendering!');
        return <button onClick={this.update}> {this.state.val}</button>
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
    }

    mount() {
        ReactDOM.render(<AppMount />, document.getElementById('a'));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper