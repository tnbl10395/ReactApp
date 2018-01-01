import React, { Component } from 'react';
import { Button,View, Text } from 'react-native';

export default class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <View>
                <Button
                    title='Go Home'
                    onPress={()=>this.props.navigation.navigate('Home')}
                />
                <Button
                    title='Add'
                    onPress={()=>this.props.onAdd()}
                />
                <Text>value: {this.props.value}</Text>
            </View>
        );
    }
}
