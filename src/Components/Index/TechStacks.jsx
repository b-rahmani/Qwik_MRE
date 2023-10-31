import { component$ } from '@builder.io/qwik'
import {
    Image,
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from 'Base'

const TechStacks = component$(({
    items,
    mainTitle,
    summary,
    title,
}) => {

    return <>
        <section class="py-20 lg:py-32 bg-zinc-100 mt-20 lg:mt-32">
            <div class="max-w-7xl mx-auto px-6">

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center">

                    <div>

                        <p class="lg:mb-4">
                            {title}
                        </p>

                        <strong class='block lg:mb-14 text-5xl'>
                            {mainTitle}
                        </strong>

                    </div>

                    <p class="mb-12 lg:mb-0">
                        {summary}
                    </p>

                </div>

                <div class="lg:col-start-2 lg:col-span-2">
                    <Swiper
                        name="techStackSlider"
                        containerClass="overflow-y-hidden scrolling-touch [webkit-scrollbar] [&>.glider-track]:flex [&>.glider-track]:gap-8"
                        config={{
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                            breakpoints: {
                                [zero]: {
                                    slidesPerView: 1.2,
                                },
                                [xs]: {
                                    slidesPerView: 1.8,
                                },
                                [sm]: {
                                    slidesPerView: 2.6,
                                },
                                [md]: {
                                    slidesPerView: 3.6,
                                },
                                [lg]: {
                                    slidesPerView: 4.6,
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
                                    class="max-w-[320px] block aspect-[6/5]"
                                    title={item?.title}
                                >
                                    <Image
                                        src={item?.image}
                                        containerClass='w-full aspect-square bg-white p-12'
                                        alt={item?.title}
                                    />
                                </a>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

            </div>
        </section>
    </>
})

export default TechStacks
