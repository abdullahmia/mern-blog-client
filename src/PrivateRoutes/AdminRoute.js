import { Route, Redirect } from 'react-router-dom';
import useContexts from '../context/useContexts';

const AdminRoute = ({children, ...rest}) => {
    const {user} = useContexts();
    return (
        <Route {...rest} 
            render={({ location }) => user?.type === 'admin' ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />}
        >

        </Route>

    )
}

export default AdminRoute;
