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
import { LongArrowLeft } from 'Svg'

const Services = component$(({
    ctaLink,
    ctaText,
    items,
    mainTitle,
    summary,
    title,
}) => {
    return <section>
        <div class="services max-w-7xl mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-14">

            <div class="lg:col-start-1">
                <div class="mb-4">
                    {title}
                </div>

                <div class="font-black text-4xl mt-4 mb-6">
                    {mainTitle}
                </div>

                <div class="text-lg">
                    {summary}
                </div>

                <a
                    href={ctaLink}
                    class="inline-block mt-12 font-bold group text-custom-color1"
                    title={ctaText}
                >
                    {ctaText}
                    <LongArrowLeft
                        class="w-8 h-8 inline-block ms-5 group-hover:ms-7 transition-all"
                    />
                </a>

            </div>

            <div class="lg:col-start-2 lg:col-span-2 my-10">
                <Swiper
                    containerClass="overflow-y-hidden scrolling-touch [webkit-scrollbar] [&>.glider-track]:flex [&>.glider-track]:gap-8"
                    name="servicesSlider"
                    config={{
                        slidesPerView: 2.5,
                        spaceBetween: 25,
                        loop: true,
                        breakpoints: {
                            [zero]: {
                                slidesPerView: 1.2,
                            },
                            [xs]: {
                                slidesPerView: 1.2,
                            },
                            [sm]: {
                                slidesPerView: 2.2,
                            },
                            [md]: {
                                slidesPerView: 2.2,
                            },
                            [lg]: {
                                slidesPerView: 2.5,
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
                                class='relative z-10 flex flex-col gap-4 transition-all'
                                title={item?.text}
                            >

                                <Image
                                    src={item?.image}
                                    containerClass='w-full aspect-[362/452]'
                                    alt={item?.text}
                                />

                                <strong class="text-xl lg:text-2xl">
                                    {item?.text}
                                </strong>

                                <p>
                                    {item?.summary}
                                </p>
                            </a>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    </section>
})

export default Services
