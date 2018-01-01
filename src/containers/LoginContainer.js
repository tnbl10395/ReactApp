import React from 'react';
import { Button } from 'react-native';
import LoginComponent from '../components/LoginComponent.js';
import { connect } from 'react-redux';
import { goHome } from '../actions/LoginAction.js';
import {NavigationActions} from 'react-navigation';
// import AddAction from '../actions/LoginAction.js';

const mapStateToProps = (state) => ({
    // value: state.add.value
});

const mapDispatchToProps = (dispatch) => ({
    onHome:()=>{
        dispatch(goHome());
    }
});

export default connect (mapStateToProps,mapDispatchToProps)(LoginComponent);