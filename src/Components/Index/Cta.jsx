import { Image } from 'Base'
import { LongArrowLeft } from 'Svg'

const Cta = ({
    ctaLink,
    ctaText,
    image,
    mainTitle,
    summary,
    title,
}) => {

    return <>
        <section>
            <div class="max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center gap-14">

                <div class="row-start-2 lg:row-start-1 lg:col-start-">
                    <Image
                        src={image}
                        containerClass='w-full aspect-[1/.6]'
                        alt={title}
                    />
                </div>

                <div class="row-start-1 lg:row-start-1 lg:col-start-2">
                    <div>{title}</div>

                    <div class="font-black text-3xl mt-4 mb-6">
                        {mainTitle}
                    </div>

                    <div class="text-lg">
                        {summary}
                    </div>

                    <a
                        href={ctaLink}
                        class="inline-block mt-12 font-bold group text-custom-color1"
                        title={mainTitle}
                    >
                        {ctaText}
                        <LongArrowLeft
                            class="w-8 h-8 inline-block ms-5 group-hover:ms-7 transition-all"
                        />
                    </a>

                </div>

            </div>
        </section>
    </>
}

export default Cta
