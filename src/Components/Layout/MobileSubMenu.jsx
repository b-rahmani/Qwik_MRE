import { component$ } from '@builder.io/qwik'

const MobileSubMenu = component$(({
    isShownSubMenu,
    items,
}) => {

    return <>
        <ul class={`${isShownSubMenu.value ? 'block ' : 'hidden '} p-0 bg-gray-200 w-full`}>
            {
                items?.map(item =>
                    <li
                        class='py-2 px-4 border-dashed border-b border-gray-300 last:border-0'
                        key={item.id}
                    >
                        <a href={item?.url ?? '#'}>
                            {item?.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </>

})

export default MobileSubMenu
