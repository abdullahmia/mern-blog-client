import {useMutation, useQueryClient} from 'react-query';
import {useForm} from 'react-hook-form';
import cogoToast from 'cogo-toast';
import useContexts from '../../../context/useContexts';
import { addComment } from '../../../api/commnet';


const CommentForm = ({postId, slug}) => {
    const {user} = useContexts();

    const { handleSubmit, register, reset } = useForm();

    const cache = useQueryClient();
    const {isLoading: commentLoading, mutateAsync: addCommentFunc} = useMutation('add-commet', addComment, {
        onSuccess: (data) => {
            cache.invalidateQueries(['post', slug]);
            cogoToast.success(data.message);
        }
    })

    const commentSubmit = async (data) => {
        const commentData = {
            post: postId,
            name: data.name,
            comment: data.comment
        }
        await addCommentFunc(commentData);
        reset();
    }


    return (
        <div className='bg-white p-4 mt-4'>
            <h3 className="font-semibold text-gray-700">POST A COMMENT</h3>
            <form onSubmit={handleSubmit(commentSubmit)} className="flex flex-col mt-6">
                <input type="text" {...register('name')} className="border py-2 px-3 w-full focus:outline-none mb-3" placeholder="Your Name" required />
                <textarea cols="30" {...register('comment')} className="border px-3 pt-3 w-full focus:outline-none mb-3" rows="3" placeholder="Write message" required></textarea>

                <button type="submit" className="bg-blue-500 text-gray-100 uppercase px-4 py-2">
                    {
                        commentLoading ? "Loading ..." : "Comment"
                    }
                </button>
            </form>
        </div>
    )
}

export default CommentForm;
