import { component$ } from '@builder.io/qwik'

const Backdrop = component$(({
    class: internalClass,
    click,
}) => {

    return <>
        <div
            onClick$={click}
            class={`w-screen h-screen fixed top-0 start-0 bg-black/80 z-30 duration-700 ${internalClass}`}
        >
        </div>

    </>
})

export default Backdrop
