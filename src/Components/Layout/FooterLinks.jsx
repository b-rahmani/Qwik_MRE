const FooterLinks = ({
    items,
    title,
}) => {

    return <>
        <div>
            <span class="block font-bold text-xl lg:text-2xl mb-6 text-white">
                {title}
            </span>
            <ul>
                {
                    items?.map(item => <>
                        <li class="mb-4" key={item?.id}>
                            <a
                                href={item?.link}
                                class="text-sm hover:text-custom-color5 transition-all"
                                title={item?.text}
                            >
                                {item?.text}
                            </a>
                        </li>
                    </>)
                }
            </ul>
        </div>
    </>
}

export default FooterLinks
