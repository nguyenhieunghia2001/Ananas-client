import api from "./index";

const getAllProduct = async () => {
    try {
        const res = await api.get('/product/all');
        return res.data.products;
    } catch (error) {
        return error;
    }
}

const getProductById = async (id) => {
    try {
        const res = await api.get(`/product/detail/${id}`);
        return res.data.product;
    } catch (error) {
        return error;
    }
}
const getAllProductByQuery = async (getGender, getCat, getStatus) => {
    try {
        const url = `/products/all?gender=${getGender || ''}&cat=${getCat || ''}&status=${getStatus || ''}`;
        const res = await api.get(url);
        return res.data.products;
    } catch (error) {
        return error;
    }
}
export {
    getAllProduct,
    getProductById,
    getAllProductByQuery
}