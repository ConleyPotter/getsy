import { 
    RECEIVE_USER,
    RECEIVE_USERS
  } from '../actions/user_actions';
  
  
const usersReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_USER:
            
            return Object.assign({},state, {[action.user.data.id]: action.user.data});
        case RECEIVE_USERS:
            let oj = {}
            Object.values(action.users.data).forEach(user => {
                oj[user._id] = user
            });
            return Object.assign({}, state, oj)
        default:
            return state
    }
}

export default usersReducer