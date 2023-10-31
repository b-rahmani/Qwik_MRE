import { Image } from 'Base'
import { LongArrowLeft } from 'Svg'

const Hero = ({
    ctaLink,
    ctaText,
    desktopImage,
    mobileImage,
    summary,
    title,
}) => {

    return <>
        <section class="bg-neutral-800 mt-[106px] lg:mt-0">
            <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-14 py-20 text-white">

                <div class="w-full lg:w-1/2 text-center lg:text-start">
                    <h1 class='font-black text-4xl sm:text-5xl'>
                        {title}
                        <span class='text-custom-color1 font-black text-4xl sm:text-5xl'>.</span>
                    </h1>
                    <h2 class='my-10'>
                        {summary}
                    </h2>
                    <a
                        href={ctaLink}
                        class="inline-block mt-10 lg:mt-12 font-bold group text-custom-color5"
                        title={ctaText}
                    >
                        {ctaText}
                        <LongArrowLeft
                            class="w-8 h-8 inline-block ms-5 group-hover:ms-7 transition-all"
                        />
                    </a>
                </div>

                <div class="w-full lg:w-1/2 ">
                    <Image
                        src={desktopImage}
                        alt={title}
                        containerClass="hidden md:block w-full aspect-square"

                        priority
                    />
                    <Image
                        src={mobileImage}
                        alt={title}
                        containerClass="md:hidden w-full aspect-square"

                        priority
                    />
                </div>

            </div>
        </section >
    </>
}

export default Hero
