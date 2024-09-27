import apiClient from '../api-client';

const fetchById = async (id) => await apiClient.get(`users/${id}`);

export { fetchById };
