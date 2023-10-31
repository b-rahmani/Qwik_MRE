import {
    writeFileSync,
} from 'fs'

const initialize = async ({ apiUrl }) => {
    createFiles()
    let url = ''
    try {
        url = `${apiUrl}/globalization/data`
        let res = await fetch(url)
        let retries = 0
        const maxRetries = 3
        while (res.status !== 200 && retries < maxRetries) {
            console.log(`${retries + 1}. Retrying to fetch /globalization/data`)
            retries++
            res = await fetch(url)
        }
        retries = 0
        const data = await res.json()
        await locales(data)
        await supportedLocales(data)
        await defaultLocale(data)

    } catch (error) {
        console.error(error, `Failed to fetch the globalization data from ${url}`)
    }
}

const createFiles = () => {
    writeFileSync('./src/DefaultLocale.jsx', "")
    writeFileSync('./src/SupportedLocales.jsx', "")
    writeFileSync('./src/Locales.jsx', "")
}

const locales = async (data) => {

    let localesFilContent = 'const locales = { \n'

    data.locales?.map(locale => {
        localesFilContent += `${locale.key} : { \n`
        localesFilContent += `isRtl : ${locale.isRtl},\n`
        localesFilContent += `localKey : "${locale.localKey}",\n`
        localesFilContent += `key : "${locale.key}",\n`
        localesFilContent += `supportsLetterSpacing : ${locale.supportsLetterSpacing},\n`
        localesFilContent += "},\n"
    })
    localesFilContent += "}\n"
    localesFilContent += "export default locales"
    writeFileSync('./src/Locales.jsx', localesFilContent)
}

const supportedLocales = async (data) => {

    let supportedLocalesFileContent = 'const supportedLocales = { \n'
    data.locales?.map(locale => {
        supportedLocalesFileContent += `${locale.key} : "${locale.key}", \n`
    })
    supportedLocalesFileContent += "} \n"
    supportedLocalesFileContent += "export default supportedLocales"
    writeFileSync('./src/SupportedLocales.jsx', supportedLocalesFileContent)
}

const defaultLocale = async (data) => {
    const defaultLocale = data.locales.find(locale => locale.isDefault)

    let globalizationFileContent = `const key = "${defaultLocale.key}"\n`
    globalizationFileContent += `const localKey = "${defaultLocale.localKey}"\n`
    globalizationFileContent += `const isRtl = ${defaultLocale.isRtl}\n`
    globalizationFileContent += `export { key } \n`
    globalizationFileContent += `export { localKey } \n`
    globalizationFileContent += `export { isRtl } \n`
    writeFileSync('./src/DefaultLocale.jsx', globalizationFileContent)
}

export default initialize
