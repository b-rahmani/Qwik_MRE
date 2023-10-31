const Video = ({ url }) => {
    return <video
        src={url}
        class='w-full'
        controls
    >
    </video>
}

export default Video
