import apiClient from '../api-client';

const fetchById = async (id) => await apiClient.get(`photos/${id}`);

export { fetchById };
