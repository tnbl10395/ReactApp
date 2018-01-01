import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';
import { Tabbar } from '../route/Route';

class HomeComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        return (
            <View style={{flex:1}}>
                {/* <Text>Home Screen</Text> */}
                {/* <Button 
                    title='Click'
                    onPress={()=>this.props.onClick()}
                />
                <Text>{this.props.value}</Text> */}

                    <Tabbar/>
            </View>
        );
    }
}
const goBack = () => {

}

export default HomeComponent;