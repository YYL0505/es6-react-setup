import React from 'react';
import ReactDOM from 'react-dom';

class AppLifeCycleUpdate extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {
            increasing: false,
        }
    }

    update() {
        ReactDOM.render(
          <AppLifeCycleUpdate val={this.props.val + 1}/>,
            document.getElementById('app')
        );
    }

    // Invoked when a component is receiving new props.
    // This method is not called for the initial render.

    // Use this as an opportunity to react to a prop transition
    // before render() is called by updating the state using this.setState().
    // The old props can be accessed via this.props.
    // Calling this.setState() within this function will not trigger an additional render.
    componentWillReceiveProps(nextProps) {
        this.setState({
            increasing: nextProps.val > this.props.val
        });
    }

    // Invoked before rendering when new props or state are being received.
    // This method is not called for the initial render or when forceUpdate is used.

    // Use this as an opportunity to return false
    // when you're certain that the transition to the new props and state will not require a component update.
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }

    // Invoked immediately before rendering when new props or state are being received.
    // This method is not called for the initial render.

    // Use this as an opportunity to perform preparation before an update occurs.
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.val);
    }

    render() {
        console.log(this.state.increasing);
        return (
            <button onClick={this.update}>
                {this.props.val}
            </button>
        );
    }
}
AppLifeCycleUpdate.defaultProps = {
    val: 0,
}

export default AppLifeCycleUpdate
