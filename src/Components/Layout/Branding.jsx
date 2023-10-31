import { Image } from 'Base'

const Branding = ({
    logo,
    name,
}) => {

    return <>
        <a
            href="/"
            title={name}
        >
            <Image
                src={logo}
                alt={name}
                containerClass='w-[140px] aspect-[7/2]'
                priority
            />
        </a>
    </>
}

export default Branding
