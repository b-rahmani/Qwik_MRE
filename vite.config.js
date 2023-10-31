import { defineConfig, loadEnv } from 'vite'
import { join } from "path"
import { partytownVite } from '@builder.io/partytown/utils'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import collectRichTextRenderers from './RichTextRendererCollector'
import glob from 'glob'
import provideLoaders from './LoaderProvider'
import provideNullLayouts from './NullLayoutProvider'
import tsconfigPaths from 'vite-tsconfig-paths'
// import settingsCreator from './SettingsCreator'

// const settings = settingsCreator()
collectRichTextRenderers()
provideLoaders()

const barrels = provideNullLayouts()

export default defineConfig(async ({ mode }) => {

    const env = loadEnv(mode, process.cwd(), '')

    let searchPath = './src/Modules/**/*Initialization.js'
    let InitializationFiles = glob.sync(searchPath)
    await Promise.all(InitializationFiles.map(async (i) => {
        const { default: initialize } = await import(`./src/Modules/Globalization/Functions/Initialization.js`)
        await initialize({ apiUrl: env.VITE_API_URL })

    }))

    return {
        plugins: [
            qwikCity({
                trailingSlash: false
            }),
            qwikVite(),
            tsconfigPaths(),
            partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
        ],
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        },
        server: {
            host: "0.0.0.0",
            hmr: {
                clientPort: 443,
            },
        },
        build: {
            rollupOptions: {
                external: [
                    ...barrels
                ]
            }
        },
        optimizeDeps: {
            include: ["@auth/core"]
        }
    }
})
