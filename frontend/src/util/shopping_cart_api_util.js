import axios from "axios";

export const getShoppingCart = (user_id) => {
	return axios.get(`/api/cart/${user_id}`);
};

export const updateShoppingCart = (id, data) => {
    return axios.patch(`/api/cart:${id}`, data)
}

export const addProductToCart = data => {
	return axios.post("/api/cart", data);
};

export const emptyCart = (id) => {
    return axios.delete(`/api/cart/${id}`);
}

