import {
    component$,
    Slot,
} from '@builder.io/qwik'

const SwiperSlide = component$(({
    class: internalClass,
    key,
}) => {

    return <div
        key={key}
        data-hash={key}
        class={`swiper-slide ${internalClass}`}
    >
        <Slot />
    </div>
})

export default SwiperSlide
