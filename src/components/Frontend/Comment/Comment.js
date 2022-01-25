import dateFormat from 'dateformat'

const Comment = ({comment}) => {
    return (
        <div className="flex items-center gap-5 py-5">
            <div className="w-12 h-12 flex-shrink-0">
                <img src="https://simple-tailwind-blogs.netlify.app/images/avatar.png" alt="User" className="w-full" />
            </div>
            <div className='w-full'>
                <h4 class="text-base font-roboto flex justify-between">{comment.name}</h4>
                <p class="text-xs text-gray-400">{dateFormat(comment.createdAt)}</p>
                <p class="text-sm font-600 mt-2">{comment.comment}</p>
            </div>
        </div>
    )
}

export default Comment;
