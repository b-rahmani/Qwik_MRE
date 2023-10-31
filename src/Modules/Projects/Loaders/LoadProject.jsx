import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLayout } from 'Contents'

const loadProject = routeLoader$(async (props) => {
    const {
        params,
        status,
        query,
    } = props

    const { slug } = params || {}
    const locale = query?.get('locale')
    const [
        data,
        layout,
    ] = await useAsync([
        getFromCacheOrApi(`/project/data?slug=${slug}&locale=${locale}`),
        getLayout('project', props)
    ])

    if (data.error?.code === "404") {
                return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }
    return {
        ...data,
        ...layout,
    }
})

export default loadProject
