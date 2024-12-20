import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  config.headers["Authorization"] = process.env.NEXT_PUBLIC_API_TOKEN;
  config.params = { domain: process.env.NEXT_PUBLIC_URL };

  return config;
});

export default api;
