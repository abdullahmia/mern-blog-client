import { Oval } from  'react-loader-spinner';

const Loader = () => {
    return (
        <div className='w-full h-96 flex justify-center items-center'>
            <Oval
                heigth="200"
                width="200"
                color='black'
                arialLabel='loading'
            />
        </div>
    )
}

export default Loader
