import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { getPage } from 'Contents'
import { getShipmentMethods } from 'Shipment'
import { getPaymentInfo } from 'Payment'
import { getGlobalization } from 'Globalization'

const loadCheckout = routeLoader$(async (props) => {
    const [
        page,
        shipmentMethods,
        paymentInfo,
        globalization,
    ] = await useAsync([
        getPage('checkout', props),
        getShipmentMethods(),
        getPaymentInfo(),
        getGlobalization(props),
    ])

    return {
        ...page,
        ...paymentInfo,
        shipmentMethods,
        ...globalization,
    }
})

export default loadCheckout
