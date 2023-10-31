import { getFromCacheOrApi } from 'Base'

const getRecent = async () => {

    return await getFromCacheOrApi(`/properties/getRecentProperties`)
}

export default getRecent
