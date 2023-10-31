import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync,
} from 'Base'
import { getLayout } from 'Contents'

const loadData = routeLoader$(async (props) => {

    const {
        params,
        response,
        status,
        url,
    } = props

    const { slug, pageNumber } = params || {}

    const { pathname } = url

    let newUrl = '/galleries/data?'

    let matches = /\/galleries(\/\d+)?\/?$/.exec(pathname)

    if (matches != null) {
        const pageNumber = matches[1]
        if (pageNumber !== undefined) {
            newUrl += `&pageNumber=${pageNumber.replace('/', '')}`
        }
    }
    else {

        const secondSegments = ['category', 'tag', 'search']

        if (pathname.split('/').length >= 2 && !secondSegments.includes(pathname.split('/')[2])) {
            return status(404)
        }

        for (let i = 0; i < secondSegments.length; i++) {
            const segment = secondSegments[i]

            if (pathname.startsWith(`/galleries/${segment}`)) {
                matches = new RegExp(`(?<=\\/galleries\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
                if (matches == null) {
                    return status(404)
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
    ] = await useAsync([
        getFromCacheOrApi(newUrl),
        getLayout('galleries', props),
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }

    const { seo } = data

    return {
        ...data,
        ...layout,
    }
})

export default loadData
