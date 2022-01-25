import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { signup } from '../../../api/auth';
import { useForm } from 'react-hook-form';
import cogoToast from 'cogo-toast';
import registerImg from '../../../media/register.jpg';
import useContexts from '../../../context/useContexts';

const Register = () => {
    const {user} = useContexts();
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();

    useEffect(() => {
        document.title = 'Register';
        if(user){
            history.push('/dashboard')
        }
    }, [user, history])

    // React Query  
    const { isLoading, mutateAsync } = useMutation('signup', signup, {
        onSuccess: () => {
            cogoToast.success('Account has been created');
            history.push('/login');
        },
        onError: (error) => {
            cogoToast.error(error.message);
        }
    })

    const registerSubmit = async data => {
        await mutateAsync(data);
        reset();
    }


    return (
        <div className="contaier mx-auto h-screen flex items-center justify-center bg-gray-100">

            <div className="w-auto h-auto bg-white shadow-lg">
                <div className=''>
                    <div className='py-20 px-10'>
                        <h2 className='text-3xl font-semibold text-gray-700'>Create a new account!</h2>
                        <form onSubmit={handleSubmit(registerSubmit)} className='flex flex-col mt-6'>
                            <input type="text" placeholder='First Name' {...register('firstname')} className='border-b-2 py-2 px-3 mb-5 focus:outline-none' />

                            <input type="text" placeholder='Last Name' {...register('lastname')} className='border-b-2 py-2 px-3 mb-5 focus:outline-none' />

                            <input type="text" placeholder='Email Address' {...register('email')} className='border-b-2 py-2 px-3 mb-5 focus:outline-none' />

                            <input type="password" placeholder='Password' {...register('password')} className='border-b-2 py-2 mb-5 px-3 focus:outline-none' />
                            
                            <button type="submit" className='bg-blue-500 text-white py-2 mt-6 hover:bg-black hover:text-white transition'>
                                {
                                    isLoading ? 'Loading' : 'Sign up'
                                }
                            </button>
                        </form>

                        <div className='mt-8'>
                            <Link to='/login'>Already have an account?</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;
