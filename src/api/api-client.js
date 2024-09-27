import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BASEURL,
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

export default apiClient;
