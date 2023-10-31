import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import {
    CaretDown,
    CaretUp,
} from 'Svg'
import { MobileSubMenu } from 'Layout'

const MobileMenuItems = component$(({
    index,
    isShown,
    item,
}) => {

    const isShownSubMenu = useSignal(false)

    return <>
        <div class="flex justify-between items-center">
            <a
                href={item?.url}
                key={item?.id}
                class={`w-fit text-custom-color22 p-5 font-bold duration-700 after:absolute after:content-[''] after:bg-custom-color1 after:bottom-0 after:start-0 after:w-0 after:h-1 hover:after:w-full after:transition-all after:duration-700 delay-[${index * 1000000}ms] ${isShown.value ? 'translate-x-0' : 'translate-x-[100vw]'}`}
            >
                {item?.title}
            </a>
            {
                item?.relatedItems?.children.length > 0 &&
                <div class="p-3" onclick$={() => isShownSubMenu.value = !isShownSubMenu.value}>
                    {isShownSubMenu.value ? <CaretUp class="w-6 aspect-square fill-custom-color1" /> : <CaretDown class="w-6 aspect-square fill-custom-color21" />}
                </div>
            }
        </div>
        {item.relatedItems.children.length > 0 &&
            <MobileSubMenu
                isShownSubMenu={isShownSubMenu}
                items={item.relatedItems.children}
            />
        }
    </>
})

export default MobileMenuItems
