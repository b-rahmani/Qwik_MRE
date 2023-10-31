import { Image } from 'Base'
import { LongArrowLeft } from 'Svg'

const HeroWithFullWidthBannerAndItems = ({
    banner,
    ctaLink,
    ctaText,
    description,
    descriptiveTitle,
    items,
    title,
}) => {

    return <>

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:gap-20 my-20">
            <div>
                <h1>{title}</h1>
                <div class="font-black leading-[3.5rem] sm:leading-[5rem] text-3xl sm:text-5xl my-4">
                    {descriptiveTitle}
                    <span class='text-custom-color1 font-black text-4xl sm:text-5xl'>.</span>
                </div>
            </div>
            <div>
                <p>{description}</p>
                <a
                    href={ctaLink}
                    class="inline-block mt-10 lg:mt-12 font-bold group text-black"
                    aria-label={ctaText}
                >
                    {ctaText}
                    <LongArrowLeft class="w-8 h-8 inline-block ms-5 group-hover:ms-7 transition-all" />
                </a>
            </div>
        </div>
        <div>
            <Image
                src={banner}
                alt={title}
                containerClass="w-full aspect-[1/1.2] md:aspect-[3/1]"
            />
        </div>
        {items && items.length > 0 &&
            <div class="max-w-7xl mx-auto px-6 flex flex-col gap-20 md:gap-20 my-20">
                {
                    items?.map(item => <>
                        <div
                            key={item?.id}
                            class="grid grid-cols-1 md:grid-cols-2 md:gap-20 items-center"
                        >
                            <div>
                                <h1 class="font-black leading-[3.5rem] sm:leading-[5rem] text-3xl sm:text-5xl my-4">
                                    {item?.title}
                                    <span class='text-custom-color1 font-black text-4xl sm:text-5xl'>.</span>
                                </h1>
                                <p>{item?.description}</p>
                            </div>
                            {item?.ctaText?.trim() &&
                                <a
                                    href={item?.ctaLink}
                                    class="inline-block mt-10 lg:mt-12 font-bold group text-black"
                                    aria-label={item?.ctaText}
                                >
                                    {item?.ctaText}
                                    <LongArrowLeft
                                        class="w-8 h-8 inline-block ms-5 group-hover:ms-7 transition-all"
                                    />
                                </a>
                            }
                        </div>
                    </>)
                }
            </div>
        }
    </>
}

export default HeroWithFullWidthBannerAndItems
