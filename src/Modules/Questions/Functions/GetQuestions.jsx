import { getFromCacheOrApi } from 'Base'

const getQuestions = async () => {
    const posts = await getFromCacheOrApi('/questions/data')
    return posts
}

export default getQuestions
