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

    //Invoked once, both on the client and server, immediately before the initial rendering occurs.
    componentWillMount() {
        this.setState({
            m: 2,
        });
    }

    //Invoked once, only on the client (not on the server),
    // immediately after the initial rendering occurs.
    // At this point in the lifecycle,
    // you can access any refs to your children
    // (e.g., to access the underlying DOM representation).
    // The componentDidMount() method of child components is invoked before that of parent components.
    componentDidMount() {
        this.inc = setInterval(this.update, 500);
    }

    //Invoked immediately before a component is unmounted from the DOM.
    componentWillUnmount() {
        clearInterval(this.inc);
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
