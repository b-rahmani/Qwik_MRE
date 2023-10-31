import { key as defaultLocaleKey } from 'DefaultLocale'

const useLocalizedTime = ({
    searchParams,
    utcDate,
}) => {
    if (!utcDate) {
        return ""
    }

    var normalizedValue =
        (utcDate && utcDate?.toString()?.endsWith('Z'))
            ? utcDate :
            (utcDate + 'Z')

    var locale = searchParams?.get('locale') ?? defaultLocaleKey

    if (locale?.toLowerCase() === 'fa') {
        return new Date(normalizedValue)?.toLocaleTimeString('fa-IR',
            {
                timeZone: "Asia/Tehran"
            }
        )
    }

    return new Date(normalizedValue)?.toLocaleTimeString('en-US')
}

export default useLocalizedTime
