import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

request.interceptors.request.use(function (config) {
    // Lấy token từ nơi bạn lưu trữ, ví dụ: localStorage
    const token = localStorage.getItem('token');

    // Nếu token tồn tại, thêm nó vào header của request
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
}, function (error) {
    // Làm gì đó với lỗi khi gửi request
    return Promise.reject(error);
});

// Add a response interceptor
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response.data);
});

export default request;