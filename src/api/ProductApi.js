import api from "./index";

const getAllProduct = async () => {
    try {
        const res = await api.get('/products/all');
        return res.data.products;
    } catch (error) {
        return error;
    }
}

const getProductById = async (id) => {
    try {
        const res = await api.get(`/product/${id}`);
        return res.data.product;
    } catch (error) {
        return error;
    }
}

export {
    getAllProduct,
    getProductById
}