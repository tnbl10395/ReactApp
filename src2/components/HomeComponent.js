import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class HomeComponent extends React.Component{
    constructor (props) {
        super(props);
    }

    goBack () {
        
    }
    render () {
        return (
            <View>
                <Button
                    title='Go Back'
                    onPress={()=>this.goBack}
                />
            </View>
        );
    }
}

export default HomeComponent;