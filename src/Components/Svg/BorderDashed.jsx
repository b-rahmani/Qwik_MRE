const BorderDashed = (props) => {

    return <>
        <svg {...props}>
            <rect
                width='100%'
                height='100%'
                fill='none'
                rx='20'
                ry='20'
                stroke='black'
                stroke-width='1'
                stroke-dasharray='15'
                stroke-dashoffset='0'
                stroke-linecap='square'
            />
        </svg>

    </>
}

export default BorderDashed
