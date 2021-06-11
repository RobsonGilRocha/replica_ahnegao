import axios from 'axios'

const api = axios.create({ baseURL: 'https://www.ahnegao.com.br/wp-json/wp/v2'})

export const endpoints = {
    posts:(offset)=> `/posts?per_page=1&offset=${offset -1}`
    //author:(id) => `/users/${id}`,
   // categories:(id) => `/categories?post${id}`,
}

export default api