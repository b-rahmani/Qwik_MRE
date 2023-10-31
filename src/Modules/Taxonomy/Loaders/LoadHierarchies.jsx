import { routeLoader$ } from '@builder.io/qwik-city'
import {
    useAsync,
    getFromCacheOrApi,
} from 'Base'
import { getGlobalization } from 'Globalization'

const loadHierarchies = routeLoader$(async (props) => {
    const { params } = props
    const { entityType } = params

    const [
        data,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/hierarchyCommon/tree?entityType=${entityType}`),
        getGlobalization(props),
    ])

    return {
        ...data,
        ...globalization,
    }
})

export default loadHierarchies
