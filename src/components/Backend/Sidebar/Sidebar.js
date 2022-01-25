import { NavLink, useHistory } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import useContexts from '../../../context/useContexts';

const Sidebar = () => {
    const { user, setUser } = useContexts();
    const history = useHistory();
    const logout = () =>  {
        cogoToast.success('Logout Successfull');
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        setUser(null);
        history.push('/login');
    }


    return (
        <div className="w-72 h-screen mr-2 bg-gray-800">
            <div className="text-white font-semibold text-center py-4 bg-gray-700">
               {user.type.toUpperCase()} DASHBAORD
            </div>


            <div className="flex flex-col justify-between flex-grow">
                <div className="">
                    <NavLink exact to="/dashboard" activeClassName='bg-white border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                        <i className="fas fa-tachometer-slowest mr-3"></i>
                        Dashboard 
                    </NavLink>

                    {
                        user.type === 'admin' ? (
                            <>
                                <NavLink exact to="/dashboard/posts" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-newspaper mr-3"></i>
                                    Posts
                                </NavLink>

                                <NavLink to="/dashboard/posts/new" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-file mr-3"></i>
                                    New Post
                                </NavLink>

                                <NavLink to="/dashboard/categores" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-list mr-3"></i>
                                    Categories
                                </NavLink>

                                <NavLink to="/dashboard/comments" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="far fa-comments-alt mr-3"></i>
                                    Comments
                                </NavLink>

                                <NavLink to="/dashboard/users" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-users mr-3"></i>
                                    Users
                                </NavLink>

                                <NavLink to="/dashboard/blogger-request" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-user-plus mr-3"></i>
                                    Blogger Request
                                </NavLink>

                                <NavLink to="/dashboard/bloggers" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-users-class mr-3"></i>
                                    Blogger
                                </NavLink>

                                <NavLink to="/dashboard/messages" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-envelope mr-3"></i>
                                    Messages
                                </NavLink>

                                <NavLink to="/dashboard/subscribers" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-newspaper mr-3"></i>
                                    Subscribers
                                </NavLink>

                                <NavLink to="/dashboard/comments" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="far fa-user mr-3"></i>
                                    My Account
                                </NavLink>
                            </>
                        ) : user.type === 'blogger' ? (
                            <>
                                <NavLink to="/dashboard/posts" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-newspaper mr-3"></i>
                                    Posts
                                </NavLink>

                                <NavLink to="/dashboard/post/new" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-file mr-3"></i>
                                    New Post
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/dashboard/request-for-blogger" activeClassName='bg-black border-l-4 border-white' className="flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                                    <i className="fas fa-code-branch mr-3"></i>
                                    Request for blogger
                                </NavLink>
                            </>
                        )
                    }

                    <button onClick={logout} className="w-full flex items-center text-gray-100 bg-gray-900 my-1 py-4 px-3 border-l-4 border-blue-600 capitalize">
                        <i className="fas fa-sign-out-alt mr-3"></i>
                        Logout
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
