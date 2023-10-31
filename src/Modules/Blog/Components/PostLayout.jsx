import { component$ } from '@builder.io/qwik'
import { RichText } from 'Base'

const PostLayout = component$(({ content }) => {

    return <>
        <h1>hi</h1>
        <RichText
            content={content}
        />
    </>
})

export default PostLayout
