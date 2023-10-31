import { SocialNetworks } from 'Shared'
const Contact = ({
    addressFirstPart,
    addressLink,
    addressSecondPart,
    addressTitle,
    email,
    emailTitle,
    phone,
    phoneTitle,
    socialNetworks,
    title,
}) => {

    return <>
        <div>
            <span class="block font-bold text-xl lg:text-2xl mb-6 text-white">
                {title}
            </span>

            <div class="w-full mb-4">
                <div class="font-bold text-white">
                    {addressTitle}
                </div>
                <div class="flex flex-col mt-2">
                    <a
                        href={addressLink}
                        class="text-sm hover:text-custom-color1 transition-all mb-1"
                        aria-label={addressTitle}
                    >
                        {addressFirstPart}
                    </a>
                    <a
                        href={addressLink}
                        class="text-sm hover:text-custom-color1 transition-all"
                        aria-label={addressTitle}
                    >
                        {addressSecondPart}
                    </a>
                </div>
            </div>

            <div class="w-full mb-4">
                <div class="font-bold text-white">
                    {emailTitle}
                </div>
                <a
                    href={`mailto:${email}`}
                    class="text-sm hover:text-custom-color1 break-all transition-all"
                    aria-label={email}
                >
                    {email}
                </a>
            </div>

            <div class="w-full mb-4">
                <div class="font-bold text-white">
                    {phoneTitle}
                </div>
                <a
                    href={`tel:${phone}`}
                    class="text-sm hover:text-custom-color1 break-all transition-all"
                    title={phoneTitle}
                >
                    {phone}
                </a>
            </div>

            <div class="w-full mt-8">
                <span class="block font-bold text-xl lg:text-2xl mb-6 text-white">
                    Follow Us
                </span>

                <SocialNetworks
                    {...socialNetworks}
                    childClass='fill-custom-color1 hover:fill-custom-color5'
                    parentClass='flex'
                />

            </div>

        </div>
    </>
}

export default Contact
