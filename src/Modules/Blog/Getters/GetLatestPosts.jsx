import { getFromCacheOrApi } from 'Base'

const getLatestPosts = async (count, props) => {
    const { query } = props || {}
    const locale = query?.get('locale')
    const posts = await getFromCacheOrApi(`/blog/latestPosts?locale=${locale ?? 'null'}&count=${count}`)
    return posts
}

export default getLatestPosts
