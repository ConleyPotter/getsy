import {connect} from 'react-redux'

import {fetchUser} from '../../actions/user_actions'
import UserProfile from './user_profile';

const msp = (state, ownProps) => {
    let obj = state.users ? state.users[ownProps.match.params.user_id] : {fName: "", email:""}
    
    return {
        user: obj,
        currentUser: state.session.user
    }
}

const mdp = dispatch => {
    return {
        fetchUser: (user_id) => dispatch(fetchUser(user_id))
    }
}

export default connect(msp,mdp)(UserProfile)