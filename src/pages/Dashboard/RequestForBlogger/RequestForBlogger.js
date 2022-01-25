import cogoToast from 'cogo-toast';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { addBlogger } from '../../../api/blogger';
import useContexts from '../../../context/useContexts';
import DashboardLayout from "../DashboardLayout/DashboardLayout"

const RequestForBlogger = () => {
    const {user} = useContexts();
    const {register, handleSubmit, reset} = useForm();

    const cache = useQueryClient();
    const { isLoading, mutateAsync } = useMutation('add-blogger', addBlogger, {
        onSuccess: (data) => {
            cache.invalidateQueries('bloggers');
            cogoToast.success(data.message);
        },
        onError: (error) => {
            cogoToast.error(error.message);
        }
    })

    const bloggerRequestSubmit = async data => {
        const bloggerData = {
            user: user._id,
            phonenumber: data.phonenumber,
            bloggeremail: data.bloggeremail,
            address: data.address,
            description: data.description
        }
        mutateAsync(bloggerData);
        reset();
    }

    return (    
        <DashboardLayout>
            <div className="mt-4">
                <form onSubmit={handleSubmit(bloggerRequestSubmit)} className='bg-white p-9 w-full mt-10'>
                    <h2 className="text-xl font-semibold text-slate-700">Request for blogger</h2>
                    <div className='flex flex-col mt-6'>
                        <label>Phone Number</label>
                        <input type="number" {...register('phonenumber')} className='bg-gray-100 py-3 rounded-md mt-2 focus:outline-none pl-6' required />
                    </div>

                    <div className='flex flex-col mt-6'>
                        <label>Blogger Email Address</label>
                        <input type="email" {...register('bloggeremail')} className='bg-gray-100 py-3 rounded-md mt-2 focus:outline-none pl-6' required />
                    </div>

                    <div className='flex flex-col mt-6'>
                        <label>Address</label>
                        <textarea {...register('address')} type="text" className='bg-gray-100 py-3 rounded-md mt-2 focus:outline-none pl-6' required ></textarea>
                    </div>

                    <div className='flex flex-col mt-6'>
                        <label className='mb-3'>Descriptions</label>
                        <textarea {...register('description')} type="text" className='bg-gray-100 py-3 rounded-md mt-2 focus:outline-none pl-6' required />
                    </div>

                    <button type='submit' className='bg-blue-600 text-white mt-6 py-3 w-full hover:bg-blue-700 transition'>Send Blogger Request</button>
                </form>
            </div>

        </DashboardLayout>
    )
}

export default RequestForBlogger;
