import axios from "axios";

export const getProducts = () => {
	return axios.get("/api/products/");
};

// here is something we need to discuss, do we want to have the backend route
// be nested under users or products for grabbing all the products by a user's
// id? -- CP
export const getUserProducts = user_id => {
	return axios.get(`/api/users/${user_id}`);
};

export const getProduct = product_id => {
	return axios.get(`/api/products/${product_id}`);
};

export const createProduct = data => {
	return axios.post("/api/products", data);
};

export const getProductOwner = user_id => {
	return axios.get(`api/users/u/${user_id}`);
}

export const deleteProduct = product_id => {
  return axios.delete(`api/products/${product_id}`);
}

export const updateProduct = (product, product_id) => {
  return axios({
    method: 'patch',
    url: `api/products/${product_id}`,
    data: product,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
}
export const getProductsByCategory = category => {
  return axios.get(`/api/products/cat/${category}`)
};
