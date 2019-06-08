import axios from 'axios';

<<<<<<< HEAD
export const fetchUserById = user_id => {
  return axios.get(`api/users/u/${user_id}`);
}

export const fetchAllUsers = () => {
  return axios.get('api/users');
=======
export const getUser = user_id => {
	return axios.get(`api/users/u/${user_id}`);
}

export const getUsers = () => {
    return axios.get('api/users/u/');
>>>>>>> a799e62fc782941515ce6129b053b480db5b3b65
}