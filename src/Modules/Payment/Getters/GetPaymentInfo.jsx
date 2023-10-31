import { getFromCacheOrApi } from 'Base'

const getPaymentInfo = async () => {
    const { paymentMethods } = await getFromCacheOrApi('/payment/data')
    return {
        paymentMethods
    }
}

export default getPaymentInfo
