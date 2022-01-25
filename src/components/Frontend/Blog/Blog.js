import {Link} from 'react-router-dom';

const Blog = ({blog}) => {
    return (
        <Link to={`/post/${blog?.slug}`} className="bg-white p-4">
            <img src={`${process.env.REACT_APP_API_URL}/public/images/${blog.image}`} className="w-100 h-36 mx-auto" alt="" />
            <h2 className="text-xl font-semibold text-gray-700 mt-5">{blog?.title.slice(0, 47)}</h2>
            <p className="flex mt-2 text-gray-500 text-sm">
                <span className="flex items-center capitalize">
                    <i className="fas fa-user mr-2"></i>
                    abdullah mia
                </span>
                <span className="flex items-center ml-auto">
                    <i className="far fa-clock mr-1"></i>
                    10-21-2022
                </span>
            </p>
        </Link>
    )
}

export default Blog
