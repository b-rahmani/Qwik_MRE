import { getFromCacheOrApi } from 'Base'

const getLatestSpecial = async () => {

    return await getFromCacheOrApi("/properties/getLatestSpecialProperties")
}

export default getLatestSpecial
