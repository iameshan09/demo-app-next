import apiClient from '../api-client';

const fetchPosts = async () => await apiClient.get('posts');

const fetchPostById = async (id) => await apiClient.get(`posts/${id}`);

export { fetchPosts, fetchPostById };
