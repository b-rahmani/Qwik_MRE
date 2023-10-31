import { get } from 'Base'

const getGateways = async () => {
    const { gateways } = await get('/iranpayment/data')
    return {
        gateways
    }
}

export default getGateways
