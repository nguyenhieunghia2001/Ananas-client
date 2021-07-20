import api from "./index";

const getAllProductCart = async () => {
    try {
        const res = await api.get('/cart');
        return res.data.cart;
    } catch (error) {
        return error;
    }
}
const addProductCart = async (id) => {
    try {
        const res = await api.get(`/love/add/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}
const removeProductCart = async (id) => {
    try {
        const res = await api.get(`/love/remove/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export {
    getAllProductCart,
    addProductCart,
    removeProductCart
}