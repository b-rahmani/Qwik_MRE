import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLayout } from 'Contents'
import { getForm } from 'Forms'
import { getGlobalization } from 'Globalization'

const loadPost = routeLoader$(async (props) => {
    const {
        params,
        status,
        query
    } = props
    const { slug } = params || {}
    const locale = query?.get('locale')
    const [
        data,
        layout,
        globalization,
        form
    ] = await useAsync([
        getFromCacheOrApi(`/blogPost/get?slug=${slug}&locale=${locale}`),
        getLayout('post', props),
        getGlobalization(props),
        getForm(`comment`, props)
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }
    const { content, ...contentLessForm } = form
    return {
        ...data,
        ...layout,
        ...globalization,
        ...contentLessForm
    }
})

export default loadPost
