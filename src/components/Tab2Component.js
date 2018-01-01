import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

class Tab2Component extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Tab2',
    }
    constructor(props){
        super(props);
    }
    render () {
        return (
            <View style={{flex:1}}>
                <Text>Hello</Text>
            </View>
        );
    }
}

export default Tab2Component;