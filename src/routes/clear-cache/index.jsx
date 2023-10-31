import { clearCache } from 'Base'

const clear = (requestEvent, shouldRedirect) => {
    try {
        clearCache()
        requestEvent.json(
            200,
            {
                status: 'Successful',
                message: 'Cache is cleared!'
            }
        )
    } catch (e) {
        requestEvent.json(
            500,
            {
                status: 'Failed',
                message: 'An error occurred!'
            }
        )
    }
}

export const onGet = async (requestEvent) => {
    clear(requestEvent, true)
}

export const onPost = async (requestEvent) => {
    clear(requestEvent)
}
