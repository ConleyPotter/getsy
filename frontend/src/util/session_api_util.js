import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/', userData);
};

export const login = (userData) => {
  return axios.post('/', userData);
};

// this is what we would use if we were to have specific endpoints for login/signup
// since Etsy just has modals for register/login, there aren't specific endpoints
// I'm not sure the above is correct

// export const signup = (userData) => {
//   return axios.post('/api/users/register', userData);
// };

// export const login = (userData) => {
//   return axios.post('/api/users/login', userData);
// };