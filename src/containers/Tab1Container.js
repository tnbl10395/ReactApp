import { connect } from 'react-redux';
import { logout } from '../actions/GoBackAction';
import Tab1Component from '../components/Tab1Component';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch( logout() );
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Tab1Component);