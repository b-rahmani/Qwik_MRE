import {
    component$,
    Slot,
} from '@builder.io/qwik'

const Modal = component$(({ isOpen }) => {

    return <div
        onClick$={() => isOpen.value = !isOpen.value}
        class={`fixed z-50 top-0 start-0 w-screen h-screen bg-black/60 transition-all duration-700 ${isOpen.value ? '' : ' hidden'}`}
    >
        <div class={`max-w-full z-50 w-[600px] p-8 text-center bg-white rounded-lg mx-auto duration-700 delay-[1000000] transition-all 
            ${isOpen.value ?
                ' translate-y-full' :
                ' translate-y-0'}`}>
            <Slot />
        </div>
    </div>
})

export default Modal
