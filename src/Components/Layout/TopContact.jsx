const TopContact = ({
    link,
    title,
}) => {

    return <>
        <a
            href={link}
            class="hidden lg:block text-custom-color5 font-bold border border-custom-color5 px-6 py-1.5 hover:text-black hover:bg-custom-color5 transition-all">
            {title}
        </a>
    </>
}

export default TopContact
