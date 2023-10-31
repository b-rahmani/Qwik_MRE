import { SocialNetworks } from 'Shared'

const TopBar = ({
    contactInfo,
    mainCta,
    socialNetworks,
}) => {

    return <>

        <div class="flex gap-2 flex-wrap">
            <a href={`tel:${contactInfo?.phone}`}>{contactInfo?.phone}</a>
            <strong class={`${(contactInfo.phone && contactInfo?.email) ? '' : 'hidden'} `}>|</strong>
            <a
                href={`mailto: ${contactInfo?.email}`}
                title={contactInfo?.email}
            >
                {contactInfo?.email}
            </a>
        </div>

        <div class="block lg:hidden font-bold text-white">
            <a
                href={mainCta?.link}
                title={mainCta?.text}
            >
                {mainCta?.text}
            </a>
        </div>

        <SocialNetworks
            {...socialNetworks}
            childClass='fill-custom-color5 hover:fill-custom-color1'
            parentClass='hidden sm:flex '
        />

    </>
}

export default TopBar
