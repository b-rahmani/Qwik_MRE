import {
    component$,
    Slot,
} from '@builder.io/qwik'
import ChevronDown from './ChevronDown'

const Accordion = component$(({
    clickHandler,
    isOpen,
    item,
    title,
}) => {

    return <div
        onClick$={() => clickHandler(item.id)}
        class="my-2 w-full shadow rounded-lg flex flex-col"
    >
        <div class={`w-full py-2 px-4 flex items-center justify-between fill-white cursor-pointer`}>
            <span class='font-bold text-sm md:text-base py-3'>
                {title}
            </span>
            <ChevronDown class={`w-6 fill-gray-600 ${isOpen ? ' rotate-180 ' : ' '}`} />
        </div>
        <div class={`px-4 overflow-hidden transition-all ${isOpen ? 'max-h-[50vh] duration-1000' : 'max-h-0 duration-1000'}`}>
            <div class="pb-6 text-sm">
                <Slot />
            </div>
        </div>
    </div>
})

export default Accordion
