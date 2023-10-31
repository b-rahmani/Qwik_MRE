import { getFromCacheOrApi } from 'Base'
import { getSystemConfig } from 'Configuration'

const getCategoryPostsByConfigKeys = async (configKeys) => {
    const { configs, getKeyFromValue } = await getSystemConfig()
    let csv = ''
    configKeys.forEach(key => csv += `,${key}`)
    const posts = await getFromCacheOrApi(`/blog/getCategoryPostsByConfigKeys?configKeysCsv=${csv}`)

    return posts
}

export default getCategoryPostsByConfigKeys
