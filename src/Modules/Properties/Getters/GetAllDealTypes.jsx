import { getFromCacheOrApi } from 'Base'

const getAllDealTypes = async () => {

    return await getFromCacheOrApi(`/dealType/all`)
}

export default getAllDealTypes
