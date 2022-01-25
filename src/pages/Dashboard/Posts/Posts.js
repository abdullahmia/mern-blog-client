import DashboardLayout from "../DashboardLayout/DashboardLayout";
import PostCard from '../../../components/Backend/Post/Post';
import useContexts from "../../../context/useContexts";

const Posts = () => {
    const {posts} = useContexts();
    return (
        <DashboardLayout>
            <h2 className="text-2xl text-gray-700 font-semibold">All Posts</h2>

            <div className="grid grid-cols-4 gap-4 mt-6">
                {
                    posts ? (
                        posts.map((post, key) => (
                            <PostCard post={post} />
                        ))
                    ) : <h2>No Such Posts</h2>
                }
            </div>

        </DashboardLayout>
    )
}

export default Posts
