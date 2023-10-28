import Logo from '../components/Logo';
import { connect } from 'react-redux'
import { getTokenAC } from '../redux/reducers/userReducer';

function mapStateToProps(state) {
    const { user } = state
    return { token: user.token }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateToken: (v) => dispatch(getTokenAC(v)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo)