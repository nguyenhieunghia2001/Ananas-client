import api from "./index";

const getInfo = async () => {
    try {
        const res = await api.get('/account/getinfo');
        return res.data.account;
    } catch (error) {
        return error;
    }
}

export {
    getInfo,
}