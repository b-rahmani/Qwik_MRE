import { component$ } from '@builder.io/qwik'
import {
    LocalizedDate,
    merge,
} from 'Base'

const Comments = component$(({
    comments,
    containerItemClass,
    containerItemsClass,
    locale,
    title,
    titleClass,
}) => {

    return <>
        <div class={merge("max-w-full w-[600px] mx-auto my-10", titleClass)}>
            <div class="font-bold text-lg mb-4 text-custom-color1">
                {title}
            </div>

            <div class={merge("flex flex-col gap-6", containerItemsClass)}>
                {
                    comments?.map(item => <>
                        <div
                            class={merge("bg-gray-100 rounded p-5 grid grid-cols-1 gap-2 mx-1.5", containerItemClass)}
                            key={item?.id}
                        >
                            <strong>
                                {item?.name}
                            </strong>
                            <div>
                                <LocalizedDate
                                    utcDate={item?.utcDate}
                                    locale={locale}
                                />
                            </div>
                            <p class="line-clamp-4">
                                {item?.body}
                            </p>

                        </div>
                    </>)
                }
            </div>
        </div>
    </>
})

export default Comments
