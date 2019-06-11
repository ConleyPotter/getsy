import axios from 'axios';

export const getUser = user_id => {
	return axios.get(`api/users/u/${user_id}`);
}

export const getUsers = () => {
    return axios.get('api/users/u/');
}