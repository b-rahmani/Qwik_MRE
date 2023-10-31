import { getFromCacheOrApi } from 'Base'

const getAllCityDivisions = async () => {

    return await getFromCacheOrApi(`/cityDivision/getAll`)
}

export default getAllCityDivisions
