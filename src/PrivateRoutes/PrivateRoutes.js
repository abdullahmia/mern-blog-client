import { Route, Redirect } from 'react-router-dom';
import useContexts from '../context/useContexts';

const PrivateRoutes = ({children, ...rest}) => {
    const {user} = useContexts();
    return (
        <Route {...rest} 
            render={({ location }) => user ?
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

export default PrivateRoutes;
