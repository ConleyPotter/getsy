import { 
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_ERRORS 
} from '../actions/user_actions';

const userReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS: 
      return action.users 
    case RECEIVE_USER:  
      return { [action.user.id]: action.user }
    case RECEIVE_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default userReducer;