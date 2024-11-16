import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://threed-vison-api.onrender.com/api/v1",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json", // Đặt header mặc định
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
