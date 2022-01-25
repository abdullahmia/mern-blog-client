import cogoToast from 'cogo-toast';
import {useQuery, useMutation, useQueryClient} from 'react-query';
import { makeBlogger } from '../../../api/auth';
import { getBloggers } from '../../../api/blogger';
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Empty from '../../../components/Backend/Empty/Empty';
import Loader from '../../../components/Backend/Loader/Loader';

const BloggerRequest = () => {
    // get all bloggers
    const {isloading, data: bloggersRequest} = useQuery('bloggers', getBloggers)


    const cache = useQueryClient();
    // Make Blogger
    const {mutateAsync: makeBloggerFunc} = useMutation('make-blogger', makeBlogger, {
        onSuccess: () => {
            cache.invalidateQueries('bloggers');
            cache.invalidateQueries('users');
            cogoToast.success('Blogger request accepted');
        }
    })



    return (
        <DashboardLayout>
            <h2 className="text-2xl font-semibold text-slate-700">Blogger Request</h2>

            {
                isloading ? <Loader /> : (
                    <div className="mt-4">
                        {   
                            bloggersRequest?.bloggers.length !== 0 ? (
                                <table className="w-full">
                                    <tr>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Name</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Email</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Address</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Phone</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Request Date</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Accept</th>
                                        <th class="bg-blue-100 border text-left px-8 py-4">Delete</th>
                                    </tr>                    
                                        <tbody>
                                            {
                                                bloggersRequest?.bloggers.map((blogger, key) => (
                                                    <tr key={key}>
                                                        <td class="border px-8 py-4">{blogger.user.firstname} {blogger.user.lastname}</td>
                                                        <td class="border px-8 py-4">{blogger.bloggeremail}</td>
                                                        <td class="border px-8 py-4">{blogger.address}</td>
                                                        <td class="border px-8 py-4">{blogger.phonenumber}</td>
                                                        <td class="border px-8 py-4">{blogger.createAt}</td>
                                                        <td class="border px-8 py-4"><button
                                                        onClick={() => makeBloggerFunc(blogger.user._id)}
                                                        className="ml-auto bg-blue-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-user-plus"></i></button></td> 
                                                        <td class="border px-8 py-4"><button className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                </table>
                            ) : <Empty title="Request box" />
                        }
                    </div>
                )
            }

            
        </DashboardLayout>
    )
}

export default BloggerRequest;
