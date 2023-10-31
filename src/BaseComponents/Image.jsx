// https://www.corewebvitals.io/pagespeed/fix-slow-hero-images-core-web-vitals
import {
    getPixel,
    lg,
    md,
    sm,
    xl,
    xs,
    xxl,
} from 'Base'

const Image = ({
    alt,
    containerClass,
    imageClass,
    isBackground,
    onClick$: _onClick$,
    priority,
    src,
}) => {

    const id = Date.now()
    let xsWidth
    let smWidth
    let mdWidth
    let lgWidth
    let xlWidth
    let xxlWidth

    const getWidth = (tailwindWidth) => {
        const values = tailwindWidth.match(/\d+/g)
        if (values && values.length > 0) {
            if (tailwindWidth.indexOf('px') > -1) {
                return values[0]
            } else if (tailwindWidth.indexOf('%') > -1) {
                return null
            } else {
                return getPixel(values[0])
            }
        }
        return null
    }

    const getContainerSizeBasedOnTailwindClassesToPreventCls = () => {
        if (!containerClass) {
            return
        }
        const matches = containerClass.match(/[^ ]*w-[^ ]*/g)
        if (!matches) {
            return
        }
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i]
            if (match.startsWith('sm')) {
                smWidth = getWidth(match)
            }
            else if (match.startsWith('md')) {
                mdWidth = getWidth(match)
            }
            else if (match.startsWith('lg')) {
                lgWidth = getWidth(match)
            }
            else if (match.startsWith('xl')) {
                xlWidth = getWidth(match)
            }
            else if (match.startsWith('xxl')) {
                xxlWidth = getWidth(match)
            }
            else {
                xsWidth = getWidth(match)
            }
        }

        smWidth = smWidth || xsWidth
        mdWidth = mdWidth || smWidth
        lgWidth = lgWidth || mdWidth
        xlWidth = xlWidth || lgWidth
        xxlWidth = xxlWidth || xlWidth

        xsWidth = xsWidth || xs
        smWidth = smWidth || sm
        mdWidth = mdWidth || md
        lgWidth = lgWidth || lg
        xlWidth = xlWidth || xl
        xxlWidth = xxlWidth || xxl
    }
    getContainerSizeBasedOnTailwindClassesToPreventCls()

    const dynamicProps = {}
    if (priority) {
    } else {
        dynamicProps.loading = "lazy"
    }
    if (!src?.endsWith('.webp')) {

        dynamicProps.srcset =
            `${src}/${xsWidth} ${xs}w, ` +
            `${src}/${smWidth} ${sm}w, ` +
            `${src}/${mdWidth} ${md}w, ` +
            `${src}/${lgWidth} ${lg}w, ` +
            `${src}/${xlWidth} ${xl}w, ` +
            `${src}/${xxlWidth} ${xxl}w`
    }

    if (isBackground) {
        return <picture>
            Background image (to be implemented soon)
        </picture>
    }

    return <div
        class={containerClass || ""}
        onClick$={_onClick$}
    >
        <img
            id={id}
            src={src}
            class={(
                (imageClass?.indexOf('object-') > -1 || imageClass?.indexOf('bg-') > -1)
                    ?
                    ''
                    :
                    ' w-full h-full object-cover ') + (imageClass || "")
            }
            alt={alt || ''}
            {...dynamicProps}

        />
    </div>
}

export default Image
