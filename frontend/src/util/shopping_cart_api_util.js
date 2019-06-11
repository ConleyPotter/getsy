import axios from "axios";

export const getShoppingCart = (user_id) => {
	return axios.get(`/api/cart/${user_id}`);
};

// remove action

export const addProductToCart = data => {
    debugger
	return axios.post("/api/cart", data);
};

// This only deletes one shopping cart item
export const deleteItem = (id) => {
    return axios.delete(`/api/cart/delete/${id}`);
}

export const deleteShoppingCart = (user_id) => {
    return axios.delete(`/api/cart/delete_cart/${user_id}`)
}

