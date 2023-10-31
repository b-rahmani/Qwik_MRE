const SocialNetworks = ({
    childClass: childStyle,
    items,
    parentClass: parentStyle,
}) => {

    return <>
        <div class={`gap-3 ${parentStyle}`}>
            {
                items?.map(item => <>
                    < a
                        href={item?.link}
                        class="w-4 aspect-square"
                        title={item?.title}
                        key={item?.id}
                    >
                        <div
                            dangerouslySetInnerHTML={item?.svg}
                            class={`w-4 h-4 transition-all ${childStyle}`}
                        />
                    </a>
                </>)
            }
        </div>
    </>
}

export default SocialNetworks
