import { getFromCacheOrApi } from 'Base'

const getGallery = async (slug, props) => {
    const { query } = props
    const locale = query?.get('locale')
    const gallery = await getFromCacheOrApi(`/gallery/get?slug=${slug}&locale=${locale}`)
    return gallery
}

export default getGallery
