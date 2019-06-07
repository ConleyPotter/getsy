import axios from 'axios';

export const fetchUserById = user_id => {
  return axios.get(`api/users/u/${user_id}`);
}

export const fetchAllUsers = () => {
  return axios.get('api/users');
}