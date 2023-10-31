import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { getLayout } from 'Contents'

const loadData = routeLoader$(async (props) => {
    const {
        params,
        query,
        status,
        ...rest
    } = props
    const { slug } = params || {}
    const regex = /^(\/[^\/]*)?\/page\/([^/\?]+)\/?$/
    const locale = query.get('locale')
    let data = await getFromCacheOrApi(`/page/get?slug=${slug}&locale=${locale}`)
    const sections = await getLayout('page', props)

    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }
    data = { ...data, ...sections }
    return data
})

export default loadData
