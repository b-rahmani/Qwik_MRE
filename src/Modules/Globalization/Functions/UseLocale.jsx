import { useLocation } from '@builder.io/qwik-city'
import locales from 'Locales'
import { key as defaultLocale } from 'DefaultLocale'

const currentLocale = () => {

    const { url } = useLocation()

    const { searchParams } = url

    var currentLocale = {}

    const locale = searchParams.get("locale")

    if (locale) {
        currentLocale = locales[locale] ?? {}
    } else {
        currentLocale = locales[defaultLocale]
    }

    return currentLocale
}

const locale = () => {

    var locale = currentLocale()

    return locale.key
}

const isRtl = () => {

    var locale = currentLocale()

    return locale.isRtl ?? false
}

const currentUrl = () => {
    const { url } = useLocation()

    return url
}

const getLocalePathPrefix = () => {
    const currentLocale = locale()
    if (currentLocale == defaultLocale) {
        return ""
    }
    return `/${currentLocale}`
}

export { currentLocale }
export { getLocalePathPrefix }
export { currentUrl }
export { isRtl }
export { locale }
