import api from "./index";

const getAllProduct = async () => {
    try {
        const res = await api.get('/product/all');
        
        console.log(Array.isArray(res.data.products));
        return res.data.products;
    } catch (error) {
        return error;
    }
}

export {
    getAllProduct,
}