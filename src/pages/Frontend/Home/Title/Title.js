const Title = ({title}) => {
    return (
        <div className="bg-white py-3 px-4 flex items-center justify-between">
            <div>
                <h3 className="uppercase font-semibold text-gray-700">{title}</h3>
            </div>
        </div>
    )
}

export default Title;
