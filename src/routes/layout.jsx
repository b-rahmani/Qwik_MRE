import {
    component$,
    Slot,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import {
    GoogleTagManagerNoScript,
    useAsync,
} from 'Base'
import { getGlobalization } from 'Globalization'
import { getSystemConfig } from 'Configuration'
import { useLayoutSeo } from 'Seo'
import { getLayout } from 'Contents'
import { getMenu } from 'Navigation'
import {
    Footer,
    Header,
} from 'Layout'

const getData = routeLoader$(async (props) => {

    const [
        layout,
        menuData,
        globalization,
        systemConfigs,
    ] = await useAsync([
        getLayout('main', props),
        getMenu(props),
        getGlobalization(props),
        getSystemConfig(props),
    ])
    return {
        ...globalization,
        ...systemConfigs,
        ...layout,
        ...menuData,
    }
})

const Layout = component$(() => {

    const data = getData().value
    const {
        configs,
        currentLocale,
    } = data

    return <>
        <GoogleTagManagerNoScript {...configs} />
        <div
            dir={currentLocale?.isRtl ? 'rtl' : 'ltr'}
            class="scroll-smooth"
        >
            <Header {...data} />
            <Slot />
            <Footer {...data} />
        </div>
    </>
})

export default Layout

const head = ({ resolveValue }) => {
    return useLayoutSeo(getData, resolveValue)
}

export { head }
