import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'
import {
    post,
    Star,
} from 'Base'
import { useAuthSession } from 'Accounts'

const Rating = component$(({
    activeClass,
    containerClass,
    duplicateMessage,
    entityGuid,
    entityType,
    failMessage,
    inactiveClass,
    once,
    readOnly,
    starClass,
    successMessage,
    value,
}) => {

    const session = useAuthSession()
    const rate = useSignal(value ?? 0)
    const isOpenModal = useSignal(false)
    const message = useSignal('')
    const isSuccess = useSignal(false)

    const clickHandler = $((givenRate) => {

        isOpenModal.value = false
        if (!readOnly) {
            const oldRatings = JSON.parse(localStorage.getItem(entityType)) ?? []
            console.log("old ratings", oldRatings)
            if (once && oldRatings?.includes(entityGuid)) {

                isOpenModal.value = true
                message.value = duplicateMessage ?? "duplicate rate!"
            } else {

                if (session.value && session.value?.user?.guid) {

                    post(`/rating/rate?entityType=${entityType}&entityGuid=${entityGuid}`, {
                        userGuid: session.value.user.guid,
                        value: givenRate
                    }).then((data) => {
                        rate.value = data.average.value
                        localStorage.setItem(entityType, JSON.stringify([...oldRatings, entityGuid]))
                        isOpenModal.value = true
                        isSuccess.value = true
                        message.value = successMessage
                    }).catch(er => {
                        isOpenModal.value = true
                        isSuccess.value = false
                        message.value = failMessage
                    })
                } else {

                    post(`/rating/rate?entityType=${entityType}&entityGuid=${entityGuid}`, {
                        userGuid: '00000000-0000-0000-0000-000000000000',
                        value: givenRate
                    }).then((data) => {
                        rate.value = data.average.value
                        console.log("new local storage", oldRatings)
                        localStorage.setItem(entityType, JSON.stringify([...oldRatings, entityGuid]))
                        isOpenModal.value = true
                        isSuccess.value = true
                        message.value = successMessage
                    }).catch(er => {
                        isOpenModal.value = true
                        isSuccess.value = false
                        message.value = failMessage

                    })
                }
            }
        }
    })

    const hoverHandler = $((newRate) => {
        if (!readOnly) {

            rate.value = newRate
        }
    })

    const startCount = 5
    const starActiveColor = activeClass || 'fill-yellow-500 stroke-yellow-500'
    const starInactiveColor = inactiveClass || 'fill-white stroke-black/50'
    const DefaultClassName = starClass === undefined ? 'w-6' : starClass?.indexOf('w-') > -1 ? starClass : 'w-6' + starClass

    useVisibleTask$(({
        cleanup,
        track
    }) => {
        track(() => isOpenModal.value)
        const id = setTimeout(() => message.value = '', 1000)
        cleanup(() => clearTimeout(id))
    })

    return <div class={containerClass}>
        <div
            onMouseLeave$={() => rate.value = value || 0}
            dir='ltr'
            class={`w-fit flex items-center justify-center text-lg`}
            >
            {[...Array(startCount)].map((item, index) => {
                const givenRating = index + 1
                return <label key={index}>
                    <input
                        type="radio"
                        class='hidden'
                        value={value}
                        onInput$={() => clickHandler(givenRating)}
                    />
                    <div
                        class={`cursor-pointer`}
                        onMouseOver$={() => hoverHandler(givenRating)}
                    >
                        {/* custom icon not work yet */}
                        <Star
                            class={`${index < rate.value && starActiveColor} ${givenRating < rate.value || givenRating === rate.value
                                ? starActiveColor
                                : starInactiveColor} ${DefaultClassName}`}
                        />
                    </div>
                </label>

            })}
        </div>
        {message.value !== '' && <div class={`fixed z-50 top-10 start-10 flex gap-1 items-center text-sm border rounded-lg px-5 py-4 shadow-lg ${isSuccess.value ? " bg-green-50 text-green-700 border-green-200 " : " bg-red-50 text-red-700 border-red-100"}`}>
            {/* {isSuccess ? <Checked class="w-4 aspect-square" /> : <Close class="w-4 aspect-square" />} */}
            {message.value}
        </div>}
    </div >
})

export default Rating
