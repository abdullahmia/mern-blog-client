import empty from '../../../media/empty.png';

const Empty = ({title}) => {
    return (
        <div className="w-full h-96 flex flex-col justify-center items-center mt-32">
            <img src={empty} alt="Empay" loading='lazy' />
            <h2 className='text-2xl uppercase font-semibold text-gray-700'>{
                title ? title : 'Data'
            }</h2>
        </div>
    )
}

export default Empty
