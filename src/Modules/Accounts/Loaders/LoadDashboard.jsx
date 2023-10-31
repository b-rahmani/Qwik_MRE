import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLayout } from 'Contents'
import { getGlobalization } from 'Globalization'

const loadDashboard = routeLoader$(async (props) => {

    const newUrl = '/dashboard'

    const {
        params,
        response,
        fail,
        url,
    } = props

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(newUrl),
        getLayout('dashboard', props),
        getGlobalization(props),
    ])
    // if (data.error?.code === "404") {
    //     return fail(404, data)
    // }
    // if (data.statusCode) {
    //     return fail(data.statusCode, data)
    // }

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export default loadDashboard
