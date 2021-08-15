import api from "./index";

const getAllSize = async () => {
    try {
        const res = await api.get('/size/all');
        return res.data.sizes;
    } catch (error) {
        return error;
    }
}

export {
    getAllSize,
    // getProductById
}