import HomeComponent from '../components/HomeComponent';
import { connect } from 'react-redux';
import { add } from '../actions/AddAction';
const mapStateToProps = state => {
    return {
        value: state.add.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: ()=> {
            dispatch( add() );  
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent)