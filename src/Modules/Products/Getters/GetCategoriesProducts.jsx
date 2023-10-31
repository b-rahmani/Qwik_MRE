import { getFromCacheOrApi } from 'Base'

const getCategoriesProducts = async (count, props) => {
    const { query } = props
    const locale = query?.get('locale')
    const { categories } = await getFromCacheOrApi(`/products/gethierarchiesproducts?locale=${locale}&count=${count}`)
    return categories
}

export default getCategoriesProducts
