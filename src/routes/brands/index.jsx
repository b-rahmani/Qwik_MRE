import { component$ } from '@builder.io/qwik'
import {
    BrandsLayout,
    loadBrands,
} from 'Brands'
import { useSeo } from 'Seo'
import { Layout as RunnableLayout } from 'BrandsParts'
import { getLocalePathPrefix } from 'Globalization'

const Index = component$(() => {

    const data = loadBrands().value
    data.localePathPrefix = getLocalePathPrefix()

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <BrandsLayout {...data} />
})

export default Index

export { loadBrands }

const head = ({ resolveValue }) => {
    return useSeo(loadBrands, resolveValue)
}

export { head }
