import { Link } from 'react-router-dom';
import bloggerRequest from '../../../media/bloggerrequest.png';

const UserDashboard = () => {
    return (
        <div className="w-full">
            <div className="w-full h-full flex justify-center items-center">
                <img src={bloggerRequest} loading='lazy' alt="" />
            </div>
        </div>
    )
}

export default UserDashboard;
