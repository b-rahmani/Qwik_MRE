import { getFromCacheOrApi } from 'Base'

const getShipmentMethods = async () => {
    const { shipmentMethods } = await getFromCacheOrApi('/shipmentMethod/getAll')
    return shipmentMethods
}

export default getShipmentMethods
