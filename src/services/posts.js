import api, { endpoints } from './index'

export async function getPosts(offset) {
    const { get } = await api
    return get(endpoints.posts(offset))
}