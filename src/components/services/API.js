import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

let getUsers = () => axiosInstance('/users');
let getPosts = () => axiosInstance('/posts');
let getComments = () => axiosInstance('/comments');

export {getUsers, getPosts, getComments}