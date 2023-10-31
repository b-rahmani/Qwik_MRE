import { getFromCacheOrApi } from 'Base'

const getBlogCategories = async (props) => {
    const { query } = props
    const locale = query?.get('locale')
    const categories = await getFromCacheOrApi(`/hierarchycommon/tree/?entityType=blogpost&locale=${locale}`)
    return categories
}

export default getBlogCategories
