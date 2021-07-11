import api from "./index";

const getAllStatus = async () => {
    try {
        const res = await api.get('/statuses/all');
        return res.data.statuses;
    } catch (error) {
        return error;
    }
}

export {
    getAllStatus,
    // getProductById
}