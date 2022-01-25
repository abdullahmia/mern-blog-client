import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Main from "../../../components/Frontend/Main/Main";
import Title from '../Home/Title/Title';
import PageLayout from "../PageLayout/PageLayout";
import { getCategoryAllPost } from '../../../api/post';
import Blogs from '../Home/Blogs/Blogs';


const CategoryPost = () => {
    const [posts, setPosts] = useState([]);
    const { catName } = useParams();

    useQuery(['category', catName], () => getCategoryAllPost(catName), {
        onSuccess: (data) => {
            setPosts(data.posts);
        }
    });

    return (
        <PageLayout>
            <Main>
                <Title title={catName} />

                <Blogs posts={posts} />

            </Main>
        </PageLayout>
    )
}


export default CategoryPost;