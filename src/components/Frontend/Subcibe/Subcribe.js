import { useMutation } from 'react-query';
import cogoToast from 'cogo-toast';
import { useForm } from 'react-hook-form';
import { addSubscribe } from '../../../api/contact'

const Subcribe = () => {
    const { register, handleSubmit, reset } = useForm();

    const {isLoading, mutateAsync: subscribeFunc} = useMutation('add-subscribe', addSubscribe, {
        onSuccess: (data) => {
            cogoToast.success(data.message);
        }
    })

    const handleSubscribeSubmit = async data => {
        subscribeFunc(data);
        reset();
    }

    return (
        <div className="bg-white p-4 mt-4">
            <h2 className="text-xl font-semibold text-gray-700">Subcribe for newsletter</h2>
            <form onSubmit={handleSubmit(handleSubscribeSubmit)}>
                <input type="text" {...register('email')} className="border border-gray-400 shadow-sm py-2 mt-3 focus:outline-none pl-3 w-full" placeholder="Email Address" required />
                <button type="submit" className="bg-blue-500 text-white py-2 uppercase mt-3 w-full hover:bg-black hover:text-white transition">
                    {
                        isLoading ? 'Subscribing... ' : 'Subcribe'
                    }
                </button>
            </form>
        </div>
    )
}

export default Subcribe
