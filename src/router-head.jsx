import { component$ } from '@builder.io/qwik'
import { useDocumentHead } from '@builder.io/qwik-city'
import {
    env,
    isDev,
} from 'Base'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
    const head = useDocumentHead()
    const {
        frontmatter,
        links,
        meta,
        styles,
        title,
    } = head
    const {
        googleAnalyticsId,
        googleTagManagerId,
        homeScripts,
        schemas,
        siteScripts,
    } = frontmatter
    const {
        aggregateRating,
        breadcrumb,
        faqPage,
        localBusiness,
        organization,
    } = schemas || {}

    const colorsCssSrc = isDev() ? `${env('API_URL')}/blob/colors` : '/colors.css'

    return (
        <>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link
                rel="shortcut icon"
                href="/favicon.ico"
            />
            {
                meta?.map((m) => (
                    <meta key={m.key} {...m} />
                ))
            }
            {
                links?.map((l) => (
                    <link key={l.key} {...l} />
                ))
            }
            {
                styles?.map((s) => (
                    <style
                        key={s.key}
                        {...s.props}
                        dangerouslySetInnerHTML={s.style}
                    />
                ))
            }
            {
                organization &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={organization}
                />
            }
            {
                localBusiness &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={localBusiness}
                />
            }
            {
                breadcrumb &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={breadcrumb}
                />
            }
            {
                aggregateRating &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={aggregateRating}
                />
            }
            {
                faqPage &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={faqPage}
                />
            }
            {
                googleAnalyticsId &&
                <>
                    <script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
                    <script dangerouslySetInnerHTML={`window.dataLayer = window.dataLayer || [];
                            function gtag() {window?.dataLayer?.push(arguments)}
                            gtag('js', new Date());
                            gtag('config', '${googleAnalyticsId}');`}
                    />
                </>
            }
            {
                googleTagManagerId &&
                <script dangerouslySetInnerHTML={`(function (w, d, s, l, i) {
                            w[l] = w[l] || []; w[l].push({
                                'gtm.start':
                                    new Date().getTime(), event: 'gtm.js'
                            }); var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                        })(window, document, 'script', 'dataLayer','${googleTagManagerId}')`}
                />
            }
            <link type='text/css' rel='stylesheet' href={colorsCssSrc} />
        </>
    )
})
