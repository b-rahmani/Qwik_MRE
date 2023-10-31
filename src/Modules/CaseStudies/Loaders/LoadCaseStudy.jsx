import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLayout } from 'Contents'
import { getGlobalization } from 'Globalization'
import { getLatestCaseStudies } from 'CaseStudies'

const loadCaseStudy = routeLoader$(async (props) => {

    const { params } = props
    const { slug } = params || {}

    const [
        data,
        layout,
        globalization,
        latestCaseStudies,
    ] = await useAsync([
        getFromCacheOrApi(`/caseStudy/get?slug=${slug}`),
        getLayout('caseStudy', props),
        getGlobalization(props),
        getLatestCaseStudies(6, props)
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
        latestCaseStudies: latestCaseStudies
    }
})

export default loadCaseStudy
