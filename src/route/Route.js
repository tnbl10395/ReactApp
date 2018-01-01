import React from 'react';
import { StackNavigator,addNavigationHelpers, TabNavigator } from 'react-navigation';
import LoginComponent from '../components/LoginComponent';
import HomeComponent from '../components/HomeComponent';
import { connect } from 'react-redux';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';
import Tab2Component from '../components/Tab2Component';
import Tab1Component from '../components/Tab1Component';
import Tab1Container from '../containers/Tab1Container';
export const AppNavigator = StackNavigator({
    Login: {
        screen: LoginContainer
    },
    Home: {
        screen: HomeContainer
    }
});

export const Tabbar = TabNavigator(
    {
        Tab1Component:{
            screen: Tab1Container
        },
        Tab2Component:{
            screen: Tab2Component
        }
    },{
        tabBarPosition:'bottom',        
        animationEnabled:true,
        tabBarOptions:{
            activeBackgroundColor:'#1E88E5',
            activeTintColor:'white',
            upperCaseLabel:false,
            labelStyle:{
                fontSize:15,
                fontWeight:'bold',
            },
            style:{
                backgroundColor:'steelblue'
            },
        }
    }
);
Tabbar.navigationOptions = {
    title: "Tab"
};


const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect (mapStateToProps) (AppWithNavigationState);