import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLayout } from 'Contents'
import { getGlobalization } from 'Globalization'

const loadCaseStudies = routeLoader$(async (props)=>{

    const {
        params,
        response,
        url,
    } = props

    const { slug, pageNumber } = params || {}

    const { pathname } = url

    let newUrl = '/caseStudies/data?'

    let matches = /\/case-studies(\/\d+)?\/?$/.exec(pathname)

    if (matches != null) {
        const pageNumber = matches[1]
        if (pageNumber !== undefined) {
            newUrl += `&pageNumber=${pageNumber.replace('/', '')}`
        }
    }
    else {

        const secondSegments = ['category', 'tag', 'search']

        if (pathname.split('/').length >= 2 && !secondSegments.includes(pathname.split('/')[2])) {
            response.status = 404
            return
        }

        for (let i = 0; i < secondSegments.length; i++) {
            const segment = secondSegments[i]

            if (pathname.startsWith(`/case-studies/${segment}`)) {
                matches = new RegExp(`(?<=\\/case-studies\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
                if (matches == null) {
                    response.status = 404
                    return
                }
                else {
                    newUrl += `&${segment}=${encodeURI(matches[0].split('/')[0])}`
                    const pageNumber = matches[1]
                    if (pageNumber !== undefined) {
                        newUrl += `&pageNumber=${pageNumber}`
                    }
                    break
                }
            }
        }
    }

    newUrl = newUrl.replace('?&', '?')

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(newUrl),
        getLayout('caseStudies', props),
        getGlobalization(props),
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
    }

})

export default loadCaseStudies
