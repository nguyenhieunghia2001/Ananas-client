import api from "./index";

const getAllCategory = async () => {
    try {
        const res = await api.get('/categories/all');
        return res.data.categories;
    } catch (error) {
        return error;
    }
}

// const getProductById = async (id) => {
//     try {
//         const res = await api.get(`/product/${id}`);
//         return res.data.product;
//     } catch (error) {
//         return error;
//     }
// }

export {
    getAllCategory,
    // getProductById
}