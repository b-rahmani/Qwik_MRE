import { Image } from 'Base'
import { BorderDashed } from 'Svg'

const Layout = ({ clients }) => {

    return <section class="pt-44 pb-10 lg:py-32 bg-zinc-100">
        <div class="max-w-7xl mx-auto px-6" >

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center mb-6 md:mb-16">

                <div>
                    <h2 class="lg:mb-4">
                        {clients?.supertitle}
                    </h2>

                    <h1 class='capitalize font-bold text-lg md:text-xl lg:text-3xl'>
                        {clients?.title}
                        <span class='text-custom-color1 font-black text-4xl sm:text-5xl'>.</span>
                    </h1>
                </div>

                <div class="flex flex-col gap-3">
                    {clients?.summary}
                </div>

            </div>

        </div>

        <Image
            containerClass="w-full aspect-[1/.3] mb-6 md:mb-32"
            src={clients?.banner}
            alt={clients?.title}
            priority
        />

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {
                clients?.items?.map(item => <>
                    <div class="bg-white max-w-full w-[400px] sm:w-full relative z-10 aspect-square flex flex-col gap-4 items-center justify-center p-5 md:py-10 rounded-lg mx-auto transition-all" key={item?.id}>
                        <Image
                            src={item?.logo}
                            containerClass="w-32 aspect-square"
                            title={item?.title}
                            alt={item?.title}
                            priority
                        />
                        <BorderDashed
                            class="absolute top-0 z-0 w-full h-full"
                        />
                    </div>
                </>)
            }
        </div>
    </section>

}

export default Layout
