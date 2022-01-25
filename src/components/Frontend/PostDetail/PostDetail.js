import dateFormat from 'dateformat';


const PostDetail = ({post}) => {
    return (
        <div className="bg-white">

            <img src={`${process.env.REACT_APP_API_URL}/public/images/${post.image}`}  className="w-full h-96" alt="" />

            <div className="p-3">
                <h2 className="text-xl text-gray-700 font-semibold">{post?.title}</h2>

                <p className="flex justify-between text-gray-500 text-sm mt-3">
                    <span className="flex items-center capitalize">
                        <i className="fas fa-user mr-2"></i>
                        {post?.addedby?.firstname} {post?.addedby?.lastname}
                    </span>
                    <span className="flex items-center capitalize">
                        <i className="fas fa-list mr-2"></i>
                        {post?.category.name}
                    </span>
                    <span className="flex items-center gap-2">
                        <i className="far fa-clock mr-1"></i>
                        {dateFormat(post.createAt, 'fullDate')}
                    </span>
                </p>

                <div className="mt-4 text-gray-500 text-sm text-justify" dangerouslySetInnerHTML={{ __html: post?.description}}  />


            </div>
        </div>
    )
}

export default PostDetail
