import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import AppProps from './AppProps'
import AppMount from './AppMount'
import AppLifeCycleUpdate from './AppLifeCycleUpdate'
import AppHighOrder from './AppHighOrder'
import AppComposableComponents from './AppComposableComponents'
import AppDynamicallyGeneratedComponents from './AppDynamicallyGeneratedComponents'
import AppJXS from './AppJXS'

ReactDOM.render(
    <AppJXS />,
    document.getElementById('app')
);