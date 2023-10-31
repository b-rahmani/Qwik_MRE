import {
    $,
    component$,
} from '@builder.io/qwik'
import { Backdrop } from 'Shared'
import { Close } from 'Svg'
import { MobileMenuItems } from 'Layout'

const MobileMenu = component$(({
    isShown,
    menuItems,
}) => {

    const closeMenuHandler = $(() => {
        isShown.value = !isShown.value
    })

    return <>
        {isShown.value &&
            <Backdrop click={closeMenuHandler} />
        }

        <div class={`lg:hidden w-[90%] max-w-[300px] fixed overflow-y-scroll bg-white top-0 start-0 h-[100vh] z-50 transition duration-300 divide-y ${isShown.value ? "translate-x-0" : "translate-x-full"} `}>
            <div class="py-5 px-3"
                onClick$={() => isShown.value = false}
            >
                <Close class="w-10 h-10 text-custom-color1" />
            </div>
            {
                menuItems?.map((
                    item,
                    index,
                ) => <div>
                        <MobileMenuItems
                            item={item}
                            index={index}
                            isShown={isShown}
                            key={item?.id}
                        />
                    </div>
                )
            }
        </div>

    </>

})

export default MobileMenu

