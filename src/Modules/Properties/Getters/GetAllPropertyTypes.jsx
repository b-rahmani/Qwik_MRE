import { getFromCacheOrApi } from 'Base'

const getAllPropertyTypes = async () => {

    return await getFromCacheOrApi(`/propertyType/all`)
}

export default getAllPropertyTypes
