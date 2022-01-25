import Comment from "../Comment/Comment"

const Comments = ({comments}) => {
    console.log(comments);
    return (
        comments.length ? (
            <div className="bg-white p-4 mt-4">
                <h3 className="font-semibold text-gray-700 uppercase">What people are say</h3>
                <h5 className="text-sm font-semibold text-gray-700 mt-4">
                    {comments.length}
                    {
                        comments.length === 1 ? " Comment" : ' Comments'
                    }
                </h5>

                <div>
                    {
                        comments.map((comment, key) => (
                            <Comment key={key} comment={comment} />
                        ))
                    }
     
                </div>

            </div>
        ) : ""
    )
}

export default Comments
