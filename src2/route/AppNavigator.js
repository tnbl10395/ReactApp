import { StackNavigator } from 'react-navigation';
import LoginComponent from '../components/LoginComponent';
import HomeComponent from '../components/HomeComponent';
import LoginContainer from '../containers/LoginContainer';

export default AppNavigator = StackNavigator({
    Login: {
        screen: LoginContainer
    },
    Home: {
        screen: HomeComponent
    }
});

