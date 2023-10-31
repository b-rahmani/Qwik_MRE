import { component$ } from '@builder.io/qwik'
import {
    Image,
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    xxl,
    zero,
} from 'Base'
import { BorderDashed } from 'Svg'

const Categories = component$(({
    firstBlackMainTitle,
    items,
    secondBlackMainTitle,
    title,
    yellowMainTitle,
}) => {

    return <>
        <section class="pt-32">

            <div class="max-w-7xl mx-auto px-6">

                <p class="text-center mb-4">
                    {title}
                </p>

                <p class="flex flex-wrap justify-center gap-1 font-black text-3xl mb-10">
                    {firstBlackMainTitle}
                    <span class="text-custom-color1">
                        {yellowMainTitle}
                    </span>
                    {secondBlackMainTitle}
                </p>

            </div>

            <div class="w-full px-3 lg:px-14 my-10">
                <Swiper
                    name="CategoriesSlider"
                    containerClass="overflow-y-hidden scrolling-touch [webkit-scrollbar] [&>.glider-track]:flex [&>.glider-track]:gap-8"
                    config={{
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                        breakpoints: {
                            [zero]: {
                                slidesPerView: 1.2,
                            },
                            [xs]: {
                                slidesPerView: 1.5,
                            },
                            [sm]: {
                                slidesPerView: 2.2,
                            },
                            [md]: {
                                slidesPerView: 2.5,
                            },
                            [xl]: {
                                slidesPerView: 3.5,
                            },
                            [xxl]: {
                                slidesPerView: 4.5,
                            },
                        }
                    }}
                >
                    {
                        items?.map(item => <SwiperSlide
                            key={item?.id}
                        >
                            <a
                                href={item?.link}
                                class='max-w-[310px] relative z-10 aspect-square flex flex-col gap-10 items-center justify-end px-5 py-5 md:py-10 rounded-lg transition-all'
                            >

                                <Image
                                    src={item?.image}
                                    containerClass='w-[100px] aspect-square'
                                    alt={item?.text}
                                />

                                <strong class="text-xl lg:text-2xl h-14 lg:h-16 overflow-hidden text-center">
                                    {item?.text}
                                </strong>

                                <BorderDashed
                                    class="absolute top-[1px] start-[1px] z-0 w-[calc(100%-2px)] h-[calc(100%-2px)]"
                                />

                            </a>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

        </section>
    </>
})

export default Categories
