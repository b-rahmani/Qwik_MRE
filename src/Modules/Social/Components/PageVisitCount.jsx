import {
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'
import { currentUrl } from 'Globalization'
import { usePageVisitCounter } from 'Social'

const PageVisitCount = component$(() => {
    const visitCount = useSignal(0)
    const url = useSignal(currentUrl())
    useVisibleTask$(async () => {
        const data = await usePageVisitCounter(url.value.pathname)
        visitCount.value = data

    }, {
        strategy: 'document-ready'
    })

    return visitCount.value
})

export default PageVisitCount
