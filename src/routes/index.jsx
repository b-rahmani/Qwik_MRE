import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import {
    Categories,
    Cta,
    Features,
    Hero,
    Services,
    TechStacks,
} from 'Index'

const getData = routeLoader$(async (props) => {
    const page = await getPage('home', props)
    return page
})

const Index = component$(() => {

    const data = getData().value
    const {
        categories,
        cta,
        features,
        hero,
        services,
        techStacks,
    } = data
    return <>
        <Hero {...hero} />
        <Services {...services} />
        <Categories {...categories} />
        <TechStacks {...techStacks} />
        <Cta {...cta} />
        <Features {...features} />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
