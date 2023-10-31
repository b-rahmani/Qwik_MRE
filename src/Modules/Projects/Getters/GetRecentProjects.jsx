import { getFromCacheOrApi } from 'Base'

const getRecentProjects = async (count) => {
    const projects = await getFromCacheOrApi(`/projects/latestProjects?locale=null&count=${count}`)
    return projects
}

export default getRecentProjects
