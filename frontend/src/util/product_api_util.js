import axios from "axios";

export const getProductsByCategory = category => {
  return axios.get(`/api/products/${category}`)
};