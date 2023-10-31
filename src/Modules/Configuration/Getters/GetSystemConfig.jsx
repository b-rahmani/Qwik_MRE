import { $ } from '@builder.io/qwik'
import { getFromCacheOrApi } from 'Base'

const getSystemConfig = async () => {

    let systemConfigs = await getFromCacheOrApi('/systemConfig/all')
    let mappedConfigs = {}
    systemConfigs.forEach(i => mappedConfigs[i.configItemKey] = i.currentValue)

    const getKeyFromValue = $((value) => {
        for (let i = 0; i < systemConfigs.length; i++) {
            if (value === systemConfigs[i].currentValue) {
                return systemConfigs[i].configItemKey
            }
        }
    })

    return {
        configs: mappedConfigs,
        getKeyFromValue
    }
}

export default getSystemConfig
