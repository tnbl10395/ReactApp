import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

class Tab1Component extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Tab1',
    }
    constructor(props){
        super(props);
    }
    render () {
        return (
            <View style={{flex:1}}>
                <Button
                    title='Logout'
                    onPress={()=>this.props.logout()}
                />
            </View>
        );
    }
}


export default Tab1Component;