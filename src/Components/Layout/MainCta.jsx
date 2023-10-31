const MainCta = ({
    link,
    text,
}) => {

    return <>
        <a
            href={link}
            class={`text-custom-color5 font-bold border border-custom-color5 px-6 py-1.5 hover:text-black hover:bg-custom-color5 transition-all ${text ? 'hidden lg:block' : ' hidden'}`}>
            {text}
        </a>
    </>
}

export default MainCta
