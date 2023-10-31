import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLatestPosts } from 'Blog'
import { getLayout } from 'Contents'
import { getGlobalization } from 'Globalization'

const loadProperties = routeLoader$(async (props) => {

    const { url } = props

    const { search } = url

    let newUrl = `/properties/data${search}`

    const [
        data,
        layout,
        globalization,
        latestPosts,
    ] = await useAsync([
        getFromCacheOrApi(newUrl),
        getLayout('properties', props),
        getGlobalization(props),
        getLatestPosts(4),
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
        ...latestPosts,
    }
})

export default loadProperties
