
import { getFromCacheOrApi } from 'Base'

const getLatestOccasion = async () => {

    return await getFromCacheOrApi("/properties/getLatestOccasionProperties")
}

export default getLatestOccasion
