import {
    ChevronLeft,
    ChevronRight,
} from 'Svg'

const Pagination = () => {

    return <>
        <section>
            <div class="max-w-7xl mx-auto px-5 flex flex-wrap gap-1.5 justify-center items-center my-8 md:mt-14 md:mb-24">
                <div class="flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color2 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all">
                    <ChevronRight
                        class="w-5 h-5"
                    />
                </div>
                <div class="flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color2 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all">
                    1
                </div>
                <div class="flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color2 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all">
                    2
                </div>
                <div class="flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color2 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all">
                    3
                </div>
                <div class="flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color2 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all">
                    4
                </div>
                <div class="flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color2 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all">
                    5
                </div>
                <div class="flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color2 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all">
                    <ChevronLeft
                        class="w-5 h-5"
                    />
                </div>
            </div>
        </section>
    </>
}

export default Pagination
