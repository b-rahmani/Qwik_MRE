import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { getLayout } from 'Contents'

const loadCourse = routeLoader$(async (props) => {
    const { params } = props
    const { slug } = params || {}

    const newUrl = `/course/get?slug=${slug}`

    const course = await getFromCacheOrApi(newUrl)
    const layout = await getLayout('course', props)

    return {
        ...course,
        ...layout,
    }
})

export default loadCourse
