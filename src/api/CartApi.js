import api from "./index";

const getAllProductCart = async () => {
    try {
        const res = await api.get('/cart');
        return res.data.cart;
    } catch (error) {
        return error;
    }
}
const addProductCart = async (id, size, quantity) => {
    try {
        const res = await api.get(`/cart/add/${id}?size=${size}&quantity=${quantity}`);
        return res.data;
    } catch (error) {
        return error;
    }
}
const removeProductCart = async (id, size) => {
    try {
        const res = await api.get(`/cart/remove/${id}?size=${size}`);
        return res.data;
    } catch (error) {
        return error;
    }
}
const updateProductCart = async (id, size, quantity) => {
    try {
        const res = await api.get(`/cart/update/${id}?size=${size}&quantity=${quantity}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export {
    getAllProductCart,
    addProductCart,
    removeProductCart,
    updateProductCart
}