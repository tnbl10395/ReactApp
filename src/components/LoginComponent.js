import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';

class LoginComponent extends Component{
    constructor(props){
        super(props);
    }
    render () {
        return (
            <View>
                <Text>Login Screen</Text>
                <Button
                    title='Go Home'
                    onPress={()=>this.props.onHome()}
                />
            </View>
        );
    }
}
export default LoginComponent;