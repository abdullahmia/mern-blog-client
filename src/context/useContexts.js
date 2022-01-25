import {useContext} from 'react'
import { AuthContext } from './AuthProvider'
const useContexts = () => {
    return useContext(AuthContext);
}

export default useContexts;