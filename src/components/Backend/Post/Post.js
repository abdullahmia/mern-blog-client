import cogoToast from 'cogo-toast';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import dateFormat, { masks } from "dateformat";
import { deletePost, makeRemoveFeatured } from '../../../api/post';

const Post = ({post}) => {
    
    const cache = useQueryClient();
    const { mutateAsync: deletePostFunc } = useMutation('delete-post', deletePost, {
        onError: (error) => {
            cogoToast.error(error.message);
        },
        onSuccess: () => {
            cache.invalidateQueries('posts');
            cogoToast.success('Post has been delete');
        }
    })


    const {mutateAsync: featuredMakeRemove} = useMutation('make-remove-featured', makeRemoveFeatured, {
        onSuccess: (data) => {
            cache.invalidateQueries('posts');
            cogoToast.success(data.message);
        },
        onErrorr: (error) => {
            console.log(error);
            cogoToast.error(error.message);
        }
    })

    console.log('This is post: ', post);

    return (
        <div className="bg-white p-4 shadow-lg">
            <img src={`${process.env.REACT_APP_API_URL}/public/images/${post.image}`} className="w-100 h-44" alt="" />
            <div className="h-16">
                <h2 className="text-xl font-semibold text-gray-700 mt-5">{post.title.slice(0, 35)}.</h2>
            </div>
            
            <div className='flex justify-between'>
                <span className='text-sm font-semibold'><i className="fad fa-eye"></i> 150</span>
                <span>Abdullah</span>
            </div>

            <div>
              <i className="far fa-clock"></i>   <span>{dateFormat(post.createAt, 'fullDate')}</span>
            </div>

            <hr className="my-4" />
            <p className="flex gap-6 justify-center mt-2 text-gray-500 text-sm">
                <Link to={`/dashboard/posts/edit/${post.slug}`} className="py-2 px-3 rounded-lg"><i className="fas fa-edit"></i></Link>

                
                <button onClick={() => {
                    post.isFeatured ? (
                        featuredMakeRemove({
                            slug: post.slug,
                            type: 'featured'
                        })
                    ) : featuredMakeRemove({
                            slug: post.slug,
                            type: 'unfeatured'
                        })
                }} className="text-xl py-2 px-3 rounded-lg">
                    {
                        post.isFeatured  ? (
                            <abbr title="Remove from Featured">
                                <i className="fas fa-star"></i>
                            </abbr>
                        ) : (
                            <abbr title="Make Featred Post">
                                <i className="far fa-star"></i>
                            </abbr>
                        )
                    }
                </button>


                <button
                    onClick={() => deletePostFunc(post._id)}
                className="py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button>
                
            </p>
        </div>
    )
}

export default Post
