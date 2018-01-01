import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent';
import { add } from '../actions/AddAction.js';
import { goHome } from '../actions/GoHomeAction.js';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = (state) => ({
    value: state.loginReducer.value
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd:() => {
            dispatch(add());
        },
        onHome:()=>{
            dispatch(goHome());
        } 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
