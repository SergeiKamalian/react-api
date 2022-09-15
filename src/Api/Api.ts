import axios from "axios";
import { IComment, IPost } from "../module";
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getPosts = (): Promise<IPost[]> => api.get('posts').then(res => res.data).catch(e => console.log(e.message))
export const getComments = (): Promise<IComment[]> => api.get('comments').then(res => res.data).catch(e => console.log(e.message))