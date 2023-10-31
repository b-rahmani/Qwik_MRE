import { routeLoader$ } from '@builder.io/qwik-city'
import {
    useAsync,
    getFromCacheOrApi,
} from 'Base'
import { getLayout } from 'Contents'
import { getGlobalization } from 'Globalization'

const loadChildrenData = routeLoader$(async (props) => {
    const { params } = props

    const {
        entityType,
        parentSlug,
    } = params

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/hierarchyCommon/children?entityType=${entityType}&parentSlug=${parentSlug}`),
        getLayout('hierarchyChildren', props),
        getGlobalization(props)
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
        entityType,

    }
})

export default loadChildrenData
