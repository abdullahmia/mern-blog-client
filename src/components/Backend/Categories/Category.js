import cogoToast from 'cogo-toast';
import { useState } from 'react';
import {useQueryClient, useMutation} from 'react-query';
import { deleteCategory, updateCategory} from '../../../api/category';
import CategoryEditModal from '../CategoryEditModal/CategoryEditModal';

const Category = ({category}) => {
    const [modal, setModal] = useState(false);
    const [updatedCategory, setUpdatedCategory] = useState('');

    // React Query
    const cache = useQueryClient();
    const {mutateAsync: deleteCategoryFunc} = useMutation('delete-category', deleteCategory, {
        onSuccess: () => {
            cache.invalidateQueries('categories')
            cogoToast.success('Category has been deleted');
        },
        onError: (error) => {
            cogoToast.error(error.message);
        }
    })


    const { mutateAsync: updateCategoryFunc } = useMutation('update-category', updateCategory, {
        onSuccess: (data) => {
            cache.invalidateQueries('categories')
            cogoToast.success(data.message);
        }
    })

    

    return (
        <>
            {
                modal ? 
                <CategoryEditModal
                    setModal={setModal}
                    updatedCategory={updatedCategory}
                    setUpdatedCategory={setUpdatedCategory}
                    updateCategoryFunc={updateCategoryFunc}
                    categorySlug={category.slug}
                /> : ''
            }
            <tr>
                <td className="border px-8 py-4">{category.name}</td>
                <td className="border px-8 py-4">{category.createdAt}</td>
                <td className="border px-8 py-4">{category.addedby.firstname}</td>
                <td className="border px-8 py-4"><button
                    onClick={() => {
                        setModal(true);
                        setUpdatedCategory(category.name);
                    }}
                className="bg-blue-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-edit"></i></button></td>

                <td className="border px-8 py-4"><button
                onClick={() => {
                    deleteCategoryFunc(category._id);
                }}
                className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
            </tr>

        </>
        
    )
}

export default Category;
