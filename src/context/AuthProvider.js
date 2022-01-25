import { createContext, useState, useEffect } from 'react';
import {useQuery} from 'react-query';
import { getAllUsers } from '../api/auth';
import { getBloggers } from '../api/blogger';
import { getAllCategories } from '../api/category';
import { getAllPost, letestPost } from '../api/post';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState({});
    const [posts, setPosts] = useState([]);
    const [letestposts, setLetestposts] = useState([]);
    const [bloggersRequest, setBloggersRequest] = useState([]);

    // Get all Users by React Query
    useQuery('users', getAllUsers, {
        onSuccess: (data) => {
            setUsers(data.users);
        }
    });


    // get all categories
    const { isLoading, data } = useQuery('categories', getAllCategories, {
        onSuccess: (data) => {
            setCategories({
                data,
                isLoading
            });
            
        }
    })

    // get all posts
    useQuery('posts', getAllPost, {
        onSuccess: (data) => {
            setPosts(data.posts);
        }
    });

    // Letest post
    useQuery('letest-posts', letestPost, {
        onSuccess: (data) => {
            setLetestposts(data.posts);
        }
    });

    


    const allData = {
        user: user,
        users: users,
        setUser: setUser,
        categories: categories,
        posts: posts,
        letestposts: letestposts,
        bloggersRequest: bloggersRequest
    }

    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;