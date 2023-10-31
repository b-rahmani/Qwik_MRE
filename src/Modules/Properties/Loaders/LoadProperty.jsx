import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLayout } from 'Contents'
import { getForm } from 'Forms'
import { getGlobalization } from 'Globalization'
import { getRecent } from 'Properties'
import { getAllCityDivisions } from 'Geo'

const loadProperty = routeLoader$(async (props) => {

    const { params } = props
    const { slug } = params || {}

    const [
        data,
        layout,
        globalization,
        from,
        recentProperties,
        allCityDivisions,
    ] = await useAsync([
        getFromCacheOrApi(`/property/get?slug=${slug}`),
        getLayout('property', props),
        getGlobalization(props),
        getForm(`comment`, props),
        getRecent(),
        getAllCityDivisions()
    ])

    return {
        ...layout,
        ...globalization,
        ...from,
        ...data,
        recentProperties,
        allCityDivisions,
    }
})

export default loadProperty
