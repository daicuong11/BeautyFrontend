import request from "../utils/request";

export const getToken = async (username, password) => {
    try {
        const res = await request.post('auth/login', {
            username,
            password,
        });
        return res.data;
    } catch (error) {
        console.log('error', error)
    }
}
