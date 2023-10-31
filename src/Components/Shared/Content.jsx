import { RichText } from 'Shared'

const Content = ({ content }) => {

    return <>
        {
            content && content !== '[]' &&
            <section class="py-10 bg-zinc-100">
                <div class="max-w-5xl mx-auto px-3 xl:px-0">
                    <RichText content={content} />
                </div>
            </section>
        }
    </>
}

export default Content
