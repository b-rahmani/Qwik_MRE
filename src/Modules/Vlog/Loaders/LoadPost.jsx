import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { getLayout } from 'Contents'
import { getGlobalization } from 'Globalization'

const loadPost = routeLoader$(async (props) => {
    const { params } = props
    const { slug } = params || {}
    const data = await getFromCacheOrApi(`/vlogPost/get?slug=${slug}`)
    const layout = await getLayout('vlog', props)
    const globalization = await getGlobalization(props)
    return {
        ...data,
        ...layout,
        ...globalization
    }
})

export default loadPost
