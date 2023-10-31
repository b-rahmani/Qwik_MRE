import { Pagination } from 'Base'
import {
    Categories,
    Latest,
    MostViewed,
    Popular,
    Post,
    Tags,
} from 'Blog'

const Layout = ({
    categories,
    latestPosts,
    mostViewedPosts,
    popularPosts,
    posts,
    seo,
    tags,
}) => {

    const {
        data,
        metadata,
    } = posts

    return <div class="blog grid px-4 py-20 sm:px-16 md:px-8 lg:px-10 xl:px-20 lg:grid-cols-3 lg:gap-8 max-w-screen-xl xl:mx-auto">
        <main class="lg:col-span-2">
            <div class="grid gap-8 md:grid-cols-2">
                {
                    data?.map(post => <Post
                        key={post.id}
                        post={post}
                    />)
                }
            </div>
            <div>
                <Pagination metadata={metadata} />
            </div>
        </main>
        <aside>
            <Categories categories={categories} />
            <Tags tags={tags} />
            <Latest latestPosts={latestPosts} />
            {/* <Popular popularPosts={popularPosts} /> */}
            {/* <MostViewed mostViewedPosts={mostViewedPosts} /> */}
        </aside>
    </div>
}

export default Layout
