import {useEffect} from 'react';
import PageLoaders from "../../../components/Frontend/Loaders/PageLoaders"
import Main from "../../../components/Frontend/Main/Main"
import useContexts from "../../../context/useContexts"
import PageLayout from "../PageLayout/PageLayout"
import Blogs from "./Blogs/Blogs"
import Title from "./Title/Title"

const Home = () => {
    const {posts, categories, letestposts} = useContexts();

    useEffect(() => {
        document.title = 'Backslash Blog';
    }, [])

    return (
        <>
        {
            posts.length && categories?.data?.categories.length && letestposts.length ? (
                <PageLayout>
                    <Main>
                        <Title title="Backslash blogs" />
                        <Blogs posts={posts} />
                    </Main>
                </PageLayout>
            ) : <PageLoaders />
        }
            
        </>
        
    )
}

export default Home
