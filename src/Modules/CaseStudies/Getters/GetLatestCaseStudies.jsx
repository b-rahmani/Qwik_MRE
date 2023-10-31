import { getFromCacheOrApi } from 'Base'

const getLatestCaseStudies = async (count, props) => {
    const { query } = props || {}
    const locale = query?.get('locale')
    const data = await getFromCacheOrApi(`/caseStudies/data?locale=${locale ?? 'null'}`)
    const caseStudies = data?.caseStudies?.data.splice(0, count)
    return caseStudies
}

export default getLatestCaseStudies
