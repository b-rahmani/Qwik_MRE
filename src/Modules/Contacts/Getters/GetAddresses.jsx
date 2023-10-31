import { post } from 'Base'

const getAddresses = async ({
    session,
    ...props
}) => {
    const { sharedMap } = props
    const routeLoaderSession = sharedMap?.get('session')
    if (session?.value?.user && session?.value?.user?.guid) {
        try {
            const { addresses } = await post('/address/getAddresses', {
                "userGuid": session.value.user.guid
            })
            return addresses
        } catch (error) {
            console.log(error)
        }
    } else if (session?.user && session?.user?.guid) {
        try {
            const { addresses } = await post('/address/getAddresses', {
                "userGuid": session.user.guid
            })
            return addresses
        } catch (error) {
            console.log(error)
        }
    } else if (routeLoaderSession?.user && routeLoaderSession?.user?.guid) {
        try {
            const { addresses } = await post('/address/getAddresses', {
                "userGuid": routeLoaderSession.user.guid
            })
            return addresses
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log('NOT LOGGED IN OR NO USER GUID!')
    }
}

export default getAddresses
