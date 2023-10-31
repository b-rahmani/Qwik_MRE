const DesktopSubMenu = ({ items }) => {

    return <>
        <ul class="invisible opacity-0 translate-y-1/2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 drop-shadow absolute z-50 w-full sm:w-[300px] bg-gray-100 start-0 top-12 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
            {
                items?.map(item =>
                    <li
                        key={item?.id}
                        class="relative px-5 py-3 overflow-hidden text-black hover:bg-custom-color1 hover:text-white transition-all"
                    >
                        <a href={item?.url ?? '#'}>
                            {item?.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </>
}

export default DesktopSubMenu
