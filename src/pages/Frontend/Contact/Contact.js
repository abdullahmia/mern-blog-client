import {useEffect} from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import cogoToast from 'cogo-toast';
import contactImg from '../../../media/contact.jpg';
import { sendMessage } from '../../../api/contact';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        document.title = 'Contact';
    }, [])

    const {isLoading, mutateAsync: sendMessageFunc} = useMutation('contact', sendMessage, {
        onSuccess: (data) => {
            cogoToast.success(data.message);
        }
    })

    const contactSubmit = async data => {
        await sendMessageFunc(data)
        reset();
    }

    return (
        <div className="contaier mx-auto h-screen flex items-center justify-center bg-gray-100">

            <div className="w-9/12 h-auto bg-white shadow-lg grid grid-cols-2">
                <div className=''>
                    <img src={contactImg} alt="w-full" />
                </div>
                <div className=''>
                    <div className='py-20 px-10'>
                        <h2 className='text-3xl font-semibold text-gray-700'>Get in our touch!</h2>
                        <form onSubmit={handleSubmit(contactSubmit)} className='flex flex-col mt-6'>
                            <input type="text" placeholder='First Name' {...register('firstname')} className='border-b-2 py-2 px-3 mb-5 focus:outline-none' />

                            <input type="text" placeholder='Last Name' {...register('lastname')} className='border-b-2 py-2 px-3 mb-5 focus:outline-none' />

                            <input type="text" placeholder='Email Address' {...register('email')} className='border-b-2 py-2 px-3 mb-5 focus:outline-none' />

                            <textarea placeholder='Your Message' {...register('message')} className='border-b-2 py-2 mb-5 px-3 focus:outline-none' ></textarea>
                            
                            <button type="submit" className='bg-blue-500 text-white py-2 mt-6 hover:bg-black hover:text-white transition'><i className="fas fa-envelope mr-2"></i>
                                {
                                    isLoading ? "Sending Message.." : 'Send Message'
                                }
                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Contact;