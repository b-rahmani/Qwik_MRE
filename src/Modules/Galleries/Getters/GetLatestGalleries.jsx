import { getFromCacheOrApi } from 'Base'

const getLatestGalleries = async (props) => {
    const { query } = props
    const locale = query?.get('locale')
    const galleries = await getFromCacheOrApi(`/galleries/getLatest?locale=${locale}`)
    return galleries
}

export default getLatestGalleries
