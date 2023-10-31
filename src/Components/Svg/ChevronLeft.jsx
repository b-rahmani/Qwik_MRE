const ChevronLeft = (props) => {

    return <>
        <svg
            {...props}
            viewBox="0 0 24 24"
        >
            <g
                transform="translate(0 24) rotate(-90)"
            >
                <g
                    transform="translate(4 7.5)"
                >
                    <path
                        d="M15.759,8.754a.811.811,0,0,1-1.072.081l-.092-.081L8,2.027,1.405,8.754a.811.811,0,0,1-1.072.081L.241,8.754a.852.852,0,0,1-.08-1.093l.08-.094L7.418.246A.811.811,0,0,1,8.49.165l.092.081,7.177,7.321A.852.852,0,0,1,15.759,8.754Z"
                        transform="translate(0 0)"
                    />
                </g>
            </g>
        </svg>
    </>

}

export default ChevronLeft
