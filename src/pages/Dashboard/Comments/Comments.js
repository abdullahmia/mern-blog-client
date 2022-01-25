import {useQuery, useMutation, useQueryClient} from 'react-query';
import dateFormat from 'dateformat';
import { allComments, deleteComment } from '../../../api/commnet';
import DashboardLayout from "../DashboardLayout/DashboardLayout"
import cogoToast from 'cogo-toast';
import Loader from '../../../components/Backend/Loader/Loader';
import Empty from '../../../components/Backend/Empty/Empty';

const Comments = () => {

    const cache = useQueryClient();
    const {isLoading, data } = useQuery('comments', allComments);
    const {mutateAsync: deleteCommentFunc} = useMutation('delete-comment', deleteComment, {
        onSuccess: (data) => {
            cache.invalidateQueries('comments');
            cogoToast.success(data.message);
        },
        onError: (error) => {
            cogoToast.error(error.message);
        }
    })

    return (
        <DashboardLayout>
            <h2 className="text-2xl font-semibold text-slate-700">All Comments</h2>

            {
                isLoading ? <Loader /> : (
                    <div className="mt-4">
                        {
                            data?.comments.length != 0 ? (
                                <table className="w-full">
                                    <tr>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Post</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Comment</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Name</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Date</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Delete</th>
                                    </tr>

                                    {
                                        <tbody>
                                            {
                                                data?.comments.map((comment, key) => (
                                                    <tr>
                                                        <td class="border px-8 py-4">{comment.post.title}</td>
                                                        <td class="border px-8 py-4">{comment.comment}</td>
                                                        <td class="border px-8 py-4">{comment.name}</td>
                                                        <td class="border px-8 py-4">{dateFormat(comment.createdAt)}</td>

                                                        <td class="border px-8 py-4"><button
                                                        onClick={() => deleteCommentFunc(comment._id)}
                                                        className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    }
                                </table>
                            ) : <Empty title='Comment box' />
                        }
                        
                    </div>
                )
            }
            

        </DashboardLayout>
    )
}

export default Comments;
