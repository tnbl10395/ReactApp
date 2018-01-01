import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppWithNavigationState from './src/route/Route';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers/rootReducer';

const store = createStore(rootReducer);

export default class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>                        
        );
    }
} 

AppRegistry.registerComponent('ReactApp', () => App);

// import React,{Component} from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { AppRegistry } from 'react-native';
// import AppNavigator from './src2/route/AppNavigator.js';
// import rootReducer from './src2/reducers/rootReducer.js';
// import { loginReducer } from './src2/reducers/LoginReducer';
// import LoginContainer from './src2/containers/LoginContainer';
// import LoginComponent from './src2/components/LoginComponent';

// const store = createStore(rootReducer);

// export default class App extends React.Component{
//     render () {
//         return (
//             <Provider store={store}>
//                 <AppNavigator/>
//             </Provider>
//         );
//     }
// }

// AppRegistry.registerComponent('ReactApp',() => App);