import api from "./index";

const addPurchase = async (formData) => {
    try {
        const res = await api.post('/purchase/add', formData);
        return res.data;
    } catch (error) {
        return error;
    }
}

export {
    addPurchase,
}