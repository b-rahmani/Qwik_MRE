import { getFromCacheOrApi } from 'Base'
import { getSystemConfig } from 'Configuration'

const getCoursesByConfigKeys = async (configKeys, props) => {
    const { query } = props
    const locale = query?.get('locale')
    const { configs, getKeyFromValue } = await getSystemConfig()
    let csv = ''
    configKeys.forEach(key => csv += `,${configs[key] || ""}`)
    const configKeysCsv = configKeys.join(',')
    const courses = await getFromCacheOrApi(`/courses/getCoursesByConfigKeys?configKeysCsv=${configKeysCsv}&locale=${locale}`)
    for (let course in courses) {
        if (course === 'milliseconds') {
            continue
        }
        const key = getKeyFromValue(course)
        courses[key] = courses[course]
    }
    return courses
}

export default getCoursesByConfigKeys
