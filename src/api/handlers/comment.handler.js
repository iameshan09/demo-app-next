import apiClient from '../api-client';

const fetchByPostId = async (postId) => await apiClient.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

export { fetchByPostId };
