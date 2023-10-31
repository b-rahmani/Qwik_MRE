import {
    Section,
    useCategoryUrl,
} from 'Blog'

const Categories = ({ categories }) => {

    return <Section title="Categories">
        {
            categories?.map(category => <a
                key={category.id}
                href={useCategoryUrl(category.slug)}
                class='flex gap-x-4 pb-4'
            >
                <p>{category.title}</p>
            </a>)
        }
    </Section>
}

export default Categories
