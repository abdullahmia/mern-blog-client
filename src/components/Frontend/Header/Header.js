import { Link, NavLink } from 'react-router-dom';
import useContexts from '../../../context/useContexts';
import logo from '../../../media/logo.png';

const Header = () => {
    // const [user, setUser] = useContexts();
    const {user, setUser} = useContexts();
    return (
        <div className="border shadow-sm py-4">
            <div className='container mx-auto'>
                <div className='flex'>
                    <div className='flex items-center gap-7'>
                        <div className='w-40'>
                            <img src={logo} className='w-full' alt="" />
                        </div>
                        <div className='flex gap-5'>
                            <NavLink exact to='/' activeClassName='text-blue-500' className='hover:text-blue-500 transition font-semibold text-sm'>Home</NavLink>
                            <Link to='/' className='hover:text-blue-500 transition font-semibold text-sm'>About</Link>
                            <NavLink to='/contact' activeClassName='text-blue-500'  className='hover:text-blue-500 transition font-semibold text-sm'>Contact</NavLink   >
                        </div>
                    </div>
                    <div className='ml-auto flex items-center gap-4 font-semibold'>
                        {
                            user ? (
                                <Link to='/dashboard' className='hover:text-blue-500 transition text-sm'> Dashboard</Link>
                            ) : (
                                <>
                                    <NavLink to='/login' activeClassName='text-blue-500' className='hover:text-blue-500 transition text-sm'>Login</NavLink>
                        
                                     <NavLink to='/register' activeClassName='text-blue-500' className='hover:text-blue-500 transition text-sm'> Register</NavLink>
                                </>
                            )
                        }
                        

                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
