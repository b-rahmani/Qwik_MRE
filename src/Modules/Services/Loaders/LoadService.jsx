import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getGlobalization } from 'Globalization'
import { getLayout } from 'Contents'
import { getForm } from 'Forms'

const loadService = routeLoader$(async (props) => {

    const { params } = props
    const { slug } = params || {}

    const [
        data,
        layout,
        globalization,
        form,
        caseStudies,
    ] = await useAsync([
        getFromCacheOrApi(`/service/get?slug=${slug}`),
        getLayout('service', props),
        getGlobalization(props),
        getForm('serviceContact', props),
    ])

    return {
        ...layout,
        ...globalization,
        ...form,
        ...data,
    }
})

export default loadService
