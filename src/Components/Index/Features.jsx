const Features = ({
    items,
    title,
}) => {

    return <>
        <section>
            <div class="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <strong class='block text-center mb-14 text-2xl'>
                    {title}
                </strong>
                <div class="flex flex-col lg:flex-row justify-between items-center gap-14">
                    {
                        items?.map(item => <>
                            <div class="text-center lg:text-start" key={item?.id}>
                                <strong class=' text-2xl'>
                                    {item?.title}
                                </strong>
                                <p class='mt-5 text-sm'>
                                    {item?.summary}
                                </p>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </section>
    </>
}

export default Features
