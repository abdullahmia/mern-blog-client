import { NavLink } from 'react-router-dom';

const Category = ({name, cat}) => {
    return (
        <NavLink to={`/category/${cat.slug}`} activeClassName='text-blue-500' className="flex items-center text-sm font-semibold text-gray-500 uppercase py-1 hover:text-blue-400 transition">
            <span className="mr-2"><i className="fas fa-folder-open"></i></span>
            <span>{name}</span>
        </NavLink>
    )
}

export default Category