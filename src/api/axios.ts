import axios from "axios";

const BASE_API_URL = "https://telejob.onrender.com/";

const ApiInstances = axios.create({
  baseURL: BASE_API_URL,
});

ApiInstances.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  // const lang = localStorage.getItem("lang") || "en";

  config.headers.Authorization = token ? `Bearer ${token}` : "";
  // config.headers["Accept-Language"] = lang;
  return config;
});
ApiInstances.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.reload();
      localStorage.clear();
    } else throw error.response.data.errorMessage;
  }
);
export default ApiInstances;
