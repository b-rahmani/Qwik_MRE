import { DesktopSubMenu } from 'Layout'

const DesktopMainMenu = ({ menuItems }) => {

    return <>
        <ul class="hidden lg:flex gap-9 items-center">
            {
                menuItems?.map(item => <>
                    <li key={item?.id} class="group relative">
                        <a
                            href={item?.url}
                            class="block text-custom-color22 font-bold text-white py-3 select-none focus:outline-none after:absolute after:content-[''] after:bg-custom-color1 after:bottom-0 after:start-0 after:end-0 after:mx-auto after:w-0 after:h-[3px] hover:text-custom-color1 hover:after:w-full after:transition-all after:duration-700"
                        >
                            {item?.title}
                        </a>
                        {
                            item?.relatedItems?.children?.length > 0 && <DesktopSubMenu items={item?.relatedItems?.children} />
                        }
                    </li>
                </>
                )
            }
        </ul>
    </>
}

export default DesktopMainMenu
