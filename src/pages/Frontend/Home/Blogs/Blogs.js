import Blog from "../../../../components/Frontend/Blog/Blog";
import Empty from '../../../../components/Backend/Empty/Empty';

const Blogs = ({posts}) => {
    return (
        <div className="mt-6">
            {
                posts.length === 0 ? <Empty title='No Such Post' /> : (
                    <div className="grid grid-cols-2 gap-4">
                        {
                            posts.map((blog, key) => (
                                <Blog key={key} blog={blog} />
                            ))
                        }
                    </div>
                )
            }
            
        </div>
    )
}

export default Blogs;