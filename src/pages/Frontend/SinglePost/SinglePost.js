import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';

import PageLayout from "../PageLayout/PageLayout";
import Main from "../../../components/Frontend/Main/Main";
import PostDetail from '../../../components/Frontend/PostDetail/PostDetail';
import CommentForm from '../../../components/Frontend/CommentForm/CommentForm';
import Comments from '../../../components/Frontend/Comments/Comments';
import PostDetailLoader from '../../../components/Frontend/Loaders/PostDetailLoader';
import { singlePost } from '../../../api/post';

const SinglePost = () => {
    const { slug } = useParams();

    useEffect(() => {
        document.title = slug;
    }, [slug])

    const {data: post} = useQuery(['post', slug], () => singlePost(slug));

    return (
        <PageLayout>
            <Main>
                {
                    post ? (
                        <>
                            <PostDetail post={post?.post} />
                            <CommentForm postId={post?.post._id} slug={post?.post.slug} />
                            <Comments comments={post?.comments} />
                        </>
                    ) : <PostDetailLoader />
                }
                
            </Main>
        </PageLayout>
    )
}

export default SinglePost;
