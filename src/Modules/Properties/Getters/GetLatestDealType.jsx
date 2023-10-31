
import { getFromCacheOrApi } from 'Base'

const getLatestDealType = async (key) => {

    return await getFromCacheOrApi(`/properties/getLatestDealTypeProperties?key=${key}`)
}

export default getLatestDealType
