import {Switch, Route} from 'react-router-dom';

// React Query
import { QueryClient, QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// use Context Api
import AuthProvider from './context/AuthProvider';

// Private Route
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import AdminRoute from './PrivateRoutes/AdminRoute';

// Package Css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Import Components
import Header from "./components/Frontend/Header/Header";


// Import Frontend Pages
import Home from './pages/Frontend/Home/Home';
import SinglePost from './pages/Frontend/SinglePost/SinglePost';
import Login from './pages/Frontend/Login/Login';
import Register from './pages/Frontend/Register/Register';
import Contact from './pages/Frontend/Contact/Contact';

// Dashboard Pages
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Posts from './pages/Dashboard/Posts/Posts';
import NewPost from './pages/Dashboard/NewPost/NewPost';
import Categories from './pages/Dashboard/Categories/Categories';
import Comments from './pages/Dashboard/Comments/Comments';
import Users from './pages/Dashboard/Users/Users';
import BloggerReqeust from './pages/Dashboard/BloggerRequest/BloggerRequest';
import Bloggers from './pages/Dashboard/Bloggers/Bloggers';
import Messages from './pages/Dashboard/Messages/Messages';
import Subscribers from './pages/Dashboard/Subcribers/Subscribers';
import RequestForBlogger from './pages/Dashboard/RequestForBlogger/RequestForBlogger';
import CategoryPost from './pages/Frontend/CategoryPost/CategoryPost';
import EditPost from './pages/Dashboard/EditPost/EditPost';

// Initial react query
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/category/:catName' component={CategoryPost} />
            <Route path='/post/:slug' component={SinglePost} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />


            {/* Dashboard Routes */}
            <PrivateRoutes exact path='/dashboard' >
                <Dashboard />
            </PrivateRoutes>

            {/* For Admin Routes */}
            <Route exact path='/dashboard/posts' component={Posts} />
            <AdminRoute path='/dashboard/categores'>
              <Categories />
            </AdminRoute>

            <AdminRoute path='/dashboard/posts/new'>
              <NewPost />
            </AdminRoute>

            <AdminRoute path='/dashboard/posts/edit/:slug'>
              <EditPost />
            </AdminRoute>

            <Route path='/dashboard/comments' component={Comments} />
            <AdminRoute path='/dashboard/users'>
              <Users />
            </AdminRoute>
            <AdminRoute path='/dashboard/blogger-request'>
              <BloggerReqeust />
            </AdminRoute>
            <Route path='/dashboard/bloggers' component={Bloggers} />
            <Route path='/dashboard/messages' component={Messages} />
            <Route path='/dashboard/subscribers' component={Subscribers} />

            {/* User Routes */}
            <Route path='/dashboard/request-for-blogger' component={RequestForBlogger} />

          </Switch>
        </div>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App;