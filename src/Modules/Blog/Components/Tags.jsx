import {
    Section,
    useTagUrl,
} from 'Blog'

const Tags = ({ tags }) => {

    return <Section title='Tags'>
    {
        tags?.map(tag => <a
            key={tag.id}
            href={useTagUrl(tag.slug)}
            class='flex gap-x-4 pb-4'
        >
            <p>{tag.title}</p>
        </a>)
    }
    </Section>
}

export default Tags
