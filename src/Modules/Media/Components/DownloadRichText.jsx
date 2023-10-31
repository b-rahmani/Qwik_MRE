const Download = ({
    description,
    title,
    url,
}) => {

    const downloadIcon = <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        class="fill-white group-hover:fill-green-200 mx-1 transition duration-200"
    >
        <path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z" />
    </svg>

    return <div class="bg-gray-300 rounded-lg max-w-xs shadow-lg px-4 py-1 text-center mx-auto">
        <p class='font-bold text-center my-3'>
            {title || "Download"}
        </p>
        {
            description &&
            <p class='text-justify text-sm leading-6 my-0'>{description}</p>
        }
        <div class='flex gap-x-2 items-center justify-center w-fit mx-auto bg-gray-800 px-2 py-1 rounded-lg my-2 group'>
            <a
                target="_blank"
                download
                href={url}
                class='flex item-center ps-2 text-white group-hover:text-green-200 transition duration-200'
            >
                Download {downloadIcon}
            </a>
        </div>
    </div>
}

export default Download
