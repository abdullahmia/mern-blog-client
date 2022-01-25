import { useState } from 'react';
import cogoToast from 'cogo-toast';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { createCategory } from '../../../api/category';
import useContexts from "../../../context/useContexts"
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Category from '../../../components/Backend/Categories/Category';
import CategoryEditModal from '../../../components/Backend/CategoryEditModal/CategoryEditModal';

const Categories = () => {

    const {categories, user} = useContexts();
    const { handleSubmit, register, reset } = useForm();


    // React Query
    const cache = useQueryClient();
    const {isLoading, mutateAsync} = useMutation('create-category', createCategory, {
        onSuccess: () => {
            cache.invalidateQueries('categories');
            cogoToast.success('Category has been added');
        },
        onError: (error) => {
            cogoToast.error(error.mesage);
        }
    })

    const addCategorySubmit = async data => {
        const formData = {
            name: data.name,
            addedby: user._id
        }
        mutateAsync(formData);
        reset();
    }


    return (
        <DashboardLayout>
            <form onSubmit={handleSubmit(addCategorySubmit)} className='p-4 bg-white flex justify-between items-center rounded-md'>
                <input type="text" {...register('name')} className='border focus:outline-none px-4 py-2' placeholder='Category Name' required />

                <button type="submit" className='bg-blue-400 py-2 px-7 border-blue-400 text-white hover:bg-blue-500 transition'> 
                    {isLoading ? "Loading": "Add"}
                </button>
            </form>

            

            <div className='w-full flex items-center justify-between mt-10'>
                <h2 className="text-2xl font-semibold text-slate-700">Categories</h2>
            </div>

            {
                categories.data?.categories.length === 0 ? (
                    <div className="w-full h-auto bg-white mt-10 flex items-center justify-center py-6">
                        <div>
                            <img className="w-96" src="https://i.imgur.com/ALxgLTJ.jpg" loading="lazy" alt="" />
                            <h3 className="text-3xl font-semibold">No Such Category</h3>
                        </div>
                    </div>
                 ) : (
                    <div className="mt-4">
                        <table className="w-full">
                            <tr>
                                <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
                                <th className="bg-blue-100 border text-left px-8 py-4">Created Date</th>
                                <th className="bg-blue-100 border text-left px-8 py-4">Added By</th>
                                <th className="bg-blue-100 border text-left px-8 py-4">Edit</th>
                                <th className="bg-blue-100 border text-left px-8 py-4">Delete</th>
                            </tr>


                            <tbody className="">
                                {
                                    categories.data?.categories?.map((category, key) => (
                                       <Category key={key} category={category} />    
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }

            

        </DashboardLayout>
    )
}

export default Categories
