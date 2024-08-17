import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

request.interceptors.request.use(function (config) {
    // Lấy token từ nơi bạn lưu trữ, ví dụ: localStorage
    const token = localStorage.getItem('token');

    // Nếu token tồn tại, thêm nó vào header của request
    if (token && token.token) {
        config.headers['Authorization'] = `Bearer ${token.token}`;
    }

    return config;
}, function (error) {
    // Làm gì đó với lỗi khi gửi request
    return Promise.reject(error);
});

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // Xử lý các mã lỗi từ server (4xx, 5xx)
            if (error.response.status === 401) {
                // Ví dụ: Điều hướng về trang đăng nhập khi lỗi 401 Unauthorized
                window.location.href = '/login';
            }
        } else if (error.request) {
            // Xử lý khi không nhận được phản hồi từ server
            console.error('No response received from server:', error.request);
        } else {
            // Xử lý lỗi khác liên quan đến việc thiết lập yêu cầu
            console.error('Error setting up request:', error.message);
        }
        return Promise.reject(error);
    }
);

export default request;