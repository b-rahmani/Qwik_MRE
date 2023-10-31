import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync,
} from 'Base'
import { getLayout } from 'Contents'

const loadProjects = routeLoader$(async (props) => {

    const { url } = props

    const { search } = url

    let newUrl = `/projects/data${search}`

    const [
        data,
        layout,
    ] = await useAsync([
        getFromCacheOrApi(newUrl),
        getLayout('projects', props)
    ])

    const { seo } = data

    return {
        ...data,
        ...layout,
    }
})

export default loadProjects
