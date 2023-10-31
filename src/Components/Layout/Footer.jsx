import {
    Contact,
    FooterLinks,
} from 'Layout'

const Footer = ({
    contactInfo,
    firstLinks,
    secondLinks,
    socialNetworks,
    thirdLinks,
}) => {
    return <footer class="bg-neutral-800">
        <div class="max-w-7xl mx-auto px-6 py-16 lg:py-28 grid gap-14 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 text-gray-300">
            <Contact {...contactInfo} socialNetworks={socialNetworks} />
            <FooterLinks {...firstLinks} />
            <FooterLinks {...secondLinks} />
            <FooterLinks {...thirdLinks} />
        </div>
    </footer>
}

export default Footer
