import { Link } from 'react-router-dom';

const SidebarPostItem = ({post}) => {
    return (
        <Link to={`/post/${post.slug}`} className="flex items-center py-1">
           <div className="flex-shrink-0">
                <img src={`${process.env.REACT_APP_API_URL}/public/images/${post.image}`} className="w-20 h-12 rounded-sm object-cover" alt="" />   
            </div> 
           <div className="ml-3">
                <h5 className="text-sm font-semibold leading-5 font-roboto group-hover:text-blue-500 transition">{post.title}</h5>
                <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-1"><i className="fal fa-clock"></i></span>
                    June 12, 2021
                </div>   
            </div>
        </Link>
    )
}

export default SidebarPostItem
