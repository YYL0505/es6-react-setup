import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import AppProps from './AppProps'
import AppMount from './AppMount'
import AppLifeCycleUpdate from './AppLifeCycleUpdate'
import AppHighOrder from './AppHighOrder'
import AppComposableComponents from './AppComposableComponents'
import AppDynamicallyGeneratedComponents from './AppDynamicallyGeneratedComponents'

ReactDOM.render(
    <AppDynamicallyGeneratedComponents />,
    document.getElementById('app')
);