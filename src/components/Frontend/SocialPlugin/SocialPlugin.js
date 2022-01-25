import { Link } from 'react-router-dom';

const SocialPlugin = () => {
    return (
        <div className="bg-white p-4">
            <h2 className="text-xl font-semibold text-gray-700">Socaial Plugins</h2>
            <div className='flex gap-2 mt-3'>
                <Link to="/"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800 hover:bg-blue-700 hover:border-transparent hover:text-white transition">
                    <i className="fab fa-facebook-f"></i>
                </Link>

                <Link to="/"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800 hover:bg-blue-700 hover:border-transparent hover:text-white transition">
                    <i className="fab fa-instagram"></i>
                </Link>

                <Link to="/"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800 hover:bg-blue-700 hover:border-transparent hover:text-white transition">
                    <i className="fab fa-twitter"></i>
                </Link>

                <Link to="/"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800 hover:bg-blue-700 hover:border-transparent hover:text-white transition">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </div>
        </div>
    )
}

export default SocialPlugin
