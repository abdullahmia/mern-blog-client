import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import cogoToast from 'cogo-toast';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import useContexts from '../../../context/useContexts';
import { updatePost, singlePost } from '../../../api/post';


const EditPost = () => {
    const { slug } = useParams();

    useEffect(() => {
        document.title = 'Edit a post';
    }, [])

    // get the post data
    const {data: getPost} = useQuery(['post', slug], () => singlePost(slug));

    const [post, setPost] = useState({
        title: getPost?.post.title,
        category: getPost?.post.category._id,
        image: ''
    })
    
    const descriptionRef = useRef(null);

    const handleTitle = (e) => {
        setPost({title: e.target.value});
    }

    const handleCategory = (e) =>  {
        setPost({...post, category: e.target.value});
    }

    const handleImage = (e) => {
        setPost({...post, image: e.target.files[0]});
    }

    // Get the contest data
    const {categories, user} = useContexts();

    // React Query
    const cache = useQueryClient();
    const { mutateAsync } = useMutation('create-post', updatePost, {
        onSuccess: (data) => {
            cache.invalidateQueries(['post', slug]);
            cache.invalidateQueries('posts');
            cache.invalidateQueries('letest-posts');
            cogoToast.success(data.message);
        },
        onError: (error) => {
            cogoToast.error(error.message);
        }
    });


    const handlePostSubmit = (e) => {
        e.preventDefault();
        
        if(descriptionRef.current){
            const description = descriptionRef.current.getContent();
            
            const formData = new FormData();
            formData.append('title', post.title);
            formData.append('addedby', user._id);
            formData.append('category', post.category);
            formData.append('articleImage', post.image);
            formData.append('description', description);

            mutateAsync({slug, formData});

            const form = document.getElementById('post_form');
            form.reset();
        }
    }


    return (
        <DashboardLayout>
            <div>
                <h3 className='text-3xl'>Edit a post</h3>

                <form id='post_form' onSubmit={handlePostSubmit} encType='multipart/form-data' className='bg-white p-9 w-full mt-10'>
                    <div className='flex flex-col mt-6'>
                        <label>Post Title</label>
                        <input type="text" value={post.title} onChange={handleTitle} className='bg-gray-100 py-3 rounded-md mt-2 focus:outline-none pl-6' required />
                    </div>
                    
                    <div className='flex flex-col mt-6'>
                        <label>Categories</label>
                        <select onChange={handleCategory} className='bg-gray-100 py-3 rounded-md mt-2 focus:outline-none px-2' required>
                            <option selected>--- Select a category ---</option>
                            {
                                categories.data?.categories.map((category, key) => (
                                    <option value={category._id}
                                    selected={getPost?.post?.category._id === category._id ? true : false}
                                    >{category.name}</option>
                                ))
                            }

                        </select>
                    </div>


                    <div class="flex justify-center mt-8">
                        <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                            <div class="m-4">
                                <label class="inline-block mb-2 text-gray-500">Upload
                                    Image(jpg,png,svg,jpeg)</label>
                                <div class="flex items-center justify-center w-full">
                                    <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                        <div class="flex flex-col items-center justify-center pt-7">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                Select a photo</p>
                                        </div>
                                        <input type="file"  onChange={handleImage} filename='articleImage' accept='image/*' class="opacity-0" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className='flex flex-col mt-6'>
                        <label className='mb-3'>Descriptions</label>
                        <Editor 
                            apiKey='zx9qjz9qf0gjnq103237dl4yq062dcl966d4af5ktfttloa1'
                            onInit={(evt, editor) => descriptionRef.current = editor}
                            initialValue={getPost?.post.description}
                            init={{
                                height: 500
                            }}
                        />
                    </div>
                    

                    <button type='submit' className='bg-blue-600 text-white mt-6 py-3 w-full hover:bg-blue-700 transition'>Edit Post</button>



                </form>
            </div>
        </DashboardLayout>
    )
}

export default EditPost
