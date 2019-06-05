import axios from "axios";

export const getProducts = () => {
	return axios.get("/api/products/");
};

export const getUserProducts = user_id => {
	return axios.get(`/api/products/user/${user_id}`);
};

export const getProduct = product_id => {
	return axios.get(`/api/products/${product_id}`);
};

export const createProduct = data => {
	return axios.post("/api/products", data);
};
