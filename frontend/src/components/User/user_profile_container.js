import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {

}

export const connect(mapStateToProps, mapDispatchToProps)(UserProfile)