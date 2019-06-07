import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const fetchUser = user_id => dispatch (
  UserUtil.fetchUserById(user_id).then(
    user => (dispatch(receiveUser(user))), 
    error => (dispatch(receiveErrors(error)))
  )
)

export const fetchUsers = () => dispatch(
  UserUtil.fetchAllUsers().then(
    users => (dispatch(receiveUsers(users))),
    error => (dispatch(receiveErrors(error)))
  )
)

