import {
    component$,
    useSignal,

} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { Layout } from 'Clients'

const getData = routeLoader$(async (props) => {
    const page = await getPage('clients', props)
    return page
})

const Index = component$(() => {

    const data = getData().value

    const isShown = useSignal(false)
    return <>
        <p onClick$={() => isShown.value = !isShown.value}> is shown is {isShown.value.toString()}</p>

        <Layout {...data} />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
