import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import  { useMutation } from 'react-query';
import cogoToast from 'cogo-toast';
import { login } from '../../../api/auth';
import useContexts from '../../../context/useContexts';
import loginImg from '../../../media/login.png';

const Login = () => {
    const {user, setUser} = useContexts();
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();

    useEffect(() => {
        document.title = 'Login';
        if(user){
            history.push('/dashboard')
        }
    }, [user, history])


    // React Query
    const { isLoading, mutateAsync } = useMutation('login', login, {
        onError: (error) => {
            cogoToast.error("Something is error");
        },
        onSuccess: (data) => {
            setUser(data.user);
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            cogoToast.success('Login Successfull');
            history.push('/dashboard');
        }        
    });

    const handleLoginSubmit = async (data) => {
        await mutateAsync(data);
        reset();
    }


    return (
        <div className="contaier mx-auto h-screen flex items-center justify-center bg-gray-100">

            <div className="w-auto h-auto bg-white shadow-lg">
                {/* <div className=''>
                    <img src={loginImg} alt="w-full" />
                </div> */}
                <div className=''>
                    <div className='py-20 px-10'>
                        <h2 className='text-3xl font-semibold text-gray-700'>Welcome Back!</h2>
                        <form onSubmit={handleSubmit(handleLoginSubmit)} className='flex flex-col mt-6'>
                            <input {...register('email')} type="text" placeholder='Email Address' className='border-b-2 py-2 px-3 mb-5 focus:outline-none' required />

                            <input {...register('password', { min: 8})} type="password" placeholder='Password' className='border-b-2 py-2 mb-5 px-3 focus:outline-none' required />

                            
                            
                            <button type="submit" className='bg-blue-500 text-white py-2 mt-6 hover:bg-black hover:text-white transition'>
                               {
                                   isLoading ? 'Loading' : 'Login'
                               }
                            </button>
                            
                        </form>

                        <div className='mt-8'>
                            <Link to='/register'>Or, Create a new account?</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
