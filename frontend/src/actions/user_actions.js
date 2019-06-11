import * as UserApiUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}
const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS, 
    errors
  });
  
  export const clearErrors = () => ({
    type: CLEAR_ERRORS
  })

export const fetchUser = user_id => dispatch => {
    return UserApiUtil.getUser(user_id)
            .then(user => dispatch(receiveUser(user)))
            .catch(err => console.log(err))
}

export const fetchUsers = () => dispatch => {
    return UserApiUtil.getUsers()
    .then(users => dispatch(receiveUsers(users)))
    .err(err => dispatch(receiveErrors(err.respone.data)))
}
