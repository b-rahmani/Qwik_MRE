import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLayout } from 'Contents'
import { getGlobalization } from 'Globalization'
import { getForm } from 'Forms'

const loadQuestion = routeLoader$(async (props) => {
    const { params } = props
    const { slug } = params || {}

    const [
        data,
        layout,
        globalization,
        form,
    ] = await useAsync([
        getFromCacheOrApi(`/question/get?slug=${slug}`),
        getLayout('question', props),
        getGlobalization(props),
        getForm(`comment`, props)
    ])

    const { content, ...contentLessForm } = form

    return {
        ...data,
        ...layout,
        ...globalization,
        ...contentLessForm,
    }
})

export default loadQuestion
