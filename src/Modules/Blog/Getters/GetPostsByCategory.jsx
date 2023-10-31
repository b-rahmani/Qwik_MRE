import { getFromCacheOrApi } from 'Base'

const getPostsByCategory = async (categorySlug) => {
const categories = await getFromCacheOrApi(`/blog/data?category=${categorySlug}`)
    return categories
}

export default getPostsByCategory
